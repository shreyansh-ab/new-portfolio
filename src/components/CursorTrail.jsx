import React, { useEffect, useRef } from 'react';
import './CursorTrail.css';

function CursorTrail() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Trail points for smooth smoke
        const trailPoints = [];
        const maxTrailLength = 20; // Number of points in the trail

        // Mouse move handler
        const handleMouseMove = (e) => {
            // Add current mouse position to trail
            trailPoints.push({
                x: e.clientX,
                y: e.clientY,
                life: 1
            });

            // Remove old points
            if (trailPoints.length > maxTrailLength) {
                trailPoints.shift();
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        function animate() {
            // Clear canvas with slight fade for smoky effect
            ctx.fillStyle = 'rgba(10, 10, 15, 0.3)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw smooth smoke trail
            if (trailPoints.length > 1) {
                for (let i = 0; i < trailPoints.length; i++) {
                    const point = trailPoints[i];
                    const progress = i / trailPoints.length;

                    // Fade out older points
                    point.life -= 0.02;

                    // Calculate size and opacity based on position in trail
                    const size = 16 * (1 - progress); // Larger smoke trail
                    const opacity = progress * point.life * 0.3; // Fade based on position and life

                    // Draw soft circle for smoke effect
                    const gradient = ctx.createRadialGradient(
                        point.x, point.y, 0,
                        point.x, point.y, size
                    );

                    gradient.addColorStop(0, `rgba(100, 150, 255, ${opacity})`);
                    gradient.addColorStop(0.5, `rgba(80, 130, 235, ${opacity * 0.5})`);
                    gradient.addColorStop(1, 'rgba(60, 110, 215, 0)');

                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Remove dead points
                for (let i = trailPoints.length - 1; i >= 0; i--) {
                    if (trailPoints[i].life <= 0) {
                        trailPoints.splice(i, 1);
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        animate();

        // Handle resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="cursor-trail-canvas"></canvas>;
}

export default CursorTrail;

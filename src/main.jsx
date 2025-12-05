import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

// Hide preloader with a minimum display time
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Remove preloader with quick fade-out after 4 seconds
        setTimeout(() => {
            preloader.classList.add('fade-out');
            // Remove from DOM after fade completes
            setTimeout(() => {
                preloader.remove();
            }, 400); // Match CSS transition duration
        }, 4000); // 4 seconds loading duration
    }
});

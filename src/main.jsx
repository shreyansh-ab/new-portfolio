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
        // Remove preloader instantly when loading bar completes (4 seconds)
        setTimeout(() => {
            preloader.remove();
        }, 4000); // Matches loading bar animation duration
    }
});

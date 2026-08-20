import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx'
import './index.css'

// Backward compatibility: Redirect hash URLs to clean URLs (e.g. /#/contact -> /contact)
if (window.location.hash.startsWith('#/')) {
  const path = window.location.hash.substring(1); // Get path after #
  window.history.replaceState(null, '', path);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)

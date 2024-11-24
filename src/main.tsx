import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n.js';
import React from 'react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback="loading..">
    <App />
  </React.Suspense>
);

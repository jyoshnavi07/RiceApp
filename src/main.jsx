import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
// for collapsing and expanding menu bar
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/theme.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <App />
  </BrowserRouter>
)

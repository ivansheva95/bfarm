import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.scss'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <>
      <App />
      <ToastContainer />
    </>
  );


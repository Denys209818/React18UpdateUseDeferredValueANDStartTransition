// import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//! - оператор вказує, що даний елемент строго повертає елемент і не може повернути null
export const root = createRoot(document.getElementById('root')!);


root.render(<BrowserRouter>
  <App />
</BrowserRouter>);


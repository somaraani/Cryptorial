import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import 'fontsource-roboto';

ReactDOM.render(
    <BrowserRouter >
      {console.log(process.env.PUBLIC_URL)}
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);

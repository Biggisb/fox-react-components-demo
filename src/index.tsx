import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'fox-select':any;
            'fox-list' : any;
            'fox-list-item' : any;
            'fox-textfield' : any;
            'fox-checkbox':  any;
            'fox-button':  any;
            'fox-app-bar':  any;
            'fox-back-layer':  any;
            'fox-content-layer':  any;
            'fox-front-layer':  any;
        }
    }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

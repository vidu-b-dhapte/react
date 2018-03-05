import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App cat={5}name="My first App"/>, document.getElementById('root'));
registerServiceWorker();

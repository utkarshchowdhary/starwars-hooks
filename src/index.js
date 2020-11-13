import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import 'normalize.css/normalize.css';
import './styles/styles.css';

ReactDOM.render(<App />, document.querySelector('#root'));

serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import FetchingDataFromApi from './FetchingDataFRomAPI';
import App from './App';
import ExampleRadio from './ExampleRadio';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

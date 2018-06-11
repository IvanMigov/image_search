import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { sagaMiddleware } from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './store/sagas';
import './index.scss';
import App from './App';

const store = configureStore();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();



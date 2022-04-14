import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './actions/reducers/rootReducer';
import { FontStyle } from './Components/Container.style';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f)
  )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FontStyle/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
//**** npm install redux, react-redux, redux-dev-tools extension github */
//add the google chrome redux tool extension



//we need to combine all our reducers into one
//when we create the store
const store = createStore(allReducers
  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
   <Provider store= {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

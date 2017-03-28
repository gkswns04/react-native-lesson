import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDt0igjIS77xGCS81R6ZkXl9KdR5B_lEp0',
      authDomain: 'manager-4eb9f.firebaseapp.com',
      databaseURL: 'https://manager-4eb9f.firebaseio.com',
      storageBucket: 'manager-4eb9f.appspot.com',
      messagingSenderId: '362497753733'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

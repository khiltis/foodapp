import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainAppRoutes from './routes/MainAppRoutes';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    // return <MainAppRoutes />;
    return(
      <Provider store={store}>
        <MainAppRoutes />
      </Provider>
    );
  }
}

export default App;

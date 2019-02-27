import React from 'react';
import { Provider } from 'react-redux';

import createStore from './state/store';
import { storePlugins } from './extend';
import App from './components/App';


export default function (props) {

  storePlugins(props.plugins);
  const store = createStore(props.plugins);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

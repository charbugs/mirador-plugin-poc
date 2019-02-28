import React from 'react';
import { Provider } from 'react-redux';
import { storePlugins } from './extend';
import App from './components/App';


export default function (store, props) {

  storePlugins(props.plugins);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

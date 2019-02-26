import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import App from './components/App';
import { storePlugins } from './extend'
;
export default function (props) {
  storePlugins(props.plugins);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

import React from 'react';

const PluginHeader = (props) => {
  console.log(props);
  return <h1>Plugin</h1>
}


export default {
  target: 'Header',
  modus: 'replace',
  component: PluginHeader,
}

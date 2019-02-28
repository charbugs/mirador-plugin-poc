import React from 'react';
import { getPlugins } from './pluginStore';

// withPlugins must be the innermost HOC to match the name of the target component

/**
 *
 * @param TargetComponent
 */
export const withPlugins = TargetComponent => {

  const HOC = (props) => {
    const plugin = getPlugins().find(p => p.target === TargetComponent.name);
    console.log(TargetComponent.name);
    if (!plugin) {
      return (<TargetComponent {...props} />);
    }
    if (plugin.modus === 'remove') {
      return null;
    }
    if (plugin.modus === 'replace') {
      return React.createElement(plugin.component, { ...props });
    }
    if (plugin.modus === 'add') {
      return (<TargetComponent {...props} PluginComponent={plugin.component} />);
    }
    return null;
  }
  return HOC
}

import React, { Component } from 'react';
import { getPlugins } from '.';

export function withPlugins(TargetComponent) {
  return class extends Component {
    render() {
      const plugin = getPlugins().find(plugin => plugin.target === TargetComponent.name);

      if (!plugin) {
        return <TargetComponent { ...this.props } />
      }
      else if (plugin.modus === 'remove') {
        return null;
      }
      else if (plugin.modus === 'replace') {
        return React.createElement(plugin.component, { ...this.props });
      }
    }
  }
}

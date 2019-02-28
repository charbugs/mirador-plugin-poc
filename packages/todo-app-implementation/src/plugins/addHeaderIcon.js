import React from 'react';
import ExtensionIcon from '@material-ui/icons/Extension';

const MyHeaderIcon = props => <ExtensionIcon />;

export const addHeaderIcon = {
  target: 'Header',
  modus: 'add',
  component: MyHeaderIcon,
};

import React from 'react';
import Grid from '@material-ui/core/Grid';

import Header from './Header';
import TodoEditor from './TodoEditor';
import TodoTable from './TodoTable';

const App = props => (
  <Grid container direction="column" spacing={24}>
    <Grid item>
      <Header />
    </Grid>
    <Grid container item direction="row" spacing={24}>
      <Grid item xs={4}>
        <TodoEditor />
      </Grid>
      <Grid item xs={8}>
        <TodoTable />
      </Grid>
    </Grid>
  </Grid>
);

export default App;

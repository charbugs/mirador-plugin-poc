import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';


const TodoTable = props => (
  <Paper style={{ padding: "24px 24px" }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Todo</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { Object.values(props.todos).map(todo => (
          <TableRow key={todo.text}>
            <TableCell>{todo.text}</TableCell>
            <TableCell>{todo.user}</TableCell>
            <TableCell>{todo.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, null)(TodoTable);

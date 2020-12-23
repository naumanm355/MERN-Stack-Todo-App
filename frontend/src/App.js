import React, { useEffect, useState } from 'react';
import './App.css';
import AddList from './components/list/addList'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import ShowList from './components/list/showList';
import AddTodo from './components/todo/addTodo';
import ShowTodo from './components/todo/showTodo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const todo = []

function App() {
  const classes = useStyles();
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    console.log("Called")
  })

  const saveList = async (value) => {
    await setTodoList([])
    await todo.push(value);
    setTodoList(todo);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} style={{ padding: '2%' }}>
        <Grid item xs={5}>
          <h1>Add List</h1>
          <AddList saveList={saveList} />
          <br />
          <ShowList todoList={todoList} />
        </Grid>
        <Grid item xs={7}>
          <h1>Show Todo of List</h1>
          <AddTodo />
          <br />
          <ShowTodo />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

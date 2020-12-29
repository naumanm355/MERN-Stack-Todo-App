import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import AddList from './addList';
import { Button, Grid, TextField } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
    boldText: {
        fontWeight: 'bold'
    },
    changePointer: {
        cursor: 'pointer'
    }
});

export default function ShowList(props) {
    const classes = useStyles();
    const [isUpdate, setIsUpdate]=useState(false)
    const [updateList, setUpdateList] = useState({ id: '', name: ''})
    const [todoList, setTodoList] = useState([])
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [showTodo, setShowTodo] = useState(false);
    const [listId, setListId] = useState('')
    const [title, setTitle] = useState('')
    const [hideDateField, setHideDateField] = useState(false);
    const [editedTodo, setEditiedTodo] = useState('')

    useEffect(()=>{
        
    })
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
      };
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
    }
    const editList = (data) => {
        setIsUpdate(true);
        setUpdateList({name: data.name, id: data._id})
    }
    const deleteList = (id) => {
        // console.log(id)
        props.handleDeleteList(id);
        setTimeout(() => {
            props.handleShowList()
        }, 300);
        setTodoList([])
    }

    const getTodo = (row) => {
        setListId(row._id)
        setShowTodo(true);
        setTodoList([...row.todo])
    }

    const addTodo = () => {
        if(title.trim() !== "") {
            props.handleCreateTodo(listId, title, selectedDate);
            setTitle('');
            setTimeout(() => {
                props.handleShowList()
            }, 300);
        } else {
            console.log("title is empty")
        }
    }

    const deleteTodo = (data) => {
        console.log(data)
        const afterFilter = todoList.filter(dd => dd._id !== data._id)
        setTodoList([...afterFilter])
        props.handleDeleteTodoFromList(listId, data._id);
        setTimeout(() => {
            props.handleShowList()
        }, 300);
    }

    const editTodo =(data) => {
        setEditiedTodo(data._id)
        setHideDateField(true)      
        setTitle(data.title)
    }

    const updateTodo = () => {
        if(title.trim() !== "") {
        setTodoList(todoList.map(item => item._id == editedTodo ? {...item, title: title} : item))
        setTitle('')
        setHideDateField(false)
        props.handleEditTodo(listId, editedTodo, title)
        setTimeout(() => {
            props.handleShowList()
        }, 300);
    } else {
        console.log("Titile is empty")
    }
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ padding: '2%' }}>
                <Grid item xs={5}>
                <div>
                <AddList handleCreateList = {props.handleCreateList} isUpdate={isUpdate} updatlist={updateList}
                handleUpdateList={props.handleUpdateList} handleShowList={props.handleShowList}/>
            </div>
            <div>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow >
                            <TableCell className={classes.boldText} align="left">Name</TableCell>
                            <TableCell className={classes.boldText} align="right">Edit</TableCell>
                            <TableCell className={classes.boldText} align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.list.map((row) => (
                            <TableRow key={row._id} className={classes.changePointer}>
                                <TableCell align="left" onClick={()=>getTodo(row)}>{row.name}</TableCell>
                                <TableCell align="right">
                                    <EditIcon onClick={()=>editList(row)} style={{color:'blue'}} />
                                </TableCell>
                                <TableCell align="right">
                                    <ClearIcon onClick={()=>deleteList(row._id)} style={{color:'red'}}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
                </Grid>
                {showTodo ?
                <Grid item xs={7}>
                    <div>
                            <TextField id="username" name="username" variant="outlined" size="small" placeholder="Enter title" value={title}
                            onChange={handleChangeTitle} />
                            {!hideDateField ? 
                            <TextField
                                id="date"
                                type="date"
                                format="MM/dd/yyyy"
                                onChange={handleDateChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /> 
                            : 
                            ''
                            }
                            {!hideDateField ? 
                            <Button variant="outlined" size="medium" color="primary"
                            onClick={addTodo}>Add</Button>
                        :<Button variant="outlined" size="medium" color="primary"
                        onClick={updateTodo}>Update</Button>}
                            
                    </div>
                    {todoList.length > 0 ? 
                    <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow >
                                <TableCell className={classes.boldText} align="left">Status</TableCell>
                                <TableCell className={classes.boldText} align="left">Title</TableCell>
                                <TableCell className={classes.boldText} align="left">Date</TableCell>
                                <TableCell className={classes.boldText} align="right">Edit</TableCell>
                                <TableCell className={classes.boldText} align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todoList.map((row) => (
                                <TableRow key={row._id} className={classes.changePointer}>
                                    <TableCell align="left" >{row.status == "uncomplete" ? <ClearIcon style={{color:'red'}}/> : <CheckIcon style={{color:'blue'}}/>}</TableCell>
                                    <TableCell align="left" >{row.title}</TableCell>
                                    <TableCell align="left" >{row.date}</TableCell>
                                    <TableCell align="right">
                                        <EditIcon style={{color:'blue'}} onClick={()=>editTodo(row)} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <ClearIcon style={{color:'red'}} onClick={()=>deleteTodo(row)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                    : ''}
                </Grid>
                : '' }
            </Grid>
        </div>
    );
}

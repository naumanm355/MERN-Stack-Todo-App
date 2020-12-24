import React, { useEffect } from 'react';
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

const useStyles = makeStyles({
    boldText: {
        fontWeight: 'bold'
    },
});

export default function ShowList(props) {
    const classes = useStyles();
    useEffect(()=>{
        console.log("mine",props.list)
    })
    const editList = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div>
                <AddList handleCreateList = {props.handleCreateList}/>
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
                            <TableRow key={row._id} style={{ cursor: 'pointer' }}>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="right">
                                    <EditIcon onClick={()=>editList(row)} style={{color:'blue'}} />
                                </TableCell>
                                <TableCell align="right">
                                    <ClearIcon style={{color:'red'}}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    );
}

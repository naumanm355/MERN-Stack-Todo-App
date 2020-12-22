import React from 'react';
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
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
    boldText: {
        fontWeight: 'bold'
    },
});

export default function ShowTodo(props) {
    const classes = useStyles();
    const data =[
        {mark:'comp', title: 'todo 1', date:'22/12/20'},
        {mark:'incomp', title: 'todo 2', date:'22/12/20'},
        {mark:'incomp', title: 'todo 3', date:'22/12/20'},
    ]
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow >
                            <TableCell className={classes.boldText} align="left">Mark</TableCell>
                            <TableCell className={classes.boldText} align="left">Title</TableCell>
                            <TableCell className={classes.boldText} align="left">Date</TableCell>
                            <TableCell className={classes.boldText} align="right">Edit</TableCell>
                            <TableCell className={classes.boldText} align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.title} style={{ cursor: 'pointer' }}>
                                <TableCell align="left">{row.mark == "comp" ? <DoneIcon style={{color:'blue'}}/> : <ClearIcon style={{color:'red'}}/>}</TableCell>
                                <TableCell align="left">{row.title}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="right">
                                    <EditIcon style={{color:'blue'}} />
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
    );
}

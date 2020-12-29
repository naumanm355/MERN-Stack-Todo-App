import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function AddList(props) {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const getValue = (value) => {
        if(value.trim() !== "") {
            props.handleCreateList(value)
            setTimeout(() => {
                props.handleShowList()
            }, 300);
            // props.saveList(value);
            setValue('');
        }
    }
    const updateValue = () => {
        if(value.trim() !== "") {
            props.handleUpdateList(props.updatlist.id,value)
            setTimeout(() => {
                props.handleShowList()
                setShow(false)
            }, 300);
            setValue('')
        }
    }
    useEffect(()=>{
        setValue(props.updatlist.name)
        setShow(props.isUpdate)
    },[props.updatlist.name])
    return (
        <div>
            {show ?
            <form>
                <TextField
                    id="outlined-size-small"
                    placeholder="Enter name of list"
                    variant="outlined"
                    size="small"
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                />
                <Button variant="outlined" size="medium" color="primary" onClick={() => updateValue()}>
                    Update
            </Button>
            </form>
            :
            <form onSubmit={(event) => { event.preventDefault(); props.saveList(value) }}>
                <TextField
                    id="outlined-size-small"
                    placeholder="Enter name of list"
                    variant="outlined"
                    size="small"
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                />
                <Button variant="outlined" size="medium" color="primary" onClick={() => getValue(value)}>
                    Add
            </Button>
            </form>
            }
        </div>
    );
}
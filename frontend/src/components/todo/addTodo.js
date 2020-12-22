import { Button, TextField } from '@material-ui/core';
import React from 'react'

export default function AddTodo() {

    const getValue = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.get('username'));
    }
    return (
        <div>
            <form onSubmit={getValue}>
                <TextField id="username" name="username" variant="outlined" size="small" placeholder="Enter title" />

                <TextField id="email" name="email" variant="outlined" size="small" placeholder="Enter title" />

                <Button variant="outlined" size="medium" color="primary">Send data</Button>
            </form>
        </div>
    )
}
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListView from './components/list/listView'

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ListView} />
        </Switch>
    </BrowserRouter>
)
export default Root
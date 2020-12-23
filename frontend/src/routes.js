import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import listcom from './components/list/addList'

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={listcom} />
        </Switch>
    </BrowserRouter>
)
export default Root
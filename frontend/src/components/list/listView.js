import React, { Component } from 'react';
import { List_Action, List_Status } from '../../constants/listActions';
import AddList from './addList';
import ShowList from './showList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        list_status: state.list_Reducer.list_status
    }
}

const mapDispatchToProps = (dispatch) => {

}

class ListView extends Component {
    constructor(props){
        super(props)
    }
    getScreen(status) {
        switch (status) {
            case List_Status.NEW:
                return <AddList />
            default:
                
        }
    }
    render(){
        return (
            <div>
                {this.getScreen(this.props.list_status)}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView)
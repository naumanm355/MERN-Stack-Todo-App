import React, { Component } from 'react';
import { List_Action, List_Status } from '../../constants/listActions';
import AddList from './addList';
import ShowList from './showList';
import { connect } from 'react-redux';
import { handleCreateList, handleShowList } from '../../actions/listActions'

const mapStateToProps = (state) => {
    return {
        list_status: state.list_Reducer.list_status,
        lists: state.list_Reducer.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreateList: (name) => {dispatch(handleCreateList(name))},
        handleShowList: ()=> { dispatch(handleShowList()) }
    }
}

class ListView extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.props.handleShowList()        
    }
    getScreen(status) {
        switch (status) {
            case List_Status.SHOW:
                return <ShowList handleCreateList={this.props.handleCreateList} list = {this.props.lists}/>
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
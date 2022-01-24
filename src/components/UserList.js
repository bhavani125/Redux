import React, { Component } from 'react';

import { getUsers } from '../actions/userAction';
import { connect } from 'react-redux';

class UserList extends Component {

    componentDidMount(){
        // console.log(this.props.getUsers());
          this.props.getUsers();
    }

    render() {
        // console.log(this.props.users)
        const users = this.props.users;
        let renderList = 'No Users';
        if (users) {
            renderList = users.map(user => {
                return (<a  key={user.id} className="list-group-item">{user.name}</a>);
            });
        }
        
        return (
            <div className='userlist-container'>
                <div className="list-group">
                   {renderList}
                </div>
            
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        users: state.user.users,
    }
}
export default connect(mapStateToProps, { getUsers })(UserList);
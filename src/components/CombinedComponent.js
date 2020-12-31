import React, { Component } from 'react';
import AllUsers from './AllUsers';
import UserForm from './UserForm';

class CombinedComponent extends Component {
    
    render() {
         
        return (
            <div className="">
                <UserForm />
                <AllUsers />
            </div>
        );
    }
}
export default CombinedComponent;

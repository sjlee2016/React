import React from 'react';
import User from './User/User'

const Users = (props) => props.users.map((user, index) => {
    return <User
    email = {
        user.email
    }
    password = {
        user.password
    }
    changed = {
        (event) => props.changed(event, user.id)
    }
    click = {
        () => props.delete(index)
    }
    key = {
        user.key
    }
    />
});


export default Users; 
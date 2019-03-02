'use strict';
import React from 'react';

const user = props => {
    const {user} = props;
    return <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
    </tr>
};

export default User;
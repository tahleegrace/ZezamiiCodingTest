import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
	const getAgeText = (age) => {
		return `${age} ${age > 1 ? 'years' : 'year'}`;
	};

	return (
		<Card className={classes.users}>
			<ul>
				{props.users?.length > 0 ?
				(
					props.users.map(user => (<li key={user.id}>{user.username} ({getAgeText(user.age)} old)</li>))
				) : <li>No users listed</li>}
			</ul>
		</Card>
	);
};

export default UsersList;

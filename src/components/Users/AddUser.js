import React from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from './UsersList';

let usersList = [];

const AddUser = () => {
	/*

	Add functions here. 

	*/

	return (
		<div>
			<Card className={classes.card}>
				<form onSubmit={null} className={classes.form}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" value={null} onChange={null} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" value={null} onChange={null} />
					<Button type="submit" className={classes.submit}>
						Add User
					</Button>
				</form>
			</Card>
			<UsersList users={usersList} />
		</div>
	);
};

export default AddUser;

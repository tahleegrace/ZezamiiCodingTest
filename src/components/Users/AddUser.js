import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from './UsersList';
import { cloneDeep } from "lodash";

const AddUser = () => {
	const [username, setUsername] = useState('');

	const usernameChanged = (event) => {
		setUsername(event.target.value);
	};

	const [age, setAge] = useState('');

	const ageChanged = (event) => {
		setAge(event.target.value);
	};

	// TODO: Replace the users list with context.
	const [usersList, setUsersList] = useState([]);

	const addUser = (event) => {
		event.preventDefault(); // Stop the screen from being refreshed.

		const newUser = {
			id: usersList.length + 1,
			username: username,
			age: Number(age),
		};

		const newUsersList = cloneDeep(usersList);
		newUsersList.push(newUser);

		setUsersList(newUsersList);
		setUsername('');
		setAge('');
	};

	return (
		<div>
			<Card className={classes.card}>
				<form onSubmit={addUser} className={classes.form}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" value={username} onChange={usernameChanged} required />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" value={age} onChange={ageChanged} required />
					<Button type="submit">
						Add User
					</Button>
				</form>
			</Card>
			<UsersList users={usersList} />
		</div>
	);
};

export default AddUser;

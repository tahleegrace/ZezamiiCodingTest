import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from './UsersList';
import { cloneDeep } from "lodash";
import { preventDecimalsOrNegativesInNumberFieldOnKeydown, preventDecimalsOrNegativesOnPaste } from '../Validation/ValidationHelpers';

const AddUser = () => {
	const [username, setUsername] = useState('');

	const usernameChanged = (event) => {
		setUsername(event.target.value);
	};

	const [age, setAge] = useState('');

	const onAgeKeydown = (event) => {
		preventDecimalsOrNegativesInNumberFieldOnKeydown(event);
	};

	const ageChanged = (event) => {
		setAge(preventDecimalsOrNegativesOnPaste(event.target.value));
	};

	// If the users list is to be used across a larger application, I would use context or Redux to store it.
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
					<input id="age" type="number" value={age} onKeyDown={onAgeKeydown} onInput={ageChanged} required min="1" />
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

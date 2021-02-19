import React, { useEffect, useState, useRef } from 'react';
import { Box, FormControl, Button } from '@material-ui/core';
import { useStyles } from '../../styles/components/login.js';
import { withSnackbar } from 'notistack';
import { buttonNotification } from '../../common/constants';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../Header';
import PropTypes from 'prop-types';
import { fetchRepoForNewUser } from '../../api/fetchRepoForUser';

const Login = props => {
	const classes = useStyles(props);
	const dispatch = useDispatch();
	const history = useHistory();
	const [uname, setUname] = useState('');

	const { successNotific } = buttonNotification;
	const { enqueueSnackbar } = props;

	const inputRef = useRef();
	const submitBtn = useRef();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const onChangeHandler = e => setUname(e.target.value);

	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			e.target.name === 'email' && submitBtn.current.focus();
		}
	};

	return (
		<FormControl className={classes.signInForm}>
			<Header />

			<Box className={classes.inputContainer}>
				<input
					type="email"
					name="email"
					ref={inputRef}
					className="username"
					onKeyDown={handleKeyDown}
					placeholder="Enter GitHub UserName"
					value={uname}
					onChange={onChangeHandler}
				/>
				<Button
					key={successNotific}
					disabled={uname.length === 0}
					className={classes.btn}
					variant="contained"
					color="primary"
					name="submit"
					ref={submitBtn}
					onClick={()=>fetchRepoForNewUser(uname, enqueueSnackbar, dispatch, history)}
				>
					Submit
				</Button>
			</Box>
		</FormControl>
	);
};

export default withSnackbar(Login);

Login.propTypes = {
	enqueueSnackbar: PropTypes.func,
};

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../styles/components/pageNotFound';
import { Box, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const PageNotFound = props => {
	const history = useHistory();
	const classes = useStyles(props);

	return (
		<Box className={classes.signInForm}>
			<Typography variant="h4" gutterBottom={true} className={classes.title}>
				404.. PAGE NOT FOUND
			</Typography>
			<Button variant="contained" color="primary" onClick={() => history.push('/')}>
				HOME
			</Button>
		</Box>
	);
};

export default PageNotFound;
PageNotFound.propTypes = {
	classes: PropTypes.object,
};
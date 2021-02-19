import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from '../../styles/components/displayUserRepo.js';
import Header from '../Header';
import ListOfRepo from './ListOfRepo'
import PropTypes from 'prop-types';

const DisplayRepo = props => {
	const classes = useStyles(props);

	return (
		<Box className={classes.mainContainer}>
            <Header headerVariant="h4"/>
            <ListOfRepo/>
		</Box>
	);
};

export default DisplayRepo;

DisplayRepo.propTypes = {
	headerVariant: PropTypes.object,
};
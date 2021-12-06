import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Box, Badge, Button } from '@material-ui/core';
import Logo from '../../Logo';
import { Link } from 'react-router-dom';
import CustomPopover from './CustomPopover';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
	const [notifications] = useState([]);

	return (
		<AppBar
			elevation={0}
			{...rest}
		>
			<Toolbar
				sx={{
					flexDirection: 'row',
					flex: 1,
				}}>
				<Link to="/app/dashboard"
					sx={{
						alignItems: 'flex-start',
						flexDirection: 'row'
					}}
				>
					<Logo height="55px" width="60px" />
				</Link>
				<IconButton color="inherit"
					sx={{

					}}>
					<Badge
						badgeContent={notifications.length}
						color="primary"
						border-bottom="1px solid #d1d8e4"
						variant="dot"
					/>
				</IconButton>
				<Box
				sx={{
							float: 'right',
							marginLeft: 'auto'
						}}>
					<CustomPopover
						sx={{
							backgroundColor: '#D3D3D3',
							height: 2,
							boxShadow: 5,
						}}
					/>
				</Box>
			</Toolbar>
			<Box
				sx={{
					backgroundColor: '#D3D3D3',
					height: 2,
					boxShadow: 5
				}}
			/>
		</AppBar>
	);
};

DashboardNavbar.propTypes = {
	onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
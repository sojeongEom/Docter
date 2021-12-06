import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadow';
import typography from './typography';

const theme = createMuiTheme({
	palette: {
		background: {
			default: '#ffffff',
			paper: colors.common.white
		},
		primary: {
			contrastText: '#000000',
			main: '#ffffff',
		},
		text: {
			primary: '#172b4d',
			secondary: '#6b778c',
		}
	},
	shadows,
	typography
});

export default theme;
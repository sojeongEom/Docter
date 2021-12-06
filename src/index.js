import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css'

const theme = createMuiTheme({
	typography: {
		fontFamily: 'SCDream5',
	},
});

ReactDOM.render((
	<MuiThemeProvider theme={theme}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</MuiThemeProvider>
), document.getElementById('root'));

serviceWorker.unregister();
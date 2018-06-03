import { createMuiTheme } from '@material-ui/core/styles';
import WebFont from "webfontloader";

WebFont.load({
	google: {
		families: ['Old Standard TT', 'Karla']
	}
});

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#494F5C',
			main: '#494F5C',
			dark: '#494F5C',
			contrastText: '#fff'
		},
		secondary: {
			light: '#CEC0A8',
			main: '#CEC0A8',
			dark: '#CEC0A8',
			contrastText: '#fff'
		}
	},
	typography: {
		fontFamily: `'Karla', sans-serif`,
		title: {
			fontFamily: `'Old Standard TT', serif`
		},
		display1: {
			fontFamily: `'Old Standard TT', serif`
		}
	}
});

export default theme;
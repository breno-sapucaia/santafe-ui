import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { JwtProvider } from './config/contexts/jwt-context';
import Pages from './pages/';

function App() {

	return (
		<React.Fragment>
			<CssBaseline />
			<JwtProvider>
				<Pages />
			</JwtProvider>
		</React.Fragment>
	);
}
export default App;

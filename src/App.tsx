import { createStyles, CssBaseline, makeStyles, Theme, Typography } from '@material-ui/core';
import React from 'react';
import SessionPage from './pages/session';

function App() {
  	const classes = useStyles()
  	return (
    	<React.Fragment>
      		<CssBaseline />
      		<SessionPage />
      		<Typography className={classes.footer} component="footer" variant="caption" > todos os direitos reservados ©</Typography>
    	</React.Fragment>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  	createStyles({
    	footer: {
      		position:'fixed',
      		bottom:0,
      		right:'33vw',
      		left:0,
      		textAlign:'center',
      		color:'#c4c4c4'
    	}
  	})
)
export default App;

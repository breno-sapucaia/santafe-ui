import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import React from 'react'
import Form from './form'

interface RegisterProps {}

function Register({}: RegisterProps) {
  const classes = useStyles()

  return (
    <Grid className={classes.register} container>
      <Grid item xs={12}>
        <Typography variant='h5'>Cadastro</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='subtitle1'>
          Efetue seu cadastro abaixo usando seu email e senha:
        </Typography>
      </Grid>
      <Form />
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      paddingTop: 58,
      paddingBottom: 58,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: 288,
      overflow: 'hidden',
      [theme.breakpoints.up('sm')]: {
        maxWidth: 520,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '100vw',
        margin: 'initial',
        justifyContent: 'space-between',
        paddingLeft: 'initial',
        paddingRight: 'initial',
      },
      [theme.breakpoints.up('xl')]: {
        justifyContent: 'center',
      },
    },
    register: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'center',
      [theme.breakpoints.up('lg')]: {
        width: 380,
        margin: '0 auto',
      },
    },
  })
)

export default Register

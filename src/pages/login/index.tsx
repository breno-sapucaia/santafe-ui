import { Grid, Theme, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'
import FormLogin from './formLogin'
interface LoginProps {}

function Login({}: LoginProps) {
  const classes = useStyles()

  return (
    <Grid container className={classes.login}>
      <Grid item xs={12}>
        <Typography variant='h5' className={classes.title}>
          Bem Vindo
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.subtitle} variant='subtitle1'>
          Entre no sistema inserindo suas credências abaixo:
        </Typography>
      </Grid>
      <FormLogin />
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subtitle: {
      fontSize: 18,
      fontWeight: 'lighter',
      lineHeight: 1.5,
      marginBottom: theme.spacing(1),
    },
    title: {
      marginTop: theme.spacing(1),
    },
    login: {
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

export default Login

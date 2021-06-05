import {
  Button,
  createStyles,
  Grid,
  LinearProgress,
  Link,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import * as yup from 'yup'
import FacebookIcon from '../../assets/icons/facebook-icon.svg'
import GoogleIcon from '../../assets/icons/google-plus-icon.svg'
import api from '../../config/api'
import { ActionsJWT, useJwt } from '../../config/contexts/jwt-context'

interface FormLoginProps {}
const validationSchema = yup.object({
  email: yup
    .string()
    .email('Insira um E-mail válido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve conter no mínimo 8 caractéres')
    .required('Senha é obrigatória'),
})

function FormLogin({}: FormLoginProps) {
  const classes = useStyles()
  const [globalState, setGlobalState] = useJwt()
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setLoading(true)
      api
        .post('/auth/login', values)
        .then((result) => {
          if (result.status === 200) {
            setGlobalState({ type: ActionsJWT.SET, jwt: result.data.token })
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    },
  })

  return (
    <Grid item className={classes.root}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        {loading ? <LinearProgress color='primary' /> : <></>}
        <TextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          autoComplete='username'
          variant='outlined'
          color='secondary'
          className={classes.input}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id='password'
          name='password'
          label='Password'
          type='password'
          variant='outlined'
          color='secondary'
          autoComplete='current-password'
          className={classes.input}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Typography className={classes.forgotLink}>
          <Link
            component={NavLink}
            to='/recuperar'
            style={{ cursor: 'pointer' }}
          >
            {' '}
            Esqueceu a senha?
          </Link>
        </Typography>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          className={classes.submitBtn}
        >
          Entrar
        </Button>
        <Typography className={classes.divider} component='div'>
          <span>ou</span>
        </Typography>
        <Grid container justify={'space-between'}>
          <Grid item className={classes.paddingRight} xs={6}>
            <Button
              variant='contained'
              fullWidth
              className={classes.googleButton}
              color='primary'
            >
              <img
                alt='Google Icon'
                className={classes.icon}
                src={GoogleIcon}
              />{' '}
              Google
            </Button>
          </Grid>
          <Grid className={classes.paddingLeft} item xs={6}>
            <Button
              variant='contained'
              fullWidth
              className={classes.facebookButton}
              color='primary'
            >
              <img
                alt='FacebookIcon'
                className={classes.icon}
                src={FacebookIcon}
              />{' '}
              Facebook
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    input: {
      marginBottom: theme.spacing(2),
    },
    forgotLink: {
      textAlign: 'right',
    },
    submitBtn: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    divider: {
      display: 'flex',
      textAlign: 'center',
      '&>span': {
        marginBottom: 3.5,
        color: '#aaa',
      },
      '&::after': {
        content: '""',
        alignSelf: 'center',
        flexGrow: 1,
        backgroundColor: '#ccc',
        height: 1,
        marginBottom: 3,
        marginLeft: theme.spacing(2),
      },
      '&::before': {
        content: '""',
        alignSelf: 'center',
        flexGrow: 1,
        backgroundColor: '#ccc',
        height: 1,
        marginRight: theme.spacing(2),
        marginBottom: 3,
      },
    },
    icon: {
      color: '#fff',
      marginRight: theme.spacing(1.5),
    },
    paddingLeft: {
      paddingLeft: theme.spacing(1),
    },
    paddingRight: {
      paddingRight: theme.spacing(1),
    },
    facebookButton: {
      background: '#1479BD',
    },
    googleButton: {
      background: '#DD4B38',
    },
  })
)
export default FormLogin

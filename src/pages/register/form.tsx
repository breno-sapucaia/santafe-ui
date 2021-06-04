import {
  Button,
  createStyles,
  Grid,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import FacebookIcon from '../../assets/icons/facebook-icon.svg'
import GoogleIcon from '../../assets/icons/google-plus-icon.svg'

interface RegisterProps {}
const validationSchema = yup.object({
  email: yup
    .string()
    .email('insira um E-mail válido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve conter no mínimo 8 caractéres')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .min(8, 'A senha deve conter no mínimo 8 caractéres')
    .test('match', 'as senhas não batem', function (confirmPassword) {
      return confirmPassword === this.parent.password
    }),
})

function Form({}: RegisterProps) {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Grid item className={classes.root}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
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
          label='Senha'
          autoComplete='new-password'
          type='password'
          variant='outlined'
          color='secondary'
          className={classes.input}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          id='confirmPassword'
          name='confirmPassword'
          label='Confirmar Senha'
          autoComplete='new-password'
          type='password'
          variant='outlined'
          color='secondary'
          className={classes.input}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          className={classes.submitBtn}
        >
          Cadastrar
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
    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      width: 412,
      height: 315,
      backgroundColor: '#fafafa',
      transform: 'translate(-50%, -50%)',
    },
    containerModal: {},
  })
)
export default Form

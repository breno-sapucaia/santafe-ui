import {
  Button,
  createStyles,
  Grid,
  LinearProgress,
  Snackbar,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { makeStyles } from '@material-ui/styles'
import { useFormik } from 'formik'
import { SyntheticEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import FacebookIcon from '../../assets/icons/facebook-icon.svg'
import GoogleIcon from '../../assets/icons/google-plus-icon.svg'
import api from '../../config/api'

interface UserData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword?: string
}

const validationSchema = yup.object({
  firstName: yup.string().required('O Primeiro nome é obrigatório'),
  lastName: yup.string().required('O Sobrenome é obrigatório'),
  email: yup
    .string()
    .email('insira um E-mail válido')
    .required('E-mail é obrigatório'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'A senha deve conter 8 caracteres sendo 1 maiúsculo, 1 numérico e 1 caractere especial'
    ),
  confirmPassword: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'A senha deve conter 8 caracteres sendo 1 maiúsculo, 1 numérico e 1 caractere especial'
    )
    .test('match', 'as senhas não batem', function (confirmPassword) {
      return confirmPassword === this.parent.password
    }),
})

function Form() {
  const classes = useStyles()
  const { push } = useHistory()

  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const onSubmit = (values: UserData) => {
    setIsLoading(true)
    delete values.confirmPassword
    api
      .post('/auth/register', values)
      .then((result) => {
        if (result.status === 200) {
          setOpen(true)
          setTimeout(() => {
            push('/entrar')
          }, 3000)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit,
  })

  return (
    <Grid item className={classes.root}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        {isLoading ? <LinearProgress color='primary' /> : <></>}
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} variant='filled' severity='success'>
            This is a success message!
          </Alert>
        </Snackbar>
        <TextField
          fullWidth
          id='firstName'
          name='firstName'
          label='Primeiro nome'
          autoComplete='firstName'
          variant='outlined'
          color='secondary'
          className={classes.input}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          fullWidth
          id='lastName'
          name='lastName'
          label='Sobrenome'
          autoComplete='lastName'
          variant='outlined'
          color='secondary'
          className={classes.input}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
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

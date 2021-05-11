import { Button, createStyles, Grid, IconButton, InputAdornment, LinearProgress, makeStyles, Slide, Snackbar, TextField, Theme, Typography } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Alert, Color } from '@material-ui/lab';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import api from '../../config/api';
interface Props {
    token: string
}

const validationSchema = yup.object({
    email: yup.string().email("Insira um E-mail válido").required("E-mail é obrigatório"),
    password: yup.string().required('Senha é obrigatória').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "A senha deve conter 8 caracteres sendo 1 maiúsculo, 1 numérico e 1 caractere especial"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais.')
})

function ResetPasswordWithToken(props: Props) {
    const { token } = props
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    const [severity, setSeverity] = useState<Color | undefined>(undefined);
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') return
        setIsOpen(false);
    };

    useEffect(() => {
        if (severity === "success") {
            let i = 1
            setInterval(() => {
                if (i === 6) {
                    history.push('/entrar')
                }
                i++
            }, 1000)
        }

    }, [severity])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: (values) => {
            setIsLoading(true)
            let payload = { ...values, token }

            api.put('/auth/reset-password-with-token', { ...payload })
                .then(response => {
                    if (response.status === 200) {
                        setSeverity("success")
                        setMessage(response.data.message)
                        setIsOpen(true)
                    }
                })
                .catch(error => {
                    if (error.response) {
                        const { response } = error

                        if (response.status === 400) {
                            setSeverity("error")
                            setMessage("Token de verificação de senha inválido.")
                            setIsOpen(true)
                        }

                        if (response.status === 404) {
                            setSeverity("error")
                            setMessage("Usuário não encontrado")
                            setIsOpen(true)
                        }

                    }
                }).finally(() => {
                    setIsLoading(false)
                })
        }
    });
    return (

        <Grid className={classes.register} container>
            <Grid
                item
                xs={12}
            >
                <Typography variant="h5">
                    Recuperar Senha
                    </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">
                    Efetue seu cadastro abaixo usando seu email e senha:
                </Typography>
            </Grid>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                {isLoading ? <LinearProgress color="primary" /> : <></>}
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    autoComplete="username"
                    variant="outlined"
                    color="secondary"
                    className={classes.input}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}

                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Senha"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    color="secondary"
                    autoComplete="current-password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>),
                    }}
                    className={classes.input}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}

                />
                <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirmar Senha"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    color="secondary"
                    autoComplete="current-password"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleShowPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>),
                    }}
                    className={classes.input}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}

                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isLoading}
                >
                    Redefinir
                </Button>
            </form>
            <Snackbar
                open={isOpen}
                onClose={handleClose}
                TransitionComponent={(props) => <Slide {...props} direction="up" />}
                autoHideDuration={5000}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert elevation={6} variant="filled" onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </Grid>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    register: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        [theme.breakpoints.up('lg')]: {
            width: 380,
            margin: '0 auto'
        }
    },
    form: {
        width: '100%',
    },
    input: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2)
    },

}))

export default ResetPasswordWithToken

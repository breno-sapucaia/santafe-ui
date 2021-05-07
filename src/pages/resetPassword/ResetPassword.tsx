import { Button, createStyles, Grid, LinearProgress, makeStyles, Slide, Snackbar, TextField, Theme, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
interface Props { }

const validationSchema = yup.object({
    email: yup.string().email("Insira um E-mail válido").required("E-mail é obrigatório")
})



function ResetPassword(props: Props) {
    const classes = useStyles()
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') return
        setIsOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema,
        onSubmit: (values) => {
            setIsLoading(true)
            // console.log(values)
            // api.post('/auth/reset-password', values).then((response) => {
            //     if (response.status === 200) {
            //         setMessage(response.data.message)
            //         setIsOpen(true);
            //     }
            // }).catch((err) => {
            //     console.log(err)
            // }).finally(() => {
            // })
            setTimeout(() => {
                setIsLoading(false)
                setIsOpen(true)
            }, 3000)
            setMessage('mock message arigatoooo')


        }
    });
    return (

        <Grid className={classes.register} container>
            <Grid
                item
                xs={12}

            >
                <Typography variant="h5">
                    Redefinir Senha
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="subtitle1">
                    Digite seu email a baixo que enviaremos um email para você
                    </Typography>
            </Grid>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                {isLoading ? <LinearProgress color="primary" /> : <></>}
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="email"
                    autoComplete="username"
                    variant="outlined"
                    color="secondary"
                    className={classes.input}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    enviar
                </Button>
            </form>
            <Snackbar
                open={isOpen}
                onClose={handleClose}
                TransitionComponent={(props) => <Slide {...props} direction="up" />}
                autoHideDuration={5000}
            >
                <Alert elevation={6} variant="filled" onClose={handleClose} severity="success">
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

export default ResetPassword

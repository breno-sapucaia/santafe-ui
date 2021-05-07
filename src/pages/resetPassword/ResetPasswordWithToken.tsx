import { Button, createStyles, Grid, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

interface Props {
    token: string
}

const validationSchema = yup.object({
    email: yup.string().email("Insira um E-mail válido").required("E-mail é obrigatório")
})

function ResetPasswordWithToken(props: Props) {
    // const { token } = props
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
                    label="Password"
                    type="password"
                    variant="outlined"
                    color="secondary"
                    autoComplete="current-password"
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
                    label="confirmPassword"
                    type="confirmPassword"
                    variant="outlined"
                    color="secondary"
                    autoComplete="current-password"
                    className={classes.input}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Redefinir
                </Button>
            </form>
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

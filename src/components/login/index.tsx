import { Grid, Theme, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'
import Form from './form'
interface Props { }

function Login(props: Props) {
    const classes = useStyles()

    return (

        <Grid
            container
            direction="column"
            alignItems="center"
            xs={12}>

            <Grid item className={classes.container} xs={12}>
                <Typography variant="h5" className={classes.title}>Bem Vindo</Typography>
                <Typography className={classes.subtitle} variant="subtitle1">Entre no sistema inserindo suas credências abaixo:</Typography>
            </Grid>
            <Form />
        </Grid>

    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(5)
        },
        subtitle: {
            fontSize: 18,
            fontWeight: 'lighter',
            lineHeight: 1.5,
            marginBottom: theme.spacing(1)
        },
        title: {
            marginTop: theme.spacing(1)
        }
    })
);

export default Login

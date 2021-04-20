import { Container, Grid, Theme, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import React from 'react'
import Form from './form'
interface Props { }

function Login(props: Props) {
    const classes = useStyles()


    return (

        <Container
            component="div"
            className={classes.container}
        >
            <Grid container className={classes.login}>
                <Grid item xs={12}>
                    <Typography variant="h5" className={classes.title}>Bem Vindo</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.subtitle} variant="subtitle1">Entre no sistema inserindo suas credências abaixo:</Typography>
                </Grid>
                <Form />
            </Grid>

        </Container>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        subtitle: {
            fontSize: 18,
            fontWeight: 'lighter',
            lineHeight: 1.5,
            marginBottom: theme.spacing(1)
        },
        title: {
            marginTop: theme.spacing(1)
        },
        login: {
            display: 'flex',
            flexDirection: 'column',
            [theme.breakpoints.up('lg')]: {
                width: 380,
                margin: '0 auto'
            },
            [theme.breakpoints.up('xl')]: {
                position: 'relative',
                margin: 'initial',
                marginRight: '300px'

                // justifyContent:'space-around',
            },
        },
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
                justifyContent: 'center'
            },

        }
    })
);

export default Login

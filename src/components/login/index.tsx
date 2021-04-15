import { Theme, Typography } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'
import React, { Fragment } from 'react'

interface Props { }

function Login(props: Props) {
    const classes = useStyles()

    return (
        <Fragment>
            <Typography variant="h5">
                Bem Vindo
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
                Entre no sistema inserindo suas credências abaixo:
            </Typography>
        </Fragment>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        subtitle: {
            fontSize: 18,
            fontWeight: 'lighter',
            lineHeight: 1.5
        }
    })
);

export default Login

import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'

interface Props { }

function Register(props: Props) {
    const classes = useStyles()

    return (
        <Container className={classes.container} maxWidth={'lg'} >

            <Typography variant="h5">
                Cadastro
            </Typography>

        </Container>
    )
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {

    }
}))

export default Register

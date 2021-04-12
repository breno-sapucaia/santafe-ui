
import { Grid } from '@material-ui/core'
import React from 'react'
import { StyledAppBar, StyledToolbar } from './styled'
interface Props { }



function Header(props: Props) {
    const { } = props

    return (
        <StyledAppBar >
            <StyledToolbar  variant="dense">
                <Grid container xs={12} >
                   


                </Grid>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Header

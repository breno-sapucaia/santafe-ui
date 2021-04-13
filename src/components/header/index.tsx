import React from 'react'

import LogoImg from '../../assets/logo.png'
import { Grid } from '@material-ui/core'
import { Logo, StyledAppBar, StyledToolbar } from './styled'
interface Props { }



function Header(props: Props) {
    const { } = props

    return (
        <StyledAppBar >
            <StyledToolbar  variant="dense">
                <Grid container xs={12} >
                    <Logo src={LogoImg} ></Logo>


                </Grid>
            </StyledToolbar>
        </StyledAppBar>
    )
}

export default Header

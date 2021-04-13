import { AppBar, Toolbar }  from '@material-ui/core'
import styled  from 'styled-components'
const StyledAppBar = styled(AppBar)`
    box-shadow:none;
`
const StyledToolbar = styled(Toolbar)`
    background-color:#fafafa;
`
const VerticalDivider = styled.div`
    width:1px;
    height:100px;
    margin-left:24px;
    margin-right:24px;
    background-color: linear-gradient(#fff, #000,#fff);
`
const Logo = styled.img`

`
export { StyledAppBar, StyledToolbar, VerticalDivider, Logo  }
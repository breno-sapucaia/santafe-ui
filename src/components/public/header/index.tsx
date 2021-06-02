import { AppBar, Button, makeStyles, Theme, Toolbar } from '@material-ui/core';
import createStyles from '@material-ui/core/styles/createStyles';
import clsx from 'clsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoImg from '../../assets/logo.png';

interface HeaderProps {

}

function Header(props: HeaderProps) {
    const classes = useStyles();
    const [toggle, setToggle] = useState<boolean>(false)
    const handleClickEntrar = () => {
        setToggle(false)
    }
    const handleClickCadastrar = () => {
        setToggle(true)
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar} variant="dense">
                <img alt="logo" className={classes.logo} src={LogoImg} />
                <div className={classes.verticalDivider} />
                <ul className={classes.menu}>
                    <li><Button component={NavLink} to="/entrar" onClick={handleClickEntrar}>ENTRAR</Button></li>
                    <li><Button component={NavLink} to="/cadastrar" onClick={handleClickCadastrar}>CADASTRAR</Button></li>
                    <span className={clsx(classes.border, toggle && classes.borderSlide)} />
                </ul>
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: "#fafafa",
            justifyContent: "start",
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            color: '#000'
        },
        verticalDivider: {
            position: 'relative',
            minWidth: 1,
            minHeight: 30,
            marginLeft: 24,
            marginRight: 24,
            background: 'linear-gradient(#fff,#000,#fff)',
        },
        toolbar: {
            backgroundColor: '#fafafa',
        },
        appBar: {
            boxShadow: 'none',
        },
        logo: {
            width: 63
        },
        menu: {
            position: 'relative',
            display: 'flex',
            padding: 0,
            color: '#000',
            width: 250,
            listStyle: 'none',
            '& > li': {
                display: 'flex',
                width: '100%',
                textAlign: 'center',
                alignItems: 'center',
                '& > a': {
                    width: '100%',
                    textAlign: 'center',
                    borderRadius: 'initial'
                }
            }
        },
        border: {
            position: 'absolute',
            width: 'calc(100% / 2)',
            bottom: 0,
            height: 2,
            background: 'linear-gradient(#fff,#000,#fff)',
            transition: '0.3s ease-in-out'
        },
        borderSlide: {
            transform: 'translateX(100%)',

        }
    })
})

export default Header

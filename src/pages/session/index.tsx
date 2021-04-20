
import { createStyles, makeStyles, Theme, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react'
import Header, { TabPanel } from '../../components/header';
import Login from '../../components/login';
import Register from '../../components/register';
import BgSession from '../../assets/bg-session.png'

interface SessionPageProps { }

function SessionPage(props: SessionPageProps) {
    const [value, setValue] = React.useState(0);
    const classes = useStyles()
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
    return (
        <>
            <Header value={value} setValue={setValue} />
            <TabPanel value={value} index={0}>
                <Login />
                {isDesktop && <img alt="prédios" className={classes.img} src={BgSession}></img>}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Register />
                {isDesktop && <img alt="prédios" className={classes.img} src={BgSession}></img>}
            </TabPanel>
        </>
    )
}
const useStyles = makeStyles((theme: Theme) => createStyles({
    img: {
        position: 'relative',
        maxWidth: '50vw',
        height: '100vh',
        top: 0,
        transition: '0.5s',
        zIndex: theme.zIndex.appBar + 1
    }
}))
export default SessionPage

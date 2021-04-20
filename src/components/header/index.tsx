import React, {  FunctionComponent } from 'react'

import LogoImg from '../../assets/logo.png'
import { AppBar, makeStyles, Tab, Tabs, Theme, Toolbar } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles';

interface TabPanelProps {
    index: any;
    value: any;
}

export const TabPanel: FunctionComponent<TabPanelProps> = (props) => {
    const classes = useStyles()
    return (
        <div
            role="tabpanel"
            hidden={props.value !== props.index}
            id={`simple-tabpanel-${props.index}`}
            aria-labelledby={`simple-tab-${props.index}`}
            className={classes.root}
        >
            {props.value === props.index && (
                props.children !== undefined && props.children
            )}
        </div>
    );
}
function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



interface MenuTabsProps {
    setValue: React.Dispatch<React.SetStateAction<number>>,
    value: number
}
function MenuTabs(props: MenuTabsProps) {
    const { setValue, value } = props
    const classes = useStyles();


    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { background: 'linear-gradient(#fafafa,#000,#fafafa)' } }}>
                <Tab label="Entrar" {...a11yProps(0)} />
                <Tab label="Cadastrar" {...a11yProps(1)} />
            </Tabs>
        </div>
    );
}
interface HeaderProps extends MenuTabsProps {

}

function Header(props: HeaderProps) {
    const { value, setValue } = props
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}variant="dense">
                <img alt="logo"className={classes.logo} src={LogoImg} />
                <div className={classes.verticalDivider} />
                <MenuTabs setValue={setValue} value={value} />
            </Toolbar>
        </AppBar>
    )
}

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: "#fafafa",
            justifyContent:"start",
            alignItems:'center',
            display:'flex',
            flexDirection: 'row',
            overflow:'hidden',
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
            backgroundColor:'#fafafa',
        },
        appBar: {
            boxShadow:'none',
        },
        logo: {
            width: 63
        }
    })
})

export default Header

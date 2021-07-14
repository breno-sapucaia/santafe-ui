import { Container, createStyles, makeStyles, Theme } from '@material-ui/core'
import { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Bg from '../assets/bg-session.png'
import Header from '../components/public/header'
import { useJwt } from '../config/contexts/jwt-context'
import PrivateApp from './app'
import Login from './login'
import Register from './register'
import ResetPassword from './resetPassword'

interface Props {}

export function Pages({}: Props) {
  useEffect(() => {
    document.title = 'Santafe'
  }, [])
  const [globalState] = useJwt()
  const classes = useStyles()

  if (globalState.isAuth) return <PrivateApp />

  return (
    <>
      <Header />
      <main className={classes.main}>
        <Container className={classes.container} maxWidth={'lg'}>
          <Switch>
            <Route path='/entrar' component={Login} />
            <Route path='/cadastrar' component={Register} />
            <Route path='/recuperar' component={ResetPassword} />
            <Redirect from='*' to='/entrar' />
          </Switch>
        </Container>
        <img className={classes.img} src={Bg} alt='backgroundImage' />
      </main>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      maxHeight: '100vh',
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
        justifyContent: 'center',
      },
    },
    img: {
      position: 'relative',
      maxWidth: '50vw',
      height: '100vh',
      top: 0,
      transition: '0.5s',
      zIndex: theme.zIndex.appBar + 1,
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  })
)

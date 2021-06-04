import { Redirect, Route, Switch } from 'react-router-dom'
import { DrawerHeader } from '../../components/private/DrawerHeader'
import { Dashboard } from './dashboard'

interface PrivateAppProps {}

function PrivateApp({}: PrivateAppProps) {
  return (
    <div>
      <DrawerHeader />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/relatorio' render={() => <div>relatorio</div>} />
        <Route path='/cadastros' render={() => <div>cadastros</div>} />
        <Redirect from='*' to='/dashboard' />
      </Switch>
    </div>
  )
}

export default PrivateApp

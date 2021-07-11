import { Redirect, Route, Switch } from 'react-router-dom'
import { DrawerHeader } from '../../components/private/DrawerHeader'
import { Dashboard } from './dashboard'
import { ManageUsers } from './manage-users'

function PrivateApp() {
  return (
    <div>
      <DrawerHeader />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/relatorio' render={() => <div>relatorio</div>} />
        <Route path='/cadastros' component={ManageUsers} />
        <Redirect from='*' to='/dashboard' />
      </Switch>
    </div>
  )
}

export default PrivateApp

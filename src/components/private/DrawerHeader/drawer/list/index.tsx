import {
  createStyles,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core'
import { Dashboard, Description } from '@material-ui/icons'
import clsx from 'clsx'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useJWT } from '../../../../../hooks/useJWT'

interface ListProps {
  pathname: string
}

function NavigationList({ pathname }: ListProps) {
  const { removeToken, atobJSON } = useJWT()
  const { role } = atobJSON()
  const isUserAdmin = role === 'Admin'
  const classes = useStyles()
  return (
    <List>
      <ListItem
        button
        component={Link}
        to='/dashboard'
        className={clsx([pathname === '/dashboard' && classes.isActive])}
      >
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItem>
      {/* <ListItem
        button
        component={Link}
        to='/relatorio'
        className={clsx([pathname === '/relatorio' && classes.isActive])}
      >
        <ListItemIcon>
          <Description />
        </ListItemIcon>
        <ListItemText primary='Relatórios' />
      </ListItem> */}
      {isUserAdmin && (
        <ListItem
          button
          component={Link}
          to='/cadastros'
          className={clsx([pathname === '/cadastros' && classes.isActive])}
        >
          <ListItemIcon>
            <Icon>manage_accounts</Icon>
          </ListItemIcon>
          <ListItemText primary='Gerenciar Cadastros' />
        </ListItem>
      )}
      <ListItem button onClick={removeToken}>
        <ListItemIcon>
          <Icon>logout</Icon>
        </ListItemIcon>
        <ListItemText primary='Sair' />
      </ListItem>
    </List>
  )
}
const useStyles = makeStyles(() =>
  createStyles({
    isActive: {
      backgroundColor: '#6200ee14',
      color: '#6200EE',
      '&>div.MuiListItemIcon-root > svg': { fill: '#6200EE' },
    },
  })
)

export const MemoizedNavigationList = memo(NavigationList)

import { Drawer as NavigationDrawer } from '@material-ui/core/'
import { MemoizedNavigationList as List } from './list'
import { MemoizedUser as User } from './user'

export interface DrawerProps {
  open: boolean
  handleClose: (event: React.KeyboardEvent | React.MouseEvent) => void
  pathname?: string
}

export function Drawer({
  open,
  handleClose,
  pathname = '/dashboard',
}: DrawerProps) {
  return (
    <NavigationDrawer anchor='left' open={open} onClose={handleClose}>
      <User />
      <List pathname={pathname} isUserAdmin={true} />
    </NavigationDrawer>
  )
}

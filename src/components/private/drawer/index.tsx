import { Drawer as NavigationDrawer } from '@material-ui/core/'
import { MemoizedNavigationList as List } from './list'
import { MemoizedUser as User } from './user'

export interface DrawerProps {
    open: boolean,
    handleClose: () => void;
}

export function Drawer({
    open,
    handleClose
}: DrawerProps) {



    return (
        <NavigationDrawer 
            anchor="left"
            open={open}
            onClose={handleClose}
        >
            <User/>
            <List/>
        </NavigationDrawer>
    )
}
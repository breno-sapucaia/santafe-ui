import { useState } from 'react'
import { useLocation } from 'react-router'
import { Drawer } from './drawer'
import { Header } from './header'

export function DrawerHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const handleClose = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setOpen(!open)
  }
  return (
    <>
      <Header title='Dashboard' handleCloseDrawer={handleClose} />
      <Drawer pathname={pathname} open={open} handleClose={handleClose} />
    </>
  )
}

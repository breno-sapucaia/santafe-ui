import { Button } from '@material-ui/core'
import { default as MaterialDrawer } from '@material-ui/core/Drawer'
import { Fragment, useState } from 'react'
import { Input } from '../Input'

export const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [fromDate, setFromDate] = useState('')
  const [untilDate, setToDate] = useState('')

  const handleToggle = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpen(!isOpen)
  }

  return (
    <>
      <Fragment>
        <Button onClick={handleToggle}>Open Drawer</Button>
        <MaterialDrawer anchor='right' open={isOpen} onClose={handleToggle}>
          <Input
            legendText='teste'
            inputValue={fromDate}
            setInputValue={setFromDate}
          ></Input>
        </MaterialDrawer>
      </Fragment>
    </>
  )
}

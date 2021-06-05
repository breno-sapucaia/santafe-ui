import { Meta, Story } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import {
  Drawer,
  DrawerProps,
} from '../../components/private/DrawerHeader/drawer'

export default {
  title: 'Components/Drawer',
  component: Drawer,
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
} as Meta

const Template: Story<DrawerProps> = (args) => <Drawer {...args} />

export const Index = Template.bind({})

Index.args = {
  handleClose: () => {
    return
  },
  open: true,
}

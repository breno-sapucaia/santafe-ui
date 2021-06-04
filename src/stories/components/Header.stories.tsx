import { Meta, Story } from '@storybook/react'
import React from 'react'
import {
  Header,
  HeaderProps,
} from '../../components/private/DrawerHeader/header'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const PublicHeader = Template.bind({})

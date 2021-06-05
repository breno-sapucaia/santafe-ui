import { Meta, Story } from '@storybook/react'
import React from 'react'
import {
  Standards,
  StandardsProps,
} from '../../components/private/Charts/Standards'

export default {
  title: 'Components/Charts/Standards',
  component: Standards,
} as Meta

const Template: Story<StandardsProps> = (args) => <Standards {...args} />

export const StandardsComponent = Template.bind({})

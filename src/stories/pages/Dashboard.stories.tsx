import { Meta, Story } from '@storybook/react'
import { Dashboard } from '../../pages/app/dashboard'
export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
} as Meta

const Template: Story = (args) => <Dashboard {...args} />

export const Default = Template.bind({})
Default.args = {}

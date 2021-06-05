import { Meta, Story } from '@storybook/react'
import { Dashboard, DashboardProps } from '../../pages/app/dashboard'
export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
} as Meta

const Template: Story<DashboardProps> = (args) => <Dashboard {...args} />

export const Default = Template.bind({})
Default.args = {}

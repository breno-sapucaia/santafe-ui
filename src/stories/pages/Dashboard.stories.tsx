import { ThemeProvider } from '@material-ui/styles';
import { Meta, Story } from '@storybook/react';
import { Dashboard, DashboardProps } from '../../pages/private/app/dashboard';
import theme from '../../utils/theme';

export default  { 
    title: "Pages/Dashboard",
    component: Dashboard,
    decorators: [ (Story) => <ThemeProvider theme={theme}><Story/></ThemeProvider>] 
} as Meta

const Template: Story<DashboardProps> = (args) => <Dashboard {...args}/>

export const Index = Template.bind({})
Index.args = {}
import { Meta, Story } from '@storybook/react'

import { Chart, ChartProps } from '../../components/private/Chart'

export default {
  title: 'Components/Charts',
  component: Chart,
} as Meta

const Template: Story<ChartProps> = (props) => <Chart {...props} />

export const ChartTemplate = Template.bind({})
ChartTemplate.args = {
  chartType: 'Bar',
}

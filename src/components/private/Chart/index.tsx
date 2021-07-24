/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircularProgress, Icon } from '@material-ui/core'
import { default as GoogleChart } from 'react-google-charts'
import { ReactGoogleChartProps } from 'react-google-charts/dist/types'
import { Container, Header } from './styles'

export interface ChartProps extends ReactGoogleChartProps {
  title: string
}

export const Chart = ({ title, ...rest }: ChartProps) => {
  return (
    <Container>
      <Header>
        <h2>{title}</h2>
        <Icon>filter_alt</Icon>
      </Header>
      <GoogleChart
        width='100%'
        loader={<CircularProgress />}
        {...rest}
        legendToggle
      />
    </Container>
  )
}

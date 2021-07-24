import { Container, createStyles, makeStyles, Theme } from '@material-ui/core'
import { Chart } from '../../../components/private/Chart'
import { Drawer } from '../../../components/private/Drawer'
import { ChartsContainer } from './styles'

export function Dashboard() {
  const classes = useStyles()
  return (
    <Container maxWidth='lg' className={classes.container}>
      <ChartsContainer>
        <Chart
          title='Quantidade de Não Conformidade'
          chartType='LineChart'
          data={[
            ['x', 'y'],
            [0, 0],
            [1, 10],
            [2, 23],
            [3, 17],
            [4, 18],
            [5, 9],
            [6, 11],
            [7, 27],
            [8, 33],
            [9, 40],
            [10, 32],
            [11, 35],
          ]}
          options={{
            hAxis: {
              title: 'Time',
            },
            vAxis: {
              title: 'Popularity',
            },
          }}
        />
        <Chart
          title='Normas'
          chartType='Bar'
          data={[
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350],
          ]}
        />
        <Chart
          title='Gravidade'
          chartType='Bar'
          data={[
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350],
          ]}
        />
        <Chart
          title='Não Conformidade'
          chartType='PieChart'
          data={[
            ['Task', 'Hours per Day'],
            ['Extintor', 11],
            ['Sinalização solo', 7],
            ['Luz de emergência', 2],
            ['Porta Corta Fogo', 2],
          ]}
          options={{
            is3D: true,
          }}
        />
        <Chart
          title='Conformidade'
          chartType='PieChart'
          data={[
            ['Task', 'Hours per Day'],
            ['Extintor', 11],
            ['Sinalização solo', 7],
            ['Luz de emergência', 2],
            ['Porta Corta Fogo', 2],
          ]}
          options={{
            is3D: true,
          }}
        />
      </ChartsContainer>
      <Drawer />
    </Container>
  )
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(2),
    },
  })
)

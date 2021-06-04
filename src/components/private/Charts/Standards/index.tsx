import {
  createStyles,
  Icon,
  makeStyles,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import Chart from 'react-google-charts'
export interface StandardsProps {}
export function Standards({}: StandardsProps) {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const legendPosition = isMobile
    ? {
        position: 'bottom',
        alignment: 'center',
      }
    : {
        position: 'right',
        alignment: 'center',
      }
  return (
    <Paper className={classes.paper}>
      <div className='header'>
        <Typography>Normas</Typography>
        <Icon>filter_alt</Icon>
      </div>
      <div className='chart'>
        <Chart
          chartType='Bar'
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            // ['2016', 660, 1120, 300],
            // ['2017', 1030, 540, 350],
          ]}
          legendToggle
          options={{
            legend: {
              position: 'bottom',
            },
            // Material design options
            // chart: {
            //   title: 'Company Performance',
            //   subtitle: 'Sales, Expenses, and Profit: 2014-2017',
            // },
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </Paper>
  )
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      minWidth: 300,
      maxWidth: 500,
      gap: theme.spacing(3),
      ['& > div.header']: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    },
  })
)

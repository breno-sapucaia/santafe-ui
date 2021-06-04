import { Container, createStyles, makeStyles, Theme } from '@material-ui/core'
import { Standards } from '../../../components/private/Charts/Standards'
export interface DashboardProps {}

export function Dashboard({}: DashboardProps): JSX.Element {
  const classes = useStyles()
  return (
    <Container maxWidth='lg' className={classes.container}>
      <Standards />
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

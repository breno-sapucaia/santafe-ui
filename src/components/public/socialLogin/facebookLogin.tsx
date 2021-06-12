import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'
import SocialLogin from 'react-social-login'
import FacebookIcon from '../../../assets/icons/facebook-icon.svg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SocialFacebookLogin(props: any) {
  const { triggerLogin } = props
  const classes = useStyles()
  return (
    <Button
      variant='contained'
      onClick={triggerLogin}
      fullWidth
      className={classes.facebookButton}
      color='primary'
    >
      <img alt='FacebookIcon' className={classes.icon} src={FacebookIcon} />{' '}
      Facebook
    </Button>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: '#fff',
      marginRight: theme.spacing(1.5),
    },
    facebookButton: {
      background: '#1479BD',
    },
  })
)

export default SocialLogin(SocialFacebookLogin)

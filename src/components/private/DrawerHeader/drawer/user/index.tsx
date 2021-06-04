import { makeStyles, Theme, Typography } from '@material-ui/core'
import { createStyles } from '@material-ui/styles'
import { memo } from 'react'
import AvatarImageMock from '../../../../../assets/avatar-male-mock.png'

export interface UserProps {
  avatar?: string
  name?: string
  isUserAdmin?: boolean
}

const User = ({
  avatar,
  name = 'Rogério Dantas',
  isUserAdmin = true,
}: UserProps) => {
  const classes = useStyles()
  const imageSource = avatar || AvatarImageMock

  return (
    <div className={classes.container}>
      <img src={imageSource} alt={name} />
      <Typography variant='h6' align='center'>
        {name}
        {isUserAdmin && (
          <span>
            <br /> (admin)
          </span>
        )}
      </Typography>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      height: '15rem',
      flexDirection: 'column',
      width: '280px',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
    },
  })
)

export const MemoizedUser = memo(User)

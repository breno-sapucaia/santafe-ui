import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop'
import React, {Dispatch, SetStateAction} from 'react'

interface Props {
    setOpen: Dispatch<SetStateAction<boolean>>,
    open: boolean

}



function Index(props: Props) {
    const {setOpen, open} = props
    const classes = useStyles()
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Backdrop  className={classes.backdrop} open={open} onClick={handleClick}>
            show backdrop
        </Backdrop>
    )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

export default Index

import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { ReactComponent as Logo } from '../../../assets/logo.svg';


export interface HeaderProps {
    title: string,
}

export function Header({title = "Dashboard"}: HeaderProps) {
    const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar color="primary">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Logo/>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}),
);

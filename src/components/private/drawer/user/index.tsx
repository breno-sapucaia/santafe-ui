import { makeStyles, Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import { memo } from "react";
import AvatarImageMock from "../../../../assets/avatar-male-mock.png";

export interface UserProps {
  avatar?: string;
  name?: string;
}

const User = ({ avatar, name = "User" }: UserProps) => {
  const classes = useStyles();
  const imageSource = avatar || AvatarImageMock;

  return (
    <div className={classes.container}>
      <img src={imageSource} alt={name} />
      <p>{name}</p>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      height: "15rem",
      flexDirection: "column",
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
    },
  })
);

export const MemoizedUser = memo(User);

import { List, ListItem, ListItemText } from "@material-ui/core";
import { memo } from 'react';
import { Link } from "react-router-dom";

interface ListProps {}

function NavigationList({}: ListProps) {
  return (
    <List>
      <Link to="/dashboard">
        <ListItem>
          <ListItemText></ListItemText>
        </ListItem>
      </Link>
    </List>
  );
}

export const MemoizedNavigationList = memo(NavigationList)


import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  makeStyles,
  Divider
} from "@material-ui/core";
import userImage from "assets/img/default-avatar.png";

import styles from "../style/style";

const useStyles = makeStyles(styles);

function RelatedQuestion() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Why do people explain a link between obesity and poverty by saying that fast?"
          className={classes.RelatedQuestionItems}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Why do people explain a link between obesity and poverty by saying that fast?"
          className={classes.RelatedQuestionItems}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Why do people explain a link between obesity and poverty by saying that fast?"
          className={classes.RelatedQuestionItems}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Why do people explain a link between obesity and poverty by saying that fast?"
          className={classes.RelatedQuestionItems}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Why do people explain a link between obesity and poverty by saying that fast?"
          className={classes.RelatedQuestionItems}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Why do people explain a link between obesity and poverty by saying that fast?"
          className={classes.RelatedQuestionItems}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Why do people explain a link between obesity and poverty by saying that fast?"
          className={classes.RelatedQuestionItems}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={userImage} />
        </ListItemAvatar>
        <ListItemText
          primary="Why do people explain a link between obesity and poverty by saying that fast?"
          className={classes.RelatedQuestionItems}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

export default RelatedQuestion;

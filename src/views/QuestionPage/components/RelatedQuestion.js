import React, { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
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
import history from "../../../history";
import styles from "../style/style";

const useStyles = makeStyles(styles);

function RelatedQuestion({ categoryId, questionId, store }) {
  const classes = useStyles();
  const [categoryData, setCategoryData] = useState({});
  const [categoriesData, setCategoriesData] = useState([]);
  const { fetchCategories, categories } = store.categoriesStore;

  useEffect(() => {
    async function getData() {
      await fetchCategories();
      setCategoriesData(categories);
    }
    getData();
    const category = categoriesData.filter(
      category => category.id === categoryId
    );
    setCategoryData(category[0]);
  }, [categoryId, categories, fetchCategories, categoriesData]);
  return (
    <List className={classes.root}>
      {categoryData &&
        categoryData.questions &&
        categoryData.questions
          .filter(question => question.id !== Number(questionId))
          .map(question => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      question.picture.length !== 0
                        ? `http://localhost:8000${question.picture}`
                        : userImage
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={question.title}
                  className={classes.RelatedQuestionItems}
                  onClick={() => history.push(`/question/${question.id}`)}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
    </List>
  );
}

export default inject("store")(observer(RelatedQuestion));

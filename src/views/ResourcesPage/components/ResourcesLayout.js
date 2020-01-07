import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Paper, makeStyles, Avatar } from "@material-ui/core";
import ResourceDialog from "shared/components/ResourceDialog/ResourceDialog";
import Resource from "./Resource";
import CategorySection from "./CategorySection/CategorySection";
import userImage from "assets/img/default-avatar.png";
import style from "../style/style";

const useStyle = makeStyles(style);

function ResourcesLayout({ categories, categoryId, store }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [categoryData, setCategoryDate] = useState({});
  const [resourcesData, setResourcesData] = useState([]);

  const { fetchCategory, category } = store.categoriesStore;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    async function getData(categoryId) {
      await fetchCategory(categoryId);
      await category.fetchResources(categoryId);
      await setCategoryDate(category);
      await setResourcesData(category.resources);
    }
    getData(categoryId);
  }, [categoryId, category, fetchCategory]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={8}>
        <Paper>
          <div className={classes.resourceForm} onClick={handleClickOpen}>
            <Avatar alt="Remy Sharp" src={userImage} />
            <div style={{ marginLeft: 20 }}>
              <div className={classes.resourceFormTitle}>
                Do you have a new resource?
              </div>
              <div className={classes.resourceFormSubTitle}>
                Add a resource now...
              </div>
            </div>
          </div>
          <ResourceDialog
            open={open}
            handleClose={handleClose}
            categories={categories}
            addResource={categoryData.addResource}
          />
        </Paper>
        <div className={classes.mainText}>TOP Resources</div>
        <div style={{ marginTop: 20 }}>
          {resourcesData.map(resource => (
            <Resource resource={resource} categories={categories} />
          ))}
        </div>
      </Grid>
      <Grid item xs={4}>
        <CategorySection categories={categories} categoryId={categoryId} />
      </Grid>
    </Grid>
  );
}

export default inject("store")(observer(ResourcesLayout));

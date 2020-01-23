import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Grid, Paper, makeStyles, Avatar } from "@material-ui/core";
import ResourceDialog from "shared/components/ResourceDialog/ResourceDialog";
import Resource from "shared/components/Resource/Resource";
import NoResources from "shared/components/EmptyContent/NoResources";
import Content from "shared/components/NotLoggedInContent/Content";
import CategorySection from "./CategorySection/CategorySection";
import userImage from "assets/img/default-avatar.png";
import style from "../style/style";

const useStyle = makeStyles(style);

function ResourcesLayout({ categories, categoryId, store, isLoggedIn }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [categoryData, setCategoryDate] = useState({});
  const [resourcesData, setResourcesData] = useState([]);
  const { myprofile } = store.userStore;
  const { fetchCategory, category } = store.categoriesStore;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    async function getData(categoryId) {
      await fetchCategory(categoryId);
      await category.fetchResources(categoryId);
      setCategoryDate(category);
      setResourcesData(category.resources);
    }
    getData(categoryId);
  }, [categoryId, category, fetchCategory, myprofile]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Image =
    myprofile.picture.length === 0
      ? userImage
      : `http://localhost:8000${myprofile.picture}`;
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={8}>
        <Paper>
          {isLoggedIn ? (
            <>
              <div className={classes.resourceForm} onClick={handleClickOpen}>
                <Avatar alt="Remy Sharp" src={Image} />
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
            </>
          ) : (
            <Content content="To add resources you need to login" />
          )}
        </Paper>
        <div className={classes.mainText}>TOP Resources</div>
        {resourcesData.length === 0 ? (
          <NoResources text="No Resources Here" />
        ) : (
          <div style={{ marginTop: 20 }}>
            {resourcesData.map(resource => (
              <Resource resource={resource} categories={categories} />
            ))}
          </div>
        )}
      </Grid>
      <Grid item xs={4}>
        <CategorySection categories={categories} categoryId={categoryId} />
      </Grid>
    </Grid>
  );
}

export default inject("store")(observer(ResourcesLayout));

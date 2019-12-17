import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import history from "../../../history";

function Categories(props) {
  useEffect(() => {
    const { fetchCategories } = props.store.categoriesStore;
    fetchCategories();
  });

  const { categories } = props.store.categoriesStore;

  return (
    <>
      <div className="ml-auto mr-auto text-center" style={{ paddingTop: 30 }}>
        <h2 className="title">Categories</h2>
        <div className="section section-examples" data-background-color="white">
          <Container className="text-center">
            <Row>
              {categories.map(category => (
                <div
                  className="col"
                  onClick={() =>
                    history.push({
                      pathname: `/category/${category.id}`,
                      image: require("assets/img/english2.png"),
                    })
                  }
                  key={category.id}
                >
                  <div style={{ display: "inline-grid" }}>
                    <img
                      alt="..."
                      className="img-raised"
                      src={require("assets/img/english2.png")}
                      style={{ width: 540, height: 304 }}
                    />
                    <Button
                      className="btn-round"
                      color="default"
                      outline
                      style={{
                        backgroundColor: "#2c2c2c",
                        marginTop: 30,
                        width: 200,
                        justifySelf: "center"
                      }}
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default inject("store")(observer(Categories));

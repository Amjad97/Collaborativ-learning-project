const appStyle = theme => ({
  navBarBackground: {
    backgroundColor: "#FFF",
    marginBottom: 0
  },
  navBarContainer: {
    display: "flex",
    position: "relative",
    flex: 1
  },
  navBarItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: "8%"
  },
  navBarHomeItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: "2%"
  },
  navBarHeaderItem: {
    display: "flex",
    alignItems: "center"
  },
  navBarText: {
    color: "#4174FF",
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 60,
    cursor: "pointer"
  },
  navBarInput: {
    position: "absolute !important",
    width: 400,
    left: "30%"
  },
  navBarButtons: {
    backgroundColor: "#4174FF",
    borderRadius: 5,
    marginLeft: 25,
    width: 100,
    textAlign: "center"
  },
  navBarItem: {
    color: "#555554",
    fontWeight: "500",
    marginLeft: 45,
    cursor: "pointer"
  },
  navBarItemSelected: {
    color: "#4174FF",
    fontWeight: "500",
    marginLeft: 45,
    cursor: "pointer"
  },
  navBarIcon: {
    color: "#4174FF",
    height: "40px !important"
  },
  categoriesList: {
    marginTop: 10
  },
  categoryText: {
    color: "#707070",
    marginLeft: 10,
    fontSize: 22
  },
  categoryItem: {
    padding: 10,
    cursor: "pointer",
    color: "#707070"
  }
});

export default appStyle;

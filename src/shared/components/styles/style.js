const appStyle = theme => ({
  navBarBackground: {
    backgroundColor: "#FFF",
    marginBottom: 0,
    padding: "0rem 1rem !important"
  },
  navBarContainer: {
    display: "flex",
    position: "relative",
    flex: 1,
    justifyContent: "space-between"
  },
  navBarItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1
  },
  navBarItems2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: "10%"
  },
  navBarHomeItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1
  },
  navBarHomeItems2: {
    paddingRight: 50
  },
  navBarHeaderItem: {
    display: "flex",
    alignItems: "center"
  },
  navBarText: {
    color: "#4174FF",
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 50,
    cursor: "pointer",
    alignSelf: "center"
  },
  navBarInput: {
    position: "absolute !important",
    width: 400,
    left: "30%",
    top: "10%"
  },
  navBarHomeInput: {
    position: "absolute !important",
    width: 400,
    left: "30%",
    top: "-3px"
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
    marginLeft: 25,
    cursor: "pointer"
  },
  navBarItemSelected: {
    color: "#4174FF",
    fontWeight: "500",
    marginLeft: 25,
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

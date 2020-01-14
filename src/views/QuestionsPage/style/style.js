const appStyle = () => ({
  container: {
    marginTop: 90,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 90,
    width: "auto",
  },
  mainText: {
    fontSize: 22,
    fontWeight: "normal",
    color: "#4174FF",
    marginTop: 10,
    marginLeft: 10
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
  },
  categoryItemSelected: {
    padding: 10,
    cursor: "pointer",
    color: "#4174FF"
  },
  questionForm: {
    padding: 20,
    cursor: "pointer",
    display: "inline-flex"
  },
  questionFormTitle: {
    color: "#4174FF",
    fontWeight: "bold",
    fontSize: 22
  },
  questionFormSubTitle: {
    color: "#707070",
    marginTop: 15
  },
  Footer: {
    width: "-webkit-fill-available",
    position: "absolute !important",
    bottom: "0 !important"
  }
});

export default appStyle;

const appStyle = theme => ({
  container: {
    marginTop: 90,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 90,
    width: "auto"
  },
  QuestionsResourcescontainer: {
    paddingTop: "2rem",
    display: "flex",
    justifyContent: "center"
  },
  userImage: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    border: "3px solid #227CBB"
  },
  profileForm: {
    padding: 20,
    cursor: "pointer",
    display: "inline-flex"
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4174FF",
    marginLeft: 10
  },
  userInformation: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#555554",
    marginLeft: 10
  },
  userDescription: {
    fontSize: 15,
    color: "#555554",
    marginLeft: 10,
    fontWeight: 300
  },
  credentials: {
    color: "#707070",
    marginLeft: 10,
    fontSize: 20
  },
  numQR: {
    display: "flex",
    marginLeft: 10,
    marginTop: "1rem"
  },
  leftMargin: {
    marginLeft: 10
  },
  item: {
    color: "#4174FF",
    fontSize: 24,
    cursor: "pointer"
  },
  itemSelected: {
    color: "#4174FF",
    fontSize: 24,
    fontWeight: "bold",
    cursor: "pointer"
  },
  divider: {
    color: "#4174FF",
    margin: "0 20px",
    fontSize: 24
  }
});

export default appStyle;

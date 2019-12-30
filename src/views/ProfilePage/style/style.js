const appStyle = theme => ({
  container: {
    marginTop: 90,
    marginLeft: 30,
    marginRight: 20,
    marginBottom: 90,
    width: "auto"
  },
  userImage: {
    width: theme.spacing(20),
    height: theme.spacing(20)
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
    fontWeight: 600
  },
  credentials: {
    color: "#707070",
    marginLeft: 10,
    fontSize: 20
  }
});

export default appStyle;

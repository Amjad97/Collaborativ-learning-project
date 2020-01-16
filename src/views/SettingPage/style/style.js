const appStyle = theme => ({
  Footer: {
    width: "-webkit-fill-available",
    position: "fixed !important",
    bottom: "0 !important"
  },
  CardForm: { marginTop: 30, display: "flex" },
  form: {
    flex: 1,
    marginLeft: 10
  },
  imageForm: {
    position: "relative",
    zIndex: 0,
    height: "fit-content"
  },
  userImage: {
    width: theme.spacing(20),
    height: theme.spacing(20)
  },
  uploadIcon: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  SettingCard: {
    height: "100vh",
    display: "flex",
    boxShadow: "0px 0px 3px grey",
    backgroundColor: "#F3F3F3"
  },
  SettingForm: {
    width: "50%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "10%",
    overflow: "auto"
  },
  CardContent: {
    width: "90%"
  },
  SettingText: {
    color: "#4174FF",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 20
  }
});

export default appStyle;

const appStyle = theme => ({
  LoginText: {
    color: "#4174FF",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20
  },
  LoginForm: {
    width: "45%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    overflow: "auto"
  },
  Footer: {
    width: "-webkit-fill-available",
    position: "fixed !important",
    bottom: "0 !important"
  },
  LoginCard: {
    height: "100vh",
    display: "flex"
  },
  CardContent: {
    width: "70%"
  },
  NewContent: {
    display: "inline-flex",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    flex: 1
  },
  newText: {
    color: "#4174FF",
    fontSize: 12,
    textAlign: "center",
    flex: 0.5
  },
  divider: {
    flex: 0.25
  },
  googleButton: {
    width: "-webkit-fill-available",
    height: 48,
    margin: "0px !important"
  }
});
export default appStyle;

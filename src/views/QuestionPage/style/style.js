const appStyle = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 80,
    marginLeft: 30,
    marginRight: 30
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  header: {
    fontWeight: 900,
    marginBottom: 10
  },
  description: {
    fontWeight: 500,
    marginTop: 20,
    color: "black"
  },
  answer: {
    fontWeight: 500,
    marginBottom: 5,
    color: "black"
  },
  answerForm: {
    marginTop: 30,
    display: "grid"
  },
  addAnswerBtn: {
    marginTop: 20,
    width: "fit-content"
  },
  category: {
    backgroundColor: "grey",
    padding: 10,
    width: "fit-content",
    margin: 5,
    borderRadius: 5,
    color: "white",
    fontSize: 10
  }
});
export default appStyle;

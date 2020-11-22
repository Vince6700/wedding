import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "1rem",
  },
  container: {
    marginTop: "5vh",
  },
});

const EnterYourMail = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      className={classes.container}
    >
      <Typography variant="h3" color="textPrimary">
        Entrez votre adresse email
      </Typography>
      <form>
        <Box display="flex" justifyContent="center" className={classes.root}>
          <TextField
            label="Email"
            variant="outlined"
            color="primary"
            className={classes.root}
          />
          <Button
            color="primary"
            type="submit"
            variant="contained"
            className={classes.root}
          >
            Valider
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EnterYourMail;

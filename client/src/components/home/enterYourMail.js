import TextField from "@material-ui/core/TextField";
import { Button, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { validateEmail } from "../../helpers/validators";

const useStyles = makeStyles({
  root: {
    margin: "1rem",
    height: "5.6rem",
  },
  container: {
    marginTop: "5vh",
  },
});

const EnterYourMail = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!error && email.length > 0) {
      history.push(`/${email}`);
    }
  };

  const handleEmail = (e) => {
    if (email.length > 0) {
      setError(!validateEmail(email));
    }
    setEmail(e.target.value);
  };

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
            value={email}
            type="text"
            onChange={handleEmail}
            name="email"
            error={error}
            helperText={error ? "Entrez un email valide" : " "}
          />
          <Button
            color="primary"
            type="submit"
            variant="contained"
            className={classes.root}
            onClick={onSubmit}
          >
            Valider
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EnterYourMail;

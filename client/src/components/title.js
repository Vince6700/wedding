import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "5vh",
  },
});

const Title = () => {
  const classes = useStyles();
  return (
    <Box display="flex" justifyContent="center" className={classes.root}>
      <Typography variant={"h1"} color="textPrimary">
        Claudia & Vincent
      </Typography>
    </Box>
  );
};

export default Title;

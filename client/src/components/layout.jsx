import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import claudiaVincent from "../images/claudiaVincent.jpeg";

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "6fr 4fr",
    width: "100%",
    height: "100%",
  },
  infos: {
    gridColumn: 2,
    backgroundColor: "#111",
    padding: "2rem",
  },
  pictureContainer: {
    gridColumn: 1,
    backgroundImage: `url(${claudiaVincent})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <div className={classes.pictureContainer} />
      <div className={classes.infos}>{children}</div>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;

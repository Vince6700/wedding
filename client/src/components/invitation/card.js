import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Course from "./course";

const Card = ({ invitation }) => {
  return (
    <List>
      <Course />
    </List>
  );
};

Card.propTypes = {
  invitation: PropTypes.object,
};

export default Card;

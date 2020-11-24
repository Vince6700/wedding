import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";

const Course = ({ course }) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

Course.propTypes = {};

export default Course;

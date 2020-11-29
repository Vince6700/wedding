import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const Info = ({ text, avatar, details }) => (
  <>
    <ListItem>
      <ListItemAvatar>
        <Avatar>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText>
        <Typography color="textPrimary">{text}</Typography>
        {details && (
          <Typography color={"textSecondary"} variant="body2">
            {details}
          </Typography>
        )}
      </ListItemText>
    </ListItem>
    <Divider variant="inset" component="li" />
  </>
);

Info.propTypes = {
  text: PropTypes.string,
  avatar: PropTypes.node,
  details: PropTypes.string,
};

export default Info;

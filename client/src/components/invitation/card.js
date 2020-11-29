import PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Info from "./info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import Flute from "../../svg/flute";
import CityHall from "../../svg/cityHall";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import Adults from "../../svg/adults";
import Children from "../../svg/children";

const Card = ({ invitation }) => {
  return (
    <List>
      <Info
        text={`${invitation.firstname} ${invitation.name}`}
        avatar={<AccountCircleIcon color="primary" />}
      />
      <Info
        text={`${invitation.email}`}
        avatar={<EmailIcon color="primary" />}
      />
      {invitation.ceremony && (
        <Info
          text={`Commune`}
          avatar={<CityHall color="primary" />}
          details="Commune d'Habay à 14h00"
        />
      )}
      {invitation.reception && (
        <Info
          text={`Cérémonie laïque & Vin d'honneur`}
          avatar={<Flute color="primary" />}
          details="Saint Vincent à 15h30"
        />
      )}
      {invitation.diner && (
        <Info
          text={`Repas et soirée`}
          avatar={<RestaurantIcon color="primary" />}
          details="Saint Vincent à 18h00"
        />
      )}
      {invitation.confirmation && (
        <>
          <Info
            text={`Adultes`}
            avatar={<Adults color="primary" />}
            details={`${invitation.adults} adultes`}
          />
          <Info
            text={`Enfants`}
            avatar={<Children color="primary" />}
            details={`${invitation.children} enfants`}
          />
        </>
      )}
    </List>
  );
};

Card.propTypes = {
  invitation: PropTypes.object,
};

export default Card;

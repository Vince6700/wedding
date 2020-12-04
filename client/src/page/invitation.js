import Title from "../components/title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGuestApi from "../hooks/useGuestApi";
import Card from "../components/invitation/card";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Invitation = () => {
  const [invitation, setInvitation] = useState({});
  const [error, setError] = useState();
  const { email } = useParams();
  const { getGuest } = useGuestApi();

  const handleGetGuest = async () => {
    const invit = await getGuest(email);
    !!invit && invit.success && setInvitation(invit.data);
    !!invit && !invit.success && setError(invit.error);
  };

  useEffect(() => {
    handleGetGuest();
  }, [email]);

  return (
    <>
      <Title />
      <Card invitation={invitation} />
      {invitation.confirmation && (
        <Box display="flex" justifyContent="center" mt={5}>
          <Button variant="contained" color="primary">
            CONFIRMER
          </Button>
        </Box>
      )}
    </>
  );
};

export default Invitation;

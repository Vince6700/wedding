import Title from "../components/title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGuestApi from "../hooks/useGuestApi";
import Card from "../components/invitation/card";

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
    </>
  );
};

export default Invitation;

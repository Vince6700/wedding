import Title from "../components/title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGuestApi from "../hooks/useGuestApi";

const Invitation = () => {
  const [invitation, setIinvitation] = useState({});
  const [error, setError] = useState();
  const { email } = useParams();
  const { getGuest } = useGuestApi();

  console.log(error);
  console.log(invitation);

  const handleGetGuest = async () => {
    const invit = await getGuest(email);
    !!invit && invit.success && setIinvitation(invit.data);
    !!invit && !invit.success && setError(invit.error);
  };

  useEffect(() => {
    handleGetGuest();
  }, [email]);

  return (
    <>
      <Title />
    </>
  );
};

export default Invitation;

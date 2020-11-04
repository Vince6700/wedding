import useGuestApi from "./hooks/useGuestApi";
import { useEffect, useState } from "react";

function App() {
  const [guests, setGuests] = useState([]);
  const { getGuests } = useGuestApi();

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    const res = await getGuests();
    setGuests(res.data);
  };

  console.log(guests);

  return <div className="App">test</div>;
}

export default App;

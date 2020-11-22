import axios from "axios";
const useGuestApi = () => {
  const api = axios.create({
    baseURL: "http://localhost:3333/api",
  });

  const getGuests = async () => {
    try {
      const res = await api.get(`/guests`);
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };

  const getGuest = async (email) => {
    try {
      const res = await api.get(`/guest/${email}`);
      return res.data;
    } catch (e) {
      if (e.response.status === 404) {
        return e.response.data;
      }
    }
  };

  return { getGuests, getGuest };
};

export default useGuestApi;

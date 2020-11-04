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

  return { getGuests };
};

export default useGuestApi;

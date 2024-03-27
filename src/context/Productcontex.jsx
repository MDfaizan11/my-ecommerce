import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loading from "../pages/Loading";
const api = "https://api.pujakaitem.com/api/products";

const Appcontext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function apicalling() {
      try {
        setLoading(false);
        const response = await axios(api);
        const product = response.data;
        setData(product);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    apicalling();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Appcontext.Provider value={{ data }}> {children}</Appcontext.Provider>
  );
};

export { AppProvider, Appcontext };

import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import CircularProgress from "@mui/material/CircularProgress";

export const CategoriesContext = createContext({
  categoriesMap: {},
  isLoading: false,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //This will FETCH all of our firebase product data at the start of the app
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
      setIsLoading(false);
    };

    getCategoriesMap();
  }, []);

  //While our async function is working on fetching our shop data from firebase DB, we will render a loading icon. Once we retrieve it successfully, we will pass it to our APP component to render the homepage/directory. This will allow us to refresh on any section without crashing due to not having shop data.
  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {isLoading ? <CircularProgress style={{ position: "fixed", top: "50%", left: "50%" }} /> : children}
    </CategoriesContext.Provider>
  );
};

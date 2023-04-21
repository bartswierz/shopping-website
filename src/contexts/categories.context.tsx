import { createContext, useState, useEffect, ReactNode } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import CircularProgress from "@mui/material/CircularProgress";

export interface CategoriesMap {
  basketball: CategoryData[];
  casual: CategoryData[];
  outdoor: CategoryData[];
  soccer: CategoryData[];
  work: CategoryData[];
}

export interface CategoryData {
  featuresList: string[];
  shoesList: {
    id: string;
    brandName: string;
    productName: string;
    subheader: string;
    discountPrice: number;
    originalPrice: number;
    imageUrl: string;
    color: string;
    starRating: number;
    totalReviews: number;
  }[];
}
[];

export interface CategoriesContextValue {
  categoriesMap: {
    basketball: CategoryData[];
    casual: CategoryData[];
    outdoor: CategoryData[];
    soccer: CategoryData[];
    work: CategoryData[];
  };
}

export const CategoriesContext = createContext<CategoriesContextValue>({
  categoriesMap: {
    basketball: [{ featuresList: [], shoesList: [] }],
    casual: [{ featuresList: [], shoesList: [] }],
    outdoor: [{ featuresList: [], shoesList: [] }],
    soccer: [{ featuresList: [], shoesList: [] }],
    work: [{ featuresList: [], shoesList: [] }],
  },
});

interface CategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  // const [categoriesMap, setCategoriesMap] = useState({});
  // const [categoriesMap, setCategoriesMap] = useState<CategoriesContextValue["categoriesMap"]>({
  //   basketball: { featuresList: [], shoesList: [] },
  //   casual: { featuresList: [], shoesList: [] },
  //   outdoor: { featuresList: [], shoesList: [] },
  //   soccer: { featuresList: [], shoesList: [] },
  //   work: { featuresList: [], shoesList: [] },
  // });
  const [categoriesMap, setCategoriesMap] = useState<CategoriesMap>({
    basketball: [
      {
        featuresList: [],
        shoesList: [],
      },
    ],
    casual: [
      {
        featuresList: [],
        shoesList: [],
      },
    ],
    outdoor: [
      {
        featuresList: [],
        shoesList: [],
      },
    ],
    soccer: [
      {
        featuresList: [],
        shoesList: [],
      },
    ],
    work: [
      {
        featuresList: [],
        shoesList: [],
      },
    ],
  });

  const [isLoading, setIsLoading] = useState(true);

  //This will FETCH all of our firebase product data at the start of the app
  useEffect(() => {
    // const getCategoriesMap = async () => {
    //   const categoryMap: CategoriesMap = await getCategoriesAndDocuments();
    //   setCategoriesMap(categoryMap);
    //   setIsLoading(false);
    // };
    const getCategoriesMap = async () => {
      try {
        // TODO - resolve categoryMap returned object issue
        // @ts-ignore
        const categoryMap: CategoriesMap = await getCategoriesAndDocuments();
        // const categoryMap = await getCategoriesAndDocuments();
        setCategoriesMap(categoryMap);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories: ", error);
      }
    };

    getCategoriesMap();
  }, []);

  //While our async function is working on fetching our shop data from firebase DB, we will render a loading icon. Once we retrieve it successfully, we will pass it to our APP component to render the homepage/directory. This will allow us to refresh on any section without crashing due to not having shop data.
  // const value = { categoriesMap, setCategoriesMap };

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {isLoading ? <CircularProgress style={{ position: "fixed", top: "50%", left: "50%" }} /> : children}
    </CategoriesContext.Provider>
  );
};

/*
import { createContext, useState, useEffect, ReactNode } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import CircularProgress from "@mui/material/CircularProgress";

// This is categoriesMap
interface SHOP_DATA {
  title: string;
  items: {
    featuresList: string[];
    shoesList: {
      id: number;
      brandName: string;
      productName: string;
      subheader: string;
      discountPrice: number;
      originalPrice: number;
      imageUrl: string;
      color: string;
      starRating: number;
      totalReviews: number;
    }[];
  }[];
}
[];

// interface CategoriesMapProps {
//   featuresList: string[];
//   shoesList: {
//     id: number;
//     brandName: string;
//     productName: string;
//     subheader: string;
//     discountPrice: number;
//     originalPrice: number;
//     imageUrl: string;
//     color: string;
//     starRating: number;
//     totalReviews: number;
//   }[];
// }

// // CategoriesMap structure has 5 shoe types, and each type has an array with the above content
// interface CategoriesMap {
//   basketball: CategoriesMapProps[];
//   casual: CategoriesMapProps[];
//   outdoor: CategoriesMapProps[];
//   soccer: CategoriesMapProps[];
//   work: CategoriesMapProps[];
// }[]

interface CategoriesContextValue {
  categoriesMap: {
    basketball: { featuresList: string[]; shoesList: (string | number)[] };
    casual: { featuresList: string[]; shoesList: (string | number)[] };
    outdoor: { featuresList: string[]; shoesList: (string | number)[] };
    soccer: { featuresList: string[]; shoesList: (string | number)[] };
    work: { featuresList: string[]; shoesList: (string | number)[] };
  };
}

// This type resolves the issue: Type '{ categoriesMap: {}; setCategoriesMap: React.Dispatch<React.SetStateAction<{}>>; }' is not assignable to type '{ categoriesMap: {}; setCategoriesMap: () => void; }'.
// type CategoriesContextValue = {
//   categoriesMap: CategoriesMap[];
//   // setCategoriesMap: React.Dispatch<React.SetStateAction<{}>>;
// };

export const CategoriesContext = createContext<CategoriesContextValue>({
  categoriesMap: {
    basketball: { featuresList: [], shoesList: [] },
    casual: { featuresList: [], shoesList: [] },
    outdoor: { featuresList: [], shoesList: [] },
    soccer: { featuresList: [], shoesList: [] },
    work: { featuresList: [], shoesList: [] },
  },
});

interface CategoriesProviderProps {
  children: ReactNode;
}

export const CategoriesProvider = ({ children }: CategoriesProviderProps) => {
  // const [categoriesMap, setCategoriesMap] = useState({});
  const [categoriesMap, setCategoriesMap] = useState<CategoriesContextValue["categoriesMap"]>({
    basketball: { featuresList: [], shoesList: [] },
    casual: { featuresList: [], shoesList: [] },
    outdoor: { featuresList: [], shoesList: [] },
    soccer: { featuresList: [], shoesList: [] },
    work: { featuresList: [], shoesList: [] },
  });

  const [isLoading, setIsLoading] = useState(true);

  //This will FETCH all of our firebase product data at the start of the app
  useEffect(() => {
    const getCategoriesMap = async () => {
      // Issue is categoryMap here is of type {} not our current setup
      // let categoryMap = categoriesMap;

      // console.log("Type categoriesMap: ", typeof categoriesMap);
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
      setIsLoading(false);
    };

    getCategoriesMap();
  }, []);

  //While our async function is working on fetching our shop data from firebase DB, we will render a loading icon. Once we retrieve it successfully, we will pass it to our APP component to render the homepage/directory. This will allow us to refresh on any section without crashing due to not having shop data.
  // const value = { categoriesMap, setCategoriesMap };

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {isLoading ? <CircularProgress style={{ position: "fixed", top: "50%", left: "50%" }} /> : children}
    </CategoriesContext.Provider>
  );
};

*/

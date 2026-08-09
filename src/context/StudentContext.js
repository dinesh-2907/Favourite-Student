
import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourite = (student) => {
    const alreadyExists = favourites.some(
      (item) => item.id === student.id
    );

    if (!alreadyExists) {
      setFavourites([...favourites, student]);
    }
  };

  const removeFromFavourite = (id) => {
    setFavourites(
      favourites.filter((student) => student.id !== id)
    );
  };

  return (
    <StudentContext.Provider
      value={{
        favourites,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
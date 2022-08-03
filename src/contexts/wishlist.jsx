import * as React from "react";
import apiClient from "../services/apiClient";
import { useAuthContext } from "./auth";

const WishlistContext = React.createContext(null);

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = React.useState([]);
  const [initialized, setInitialized] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState({});
  const [refresh, setRefresh] = React.useState(false);
  const { user, apiClient } = useAuthContext();

  React.useEffect(() => {
    const getWishlistItems = async () => {
      let wishlistItemsArray = [];
      try {
        if (user) {
          setIsLoading(true);
          wishlistItemsArray = await apiClient.getWishlistItemsFromUser(
            user.user.id
          );
          setWishlistItems(wishlistItemsArray.wishlistItems);
          setError({});
        }
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
      setInitialized(true);
    };
    getWishlistItems();
  }, [user, refresh]);

  const getWishlistById = async (wishlistId) => {
    return await apiClient.getWishlistById(wishlistId);
  };

  const val = {
    error,
    setError,
    isLoading,
    setIsLoading,
    wishlistItems,
    setWishlistItems,
    initialized,
    setInitialized,
    getWishlistById,
    refresh,
    setRefresh,
  };
  return (
    <WishlistContext.Provider value={val}>
      <>{children}</>
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => React.useContext(WishlistContext);

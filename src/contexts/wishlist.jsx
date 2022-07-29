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
  //   const apiClient = new ApiClient(API_BASE_URL);
  React.useEffect(() => {
    const getWishlistItems = async () => {
      let wishlistItemsArray = [];
      try {
        // userToken = window.localStorage.getItem("lifetracker_token");
        // console.log("usertoken in wishlist context", userToken);
        // console.log("user in wishlist context", user);
        if (user) {
          setIsLoading(true);
          //   console.log("user.id in wishlist context", user.user.id);
          wishlistItemsArray = await apiClient.getWishlistItemsFromUser(
            user.user.id
          );
          //   console.log("WishlistItems array:", wishlistItemsArray.wishlistItems);
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

  // const postWishlistItem = async (item) => {
  //   if (user.user.hasOwnProperty("id")) {
  //     return await apiClient.postWishlistItem(item, user.user.id);
  //   }
  // };
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
    // postWishlistItem,
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

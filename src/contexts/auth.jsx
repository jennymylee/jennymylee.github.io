import { createContext, useState, useContext } from "react";
import React, { useReducer } from "react";
import { initialState, AuthReducer } from "./reducer";

const AuthContext = createContext();
// const AuthDispatchContext = React.createContext();

// export function useAuthState() {
//   const context = React.useContext(AuthStateContext);
//   if (context === undefined) {
//     throw new Error("useAuthState must be used within a AuthProvider");
//   }

//   return context;
// }

// export function useAuthDispatch() {
//   const context = React.useContext(AuthDispatchContext);
//   if (context === undefined) {
//     throw new Error("useAuthDispatch must be used within a AuthProvider");
//   }

//   return context;
// }

/*
AuthContextProvider component will give the authValue to each child
component to have access and use that data for features like the login
and logout feature. Will be rendered in App.jsx
 */
export const AuthContextProvider = ({ children }) => {
  //   const [user, dispatch] = useReducer(AuthReducer, initialState);

  const [user, setUser] = React.useState({});
  const [refresh, setRefresh] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [error, setError] = React.useState({});

  React.useEffect(() => {
    console.log("user in auth context", user);
  }, [user]);

  var authValue = {
    user,
    setUser,
    refresh,
    setRefresh,
    initialized,
    setInitialized,
    isProcessing,
    setIsProcessing,
    error,
    setError,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {/* <AuthDispatchContext.Provider value={dispatch}> */}
      {children}
      {/* </AuthDispatchContext.Provider> */}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

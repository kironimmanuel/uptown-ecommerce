import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect, useState } from "react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value="user context">{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

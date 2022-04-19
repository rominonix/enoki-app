import React, { useState, useEffect } from "react";
import { User, UserContextInterface } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as API from "./api";

export const UserContext = React.createContext<UserContextInterface | null>(
  null
);

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  
  const login = async (email: string, password: string) => {
    try {
      const response = await API.login(email, password);
      console.log("res from contexts", response);

      // if (response) {
      //   setUser(response.user);
        
      //   setToken(response.token);

      //   await AsyncStorage.setItem("token", response.token);
      // } 
    } catch (error) {
      console.log(error);  
    }
  };

  const userContext: UserContextInterface = {
    user,
    login,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

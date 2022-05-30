import React, { useState } from "react";
import { User, Mushroom, UserContextInterface, RandomMushroom } from './types';
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as API from "./api";

export const UserContext = React.createContext<UserContextInterface | null>(
  null
);

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [mushrooms, setMushrooms] = useState<Mushroom[]>([]);
  const [randomMushroom, setRandomMushroom] = useState<RandomMushroom | null >(null)

  const login = async (email: string, password: string) => {
    try {
      const response = await API.login(email, password);
      if (response) {
        setUser(response.user);
        setToken(response.token);
        await AsyncStorage.setItem("token", response.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (user: User) => {
    try {
      await API.register(user);
      await login(user.email, user.password);

      return true;
    } catch (error) {
      return false;
    }
  };

  const passwordReset = async (email: string) => {
    try {
      const response = await API.passwordReset(email);
    } catch (error) {
      console.log(error);
    }
  };

  const getStorageData = async () => {
    try {
      let userToken = await AsyncStorage.getItem("token");
      if (userToken) {
        const response = await API.getUser(userToken);

        if (response.data.message === "Unauthorized") {
          Alert.alert("User unauthorized", "Try again", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        } else {
          setUser(response.data.users);
          setToken(userToken);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  const titleAndDescription = async (
    title: string,
    description: string,
    image: object
  ) => {
    try {
      //@ts-ignore
      await API.addTitleAndDescription(title, description, user?.id, image);
    } catch (error) {
      console.log(error);
    }
  };


  const getAlbums = async () => {
    try {
      let userToken = await AsyncStorage.getItem("token");
      if (userToken) {
        const response = await API.getUserImages(userToken);
        // console.log("getalbum",response);       
        if (response) {
          setMushrooms(response)
  
          // setPagination(response.pagination);
          // console.log("HONGIS", typeof mushrooms, mushrooms);          
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRandomMushroom = async () => {
    try {
      let userToken = await AsyncStorage.getItem("token");
      if (userToken) {
        const response = await API.getRandom(userToken);
        // console.log("getalbum",response);       
        if (response) {
          
          setRandomMushroom(response)
          // setPagination(response.pagination);
               
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const userContext: UserContextInterface = {
    user,
    token,
    mushrooms,
    randomMushroom,
    login,
    register,
    passwordReset,
    getStorageData,
    logout,
    titleAndDescription,
    getAlbums,
    getRandomMushroom
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

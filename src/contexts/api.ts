import { Platform } from "react-native";
import axios from "axios";
import { User } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const HOST = Platform.OS === "ios" ? "localhost" : "10.0.2.2";
const HOST = "192.168.1.155";

const API = axios.create({ baseURL: `http://${HOST}:3000/api/` });

export const getUser = async (token: string) => {
  const response = await API.get("/me", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response;
};

export const login = async (email: string, password: string) => {
  try {
    const response = await API.post("/login", {
      email,
      password,
    });
    return {
      user: response.data.user,
      token: response.data.token,
    };
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const register = async (user: User) => {
  try {
    await API.post("/register", {
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    console.log(error);
  }
};

export const passwordReset = async (email: string) => {
  const response = await API.post("/passwordreset", { email });
  return response;
};

export const addTitleAndDescription = async (
  title: string,
  description: string,
  user: User,
  image: object
) => {
  let token = await AsyncStorage.getItem("token");
  let id = user;
  let url = "/image";

  try {
    const response = await API.post(
      url,
      {
        title,
        description,
        userId: id,
        image,
      },
      {
        headers: {
          // Accept: "application/json,text/*;q=0.99", 
          Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
        transformRequest: (data, headers) => {
          return image; // this is doing the trick
        },
      }
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addNewImage = async (
  user: User,
  image: object,
) => {
  let token = await AsyncStorage.getItem("token");
  let id = user;
  let url = `/${user}/image`;

  try {
    const response = await API.post(
      url,
      {
        userId: id,
        image,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "multipart/form-data",
        },
        transformRequest: (data, headers) => {
          return image;
        },
      }
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};


export const getUserImages = async (token: string) => {
  const response = await API.get("/images", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }); 
  return response.data.mushrooms;
};

export const getRandom = async (token: string) => {
  const response = await API.get("/random", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }); 

  return response.data;
};


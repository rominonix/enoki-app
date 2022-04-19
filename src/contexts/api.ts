import { Platform } from "react-native";
import axios from "axios";
import { User } from "./types";

const HOST = Platform.OS === "ios" ? "localhost" : "10.0.2.2";
const API = axios.create({ baseURL: `http://${HOST}:3000/api/` });

export const login = async (email: string, password: string) => {
  try {
    const response = await API.post("/login", {
      email,
      password,
    });
    console.log("holi", response.data.user);

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

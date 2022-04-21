import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import LoginStack from "./LoginStack";
import MainTabNavigator from "./MainTabNavigator";

const AuthNavigator: React.FC = () => {
  const { user } = useContext(UserContext)!;

    return !user ? (
      <LoginStack />) :  (
      <MainTabNavigator />) 
};

export default AuthNavigator;
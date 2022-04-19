import { useContext } from "react";
// import { UserContext } from "../contexts/user/UserContext";
import LoginStack from "./LoginStack";
// import MainTabNavigator from "./MainTabs";
// import SelectCategories from "../screens/onboarding/categories/Categories";

const AuthNavigator: React.FC = () => {
//   const { user, userOnboarded } = useContext(UserContext)!;

  return  (
    <LoginStack />
  );
};

export default AuthNavigator;
import { createStackNavigator, createAppContainer } from "react-navigation";

// Import screens
import FirstPage from "../scenarios/screens/FirstPage";
import ObjectView from "../scenarios/screens/ObjectView";

const AppNavigator = createStackNavigator(
  {
    FirstPage: { screen: FirstPage },
    ObjectView: { screen: ObjectView }
  },
  {
    initialRouteName: "FirstPage"
  }
);

const AppNavigatorContainer = createAppContainer(AppNavigator);

export default AppNavigatorContainer;

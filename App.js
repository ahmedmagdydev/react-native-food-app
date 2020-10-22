import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import searchScreen from "./screens/searchScreen.js";
import ResultDetails from "./screens/resultDetails.js";

const navigator = createStackNavigator(
  {
    Search: searchScreen,
    Details: ResultDetails,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Resturants Search",
    },
  }
);

export default createAppContainer(navigator);

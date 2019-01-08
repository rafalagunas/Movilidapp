import Main from "./index";
import { StackNavigator } from "react-navigation";

const App = StackNavigator({
  Home: { screen: Main }
});

export default App;

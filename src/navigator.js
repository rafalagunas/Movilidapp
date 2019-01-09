import Main from "./index";
import Transport from "./components/type";
import { StackNavigator } from "react-navigation";
import Taxi from "./components/taxi";
import Van from "./components/van";
import Bus from "./components/bus";
import Login from "./index";
import Register from "./components/register";

const App = StackNavigator({
  Home: { screen: Login },
  Register: { screen: Register },
  Type: { screen: Transport },
  Taxi: { screen: Taxi },
  Van: { screen: Van },
  Bus: { screen: Bus }
});

export default App;

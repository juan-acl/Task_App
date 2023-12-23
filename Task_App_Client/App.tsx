import { NavigationContainer } from "@react-navigation/native";
import NavigationDrawer from './src/navigations/Drawer';
import { Provider } from "react-redux";
import { store } from "./src/redux/configureStore";

export default function App() {
  return (
    <Provider store={store} >
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
    </Provider>
  );
}

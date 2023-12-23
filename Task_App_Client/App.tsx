import { NavigationContainer } from "@react-navigation/native";
import NavigationDrawer from './src/navigations/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
}

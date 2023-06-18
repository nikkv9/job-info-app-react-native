import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigator/StackNavigator";
import { StatusBar, StyleSheet, View } from "react-native";
import { ContextApi } from "./api/context_api";

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StackNavigator />
      </View>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => (
  <ContextApi>
    <App />
  </ContextApi>
);

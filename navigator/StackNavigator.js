import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderBtn from "../components/layout/HeaderBtn";
import hamburgerIcon from "../assets/align-left.svg";
import userIcon from "../assets/user.svg";
import News from "../screens/News";
import NewsTabs from "../components/NewsTabs";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsTabs"
        component={NewsTabs}
        options={{
          headerStyle: { backgroundColor: "aliceblue" },
          headerLeft: () => <HeaderBtn iconUrl={hamburgerIcon} />,
          headerTitle: "",
          headerRight: () => <HeaderBtn iconUrl={userIcon} />,
          headerShadowVisible: false,
        }}
      />
      {/* <Stack.Screen
        name="NewsScreen"
        component={News}
        options={{
          headerStyle: { backgroundColor: "aliceblue" },
          headerLeft: () => <HeaderBtn iconUrl={hamburgerIcon} />,
          headerTitle: "",
          headerRight: () => <HeaderBtn iconUrl={userIcon} />,
          headerShadowVisible: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;

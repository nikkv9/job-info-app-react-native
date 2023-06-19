import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewsTabs from "../components/news/NewsTabs";
// import HeaderBtn from "../components/layout/HeaderBtn";
// import hamburgerIcon from "../assets/align-left.svg";
// import userIcon from "../assets/user.svg";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsTabs"
        component={NewsTabs}
        options={{
          // headerStyle: { backgroundColor: "aliceblue" },
          // headerLeft: () => <HeaderBtn iconUrl={hamburgerIcon} />,
          // headerTitle: "",
          // headerRight: () => <HeaderBtn iconUrl={userIcon} />,
          // headerShadowVisible: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

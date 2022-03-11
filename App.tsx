import * as eva from "@eva-design/eva";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import AppLoading from "expo-app-loading";
import * as React from "react";
import ShopStackScreen from "./src/components/ShopStackScreen";
import TabbarIcon from "./src/components/TabbarIcon";
import { useCustomFont } from "./src/hooks/useCustomFont";
import AccountScreen from "./src/scenes/Account";
import BlogScreen from "./src/scenes/Blog";
import HomeScreen from "./src/scenes/Home";
import VirtualGuideScreen from "./src/scenes/VirtualGuide";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";
import tabbar from "./src/theme/tabbar";

const Tab = createBottomTabNavigator();

function App() {
  const { fontsLoaded } = useCustomFont();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ApplicationProvider
      {...eva}
      theme={{ ...eva.dark, ...colors }}
      customMapping={fonts as any}
    >
      <IconRegistry icons={EvaIconsPack} />

      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: tabbar.activeColor,
            tabBarInactiveTintColor: tabbar.inactiveColor,
            tabBarLabelStyle: tabbar.label,
            headerTitleStyle: tabbar.title,
            tabBarIcon: ({ focused, color, size }) => (
              <TabbarIcon
                focused={focused}
                color={color}
                size={size}
                route={route}
              />
            ),
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen
            name="Shop"
            component={ShopStackScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Blog" component={BlogScreen} />
          <Tab.Screen name="Guide" component={VirtualGuideScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
}

export default App;

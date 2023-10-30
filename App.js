
import React from "react";
import { SafeAreaView, Text, View } from "react-native"
import Login from "./src/Screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";
import Register from "./src/Screens/Register";
const App = () => {
  const stack=createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
    <stack.Screen name="Login" component={Login} options={{headerShown:false}} />
    <stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    <stack.Screen name="Register" component={Register} options={{headerShown:false}} />

    </stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
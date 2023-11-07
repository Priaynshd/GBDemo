
import React from "react";
import { SafeAreaView, Text, View } from "react-native"
import Login from "./src/Screens/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";
import Register from "./src/Screens/Register";
import Intro from "./src/Screens/Intro";
import MyContacts from "./src/Screens/MyContacts";
import SaveContacts from "./src/Screens/SaveContacts";
import EditContacts from "./src/Screens/EditContacts";
const App = () => {
  const stack=createStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name="Intro" component={Intro} options={{headerShown:false}} />
      <stack.Screen name="MyContacts" component={MyContacts} options={{headerShown:false}} />
      <stack.Screen name="SaveContacts" component={SaveContacts} options={{headerShown:false}} />
      <stack.Screen name="EditContacts" component={EditContacts} options={{headerShown:false}} />

    <stack.Screen name="Login" component={Login} options={{headerShown:false}} />
    <stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    <stack.Screen name="Register" component={Register} options={{headerShown:false}} />

    </stack.Navigator>
    </NavigationContainer>
  )
}
export default App;
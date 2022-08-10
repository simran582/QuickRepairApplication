// import React from 'react';
// import { View } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import AboutScreen from './AboutScreen';
// import Services from './Services';
// import Cart from './Cart';
// import HomeScreen from './HomeScreen';
// import {MaterialCommunityIcons} from '@expo/vector-icons';


// const Tab = createBottomTabNavigator();

// function TabBar(props) {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={HomeScreen} options={{
//                     tabBarIcon: () => {
//                         return <MaterialCommunityIcons name="home" size={24} color="black" />
//                     }
//                 }} />
//                 <Tab.Screen name="Services" component={Services} options={{
//                     tabBarIcon: () => {
//                         return <MaterialCommunityIcons name="hammer-wrench" size={24} color="black" />
//                     }
//                 }} />
//                 <Tab.Screen name ="Cart" component={Cart} options={{
//                     tabBarIcon: () => {
//                         return <MaterialCommunityIcons name="cart-variant" size={24} color="black" />
//                     }
//                 }}  />
//                 <Tab.Screen name="About"  component={AboutScreen}  options={{
//                     tabBarIcon: () => {
//                         return <MaterialCommunityIcons name="contacts" size={24} color="black" />
//                     }
//                 }}  />     
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

// export default TabBar;
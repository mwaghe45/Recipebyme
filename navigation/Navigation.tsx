import React ,{useEffect,useState}from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../Screens/Home/Home";
import {NavigationContainer} from '@react-navigation/native'
import Categories from "../Screens/Categories/Categories";
import Recipe from "../Screens/Reciepe/Recipe";
import ListByCategory from "../Screens/ListByCategory/ListByCategory";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddRecipe from "../Screens/AddRecipe/AddRecipe";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SeachRecipe from "../Screens/SearchRecipe/SearchRecipe";
import Blog from "../Screens/Blog/Blog";
import Login from "../Screens/Login/Login"
import Register from '../Screens/Register/Register'
import Splash from "../Screens/Splash/Splash";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const [badge,setBadge]= useState<any>(1)

    // const retrieveData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('recipe');
    //     //  console.log('badge',value)
    //     if(value !== null) {
    //       // value previously stored
    //       setBadge( value)
    //     }
    //   } catch(e) {
    //     // error reading value
    //   }
    // };
    // retrieveData();

    return(
       <Tab.Navigator initialRouteName="Home" 
       >
        <Tab.Screen name="Home" component={Home}
         options={{
          headerStyle:{backgroundColor:'#E38ED0'},
          tabBarLabel: 'Home',
          tabBarLabelStyle:{color:"grey", fontSize:13},
         // tabBarBadge:badge,
          tabBarIcon:({focused,size})=>(
            <MaterialCommunityIcons name="home" color={focused ? "#E38ED0" : "grey"} size={30}/>
          )
        }}
        />
        <Tab.Screen name="Category" component={Categories}
          options={{
            headerStyle:{backgroundColor:'#E38ED0'},
            tabBarLabel: 'Category',
            tabBarLabelStyle:{color:"grey", fontSize:13},
            tabBarIcon:({focused,size})=>(
              <MaterialCommunityIcons name="book-open-outline" color={ focused ? "#E38ED0":"grey" } size={30}/>
            )
          }} />
           <Tab.Screen name="Search" component={SeachRecipe} options={{
            headerStyle:{backgroundColor:'#E38ED0'},
            tabBarLabel: 'Search',
            tabBarLabelStyle:{color:"grey", fontSize:13},
            tabBarIcon:({focused,size})=>(
              <MaterialCommunityIcons name="home-search-outline" color={ focused ? "#E38ED0":"grey" } size={30}/>
            )
          }}/>
          <Tab.Screen name="Add Recipe" component={AddRecipe}
          options={{
            headerStyle:{backgroundColor:'#E38ED0'},
            tabBarLabel: 'Add Recipe',
            tabBarLabelStyle:{color:"grey", fontSize:13},
            tabBarIcon:({focused,size})=>(
              <MaterialCommunityIcons name="noodles" color={ focused ? "#E38ED0":"grey" } size={30}/>
            )
          }}  />
          <Tab.Screen name="Blogs" component={Blog}
          options={{
            headerStyle:{backgroundColor:'#E38ED0'},
            tabBarLabel: 'Blogs',
            tabBarLabelStyle:{color:"grey", fontSize:13},
            tabBarIcon:({focused,size})=>(
              <MaterialCommunityIcons name="post" color={ focused ? "#E38ED0":"grey" } size={30}/>
            )
          }}  />
        <Tab.Screen name="Recipe" component={Recipe} 
        options={{
          headerStyle:{backgroundColor:'#E38ED0'},
           tabBarItemStyle:{display: 'none'}
        }}/>
        <Tab.Screen name="ListByCategory" component={ListByCategory} options={{
          headerStyle:{backgroundColor:'#E38ED0'},
          tabBarItemStyle:{display:'none'}
        }}/>
     
        
       </Tab.Navigator>
    )
}

export default function AppContainer():JSX.Element {
    return(
      // <Splash/>

      // <NavigationContainer>
        
      //   {/* <MainNavigator /> */}
      //   {/* <Login navigation={}/> */}
      //   {/* <Register/> */}
      // </NavigationContainer>

      <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash which will come once for 5 Seconds */}
        <Stack.Screen
          name="Splash"
          component={Splash}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="MainNavigator"
          component={MainNavigator}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

      
    )
}
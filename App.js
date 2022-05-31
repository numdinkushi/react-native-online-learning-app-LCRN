import React from 'react';
import { Easing } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import themeReducer from './stores/themeReducer';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import {MainLayout, CourseListing} from './screens';

const store = createStore(
    themeReducer,
    applyMiddleware(thunk)
)

// const Stack = createNativeStackNavigator();
const Stack = createSharedElementStackNavigator();

const options = {
    gestureEnabled:false,
    transitionSpec: {
      open: {
        animation:"timing",
        config: {duration:400, easing: Easing.inOut(Easing.ease)}
      },
      close: {
        animation:"timing"},
        config: {duration:400, easing: Easing.inOut(Easing.ease)}

    },
    cardStyleInterpolator : ({current: {progress}})=>{
      return {cardStyle: {
          opacity:progress
      }}
    }

}

const App = () => {
  return (
      <Provider  store = {store} >
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          useNativeDriver:true,
          headerShown: false,
        }}
        detachInactiveScreens={false}
        initialRouteName={'Dashboard'}
        
        >
        <Stack.Screen name="Dashboard" component={MainLayout} />
        <Stack.Screen  name="CourseListing" 
      component={CourseListing}
      options={()=> options}
      />
      </Stack.Navigator>

    </NavigationContainer>
    </Provider>

  );
};

export default App;

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DetailsScreen, HomeScreen } from '../screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const PrivateRoutes = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
<Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
<Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
    </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})
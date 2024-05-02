import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";


const Login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className=' text-lg font-pbold ' >Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Login


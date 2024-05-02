import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className=' flex-1' >
      <View className="flex-1 items-center justify-center bg-white" >
        <Text >Hello World</Text>
        <Text className=" text-red-500" >This is the first page of your app.</Text>
        <Text className=" text-2xl text-blue-500" > this is tailwind</Text>
      <Link href="/home" > Login </Link>
      </View>

      <StatusBar style="auto"/>  
      
    </View>
  );
}


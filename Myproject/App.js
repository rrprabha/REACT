import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native'

function HomePage() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Page</Text>
      <Text>Welcome to Mobile App!</Text>
    </View>
  );
}

function ImagePage() {
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>My Image!</Text>
         <Image
             source={{uri: 'https://hackernoon.com/images/z2xg2bpo.jpg'}}
             style={{width: 400, height: 400}}
         />
       </View>
    );
  }


function MyBackButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Image" component={ImagePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
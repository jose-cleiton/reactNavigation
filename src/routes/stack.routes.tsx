import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaA } from '../screens/telaA';
import { TelaB } from '../screens/telaB';

const { Screen, Navigator } = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen
        name='TelaA'
        options={{
          title: 'Screen Inicical',
          headerTitleAlign: 'center',
        }}
        component={TelaA}
      />
      <Screen name='TelaB' component={TelaB} />
    </Navigator>
  );
};

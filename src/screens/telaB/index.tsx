import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackParamList } from 'src/@types/navigation';



export const TelaB = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const openTela = () => {
    navigation.navigate('TelaA'); // Mudança aqui para navegar para a TelaA
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Tela B</Text>
      <Button title='Ir para tela A' onPress={openTela} />
    </View>
  );
};

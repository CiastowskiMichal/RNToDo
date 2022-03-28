import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    Button,
    Pressable,
    TextInput
  } from 'react-native';

import newbutton from './Styles';

const NewButton = (props) => {
    const { onPress, title } = props;
    return (
      <Pressable style={newbutton.addGoalButton} onPress={onPress}>
        <Text style={newbutton.addGoalButtonText}>{title}</Text>
      </Pressable>
    );
  }


  export default NewButton;
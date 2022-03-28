import React from "react";
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
import item from './Styles'

const Item = ({ name }) => (
    <View style={item.item}>
      <Text style={item.title}>{name}</Text>
    </View>
  );

  export default Item;
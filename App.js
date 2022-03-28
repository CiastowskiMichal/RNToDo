/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type { Node } from 'react';
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react/cjs/react.production.min';

import NewButton from './components/NewButton/NewButton';
import Item from './components/Item/Item';



const App = () => {
  const [enteredText, setEnteredText] = React.useState('');

  const [goalList, setGoals] = React.useState([
    {
      id: 'g0',
      name: 'Take photos'
    },
    {
      id: 'g1',
      name: 'Make scans'
    },
    {
      id: 'g2',
      name: '...'
    },
    {
      id: 'g3',
      name: 'Profit'
    }
  ]);

  const addGoal = () => {
    if (enteredText.length > 0) {
      setGoals((prevGoals) => {
        const goal = {
          id: 'g' + prevGoals.length,
          name: enteredText
        };
        setEnteredText('');
        return prevGoals.concat(goal);
      });

    }
  };

  const renderItem = ({ item }) => (
    <Item name={item.name} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Goals:</Text>
      <View style={styles.addGoalView}>
        <TextInput onChangeText={newText => setEnteredText(newText)}
          defaultValue={enteredText}
          style={styles.addGoalInput} />
        <NewButton onPress={addGoal} title="Add new Goal"></NewButton>
      </View>
      <FlatList
        data={goalList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    textAlign: 'center',
    color: '#2E4172',
    fontSize: 30,
    fontStyle: 'normal',
    marginTop: 30,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  addGoalInput: {
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#E8EFFF',
    borderColor: '#2E4172',
    borderStyle: 'solid',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    width: 150,
    height: 40,
    alignSelf: 'center',
    color: '#2E4172',
    fontSize: 15,
  },
  addGoalView: {
    flexDirection: 'row',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  }
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const RNFS = require('react-native-fs');

const CachePath = RNFS.CachesDirectoryPath;
const ExtCachePath = RNFS.ExternalCachesDirectoryPath;
const DocPath = RNFS.DocumentDirectoryPath;
const DownPath = RNFS.DownloadDirectoryPath;
const ExtDirectoryPath = RNFS.ExternalDirectoryPath;
const ExtStoragePath = RNFS.ExternalStorageDirectoryPath;

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={styles.sectionContainer}>
      <Text>Hello</Text>
      <Text>CachePath: {CachePath}</Text>
      <Text>ExtCachePath: {ExtCachePath}</Text>
      <Text>DocPath: {DocPath}</Text>
      <Text>DownPath: {DownPath}</Text>
      <Text>ExtDirectoryPath: {ExtDirectoryPath}</Text>
      <Text>ExtStoragePath: {ExtStoragePath}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

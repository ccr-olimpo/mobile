/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Home from './screens/Home';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#44FFDA" />
      <Home />
    </>
  );
};

export default App;

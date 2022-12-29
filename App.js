import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {useTailwind} from 'tailwind-rn';
import Home from './Home';

const App = () => {
  const tw = useTailwind();

  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView style={tw('h-full')} />
      <Home />
    </TailwindProvider>
  );
};

export default App;

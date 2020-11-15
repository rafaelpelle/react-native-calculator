import React from 'react'
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native'
import Display from './components/Display'
import Keyboard from './components/Keyboard'
import useCalculator from './hooks/useCalculator'

const App = () => {
  const useCalculatorHook = useCalculator()

  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView>
        <View style={styles.container}>
          <Display {...useCalculatorHook} />
          <Keyboard {...useCalculatorHook} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
})

export default App

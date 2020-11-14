import React from 'react'
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native'
import Display from './components/Display'
import Keyboard from './components/Keyboard'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView>
        <View style={styles.container}>
          <Display displayText={'1 + 3'} result={'4'} />
          <Keyboard />
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

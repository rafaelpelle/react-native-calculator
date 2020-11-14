import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView>
        <View style={styles.textContainer}>
          <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView}>
            <Text>TO-DO</Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    height: '100%',
    backgroundColor: Colors.lighter,
  },
  scrollView: {},
})

export default App

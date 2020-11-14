import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { grey, lightGrey } from '../../colors'

export default function Display({ displayText, result }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayText}</Text>
      <Text style={styles.textResult}>{result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: lightGrey,
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    color: grey,
    fontSize: 20,
  },
  textResult: {
    color: 'black',
    marginTop: 10,
    fontSize: 50,
  },
})

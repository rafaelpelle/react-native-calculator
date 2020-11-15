import React from 'react'
import { Text, StyleSheet, TouchableHighlight, Dimensions } from 'react-native'
import {
  grey,
  lightGrey,
  lightGreyHighlight,
  green,
  lightGreen,
  lightGreenHighlight,
  red,
  lightRed,
  lightRedHighlight,
} from '../../colors'

export default function Button({ label, isOperation, isDouble, isTriple, handlePress }) {
  const containerStyle = [styles.container]
  const textStyle = [styles.text]
  isOperation && containerStyle.push(styles.isOperation)
  isOperation && textStyle.push(styles.isOperation)
  isDouble && containerStyle.push(styles.isDouble)
  isTriple && containerStyle.push(styles.isTriple)
  isTriple && textStyle.push(styles.isTripleText)

  return (
    <TouchableHighlight
      style={containerStyle}
      activeOpacity={1}
      underlayColor={isOperation ? lightGreenHighlight : lightGreyHighlight}
      onPress={() => handlePress(label, isOperation)}
    >
      <Text style={textStyle}>{label}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGrey,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 8,
    width: (Dimensions.get('window').width - 16 * 4) / 4,
    height: (Dimensions.get('window').width - 16 * 4) / 4,
  },
  text: {
    fontSize: 30,
    color: grey,
  },
  isOperation: {
    backgroundColor: lightGreen,
    color: green,
  },
  isDouble: {
    width: (Dimensions.get('window').width - 16 * 2) / 2,
  },
  isTriple: {
    backgroundColor: lightRed,
    width: ((Dimensions.get('window').width - (16 * 4) / 3) / 4) * 3,
  },
  isTripleText: {
    color: red,
  },
})

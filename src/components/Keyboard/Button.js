import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native'
import { isAndroid } from '../../utils'
import { grey, lightGrey, lightGreyHighlight, green, lightGreen, red, lightRed } from '../../colors'

export default function Button({ label, isOperation }) {
  const style = isOperation ? operationStyles : styles

  if (isAndroid) {
    return (
      <TouchableNativeFeedback
        onPress={() => console.warn('teste')}
        background={
          Platform.Version >= 21
            ? TouchableNativeFeedback.Ripple(lightGreyHighlight, true, 60)
            : TouchableNativeFeedback.SelectableBackground()
        }
      >
        <View style={style.container}>
          <Text style={style.text}>{label}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  } else {
    return (
      <TouchableHighlight
        style={style.container}
        activeOpacity={1}
        underlayColor={lightGreyHighlight}
        onPress={() => console.warn('teste')}
      >
        <Text style={style.text}>{label}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGrey,
    display: 'flex',
    margin: '2%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '21%',
  },
  text: {
    fontSize: 30,
    color: grey,
  },
})

const operationStyles = StyleSheet.create({
  container: {
    ...styles.container,
    backgroundColor: lightGreen,
  },
  text: {
    ...styles.text,
    color: green,
  },
})

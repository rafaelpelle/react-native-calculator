import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './Button'

export default function Keyboard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button label={7} />
        <Button label={8} />
        <Button label={9} />
        <Button label={'X'} isOperation />
      </View>
      <View style={styles.row}>
        <Button label={4} />
        <Button label={5} />
        <Button label={6} />
        <Button label={'÷'} isOperation />
      </View>
      <View style={styles.row}>
        <Button label={1} />
        <Button label={2} />
        <Button label={3} />
        <Button label={'+'} isOperation />
      </View>
      <View style={styles.row}>
        <Button label={'.'} />
        <Button label={0} />
        <Button label={'='} isOperation />
        <Button label={'-'} isOperation />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingVertical: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

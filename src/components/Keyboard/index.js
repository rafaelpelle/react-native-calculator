import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './Button'

export default function Keyboard({ handlePress }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button label={'C'} handlePress={handlePress} isTriple />
        <Button label={'='} handlePress={handlePress} isOperation />
      </View>
      <View style={styles.row}>
        <Button label={'7'} handlePress={handlePress} />
        <Button label={'8'} handlePress={handlePress} />
        <Button label={'9'} handlePress={handlePress} />
        <Button label={'*'} handlePress={handlePress} isOperation />
      </View>
      <View style={styles.row}>
        <Button label={'4'} handlePress={handlePress} />
        <Button label={'5'} handlePress={handlePress} />
        <Button label={'6'} handlePress={handlePress} />
        <Button label={'/'} handlePress={handlePress} isOperation />
      </View>
      <View style={styles.row}>
        <Button label={'1'} handlePress={handlePress} />
        <Button label={'2'} handlePress={handlePress} />
        <Button label={'3'} handlePress={handlePress} />
        <Button label={'+'} handlePress={handlePress} isOperation />
      </View>
      <View style={styles.row}>
        <Button label={'0'} handlePress={handlePress} isDouble />
        <Button label={'.'} handlePress={handlePress} />
        <Button label={'-'} handlePress={handlePress} isOperation />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

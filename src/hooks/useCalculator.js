import { useState } from 'react'

export default function useCalculator() {
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')

  const handlePress = (value, isOperation = false) => {
    try {
      if (value === '=') {
        setResult(eval(expression))
      } else if (value === 'C') {
        setExpression('')
        setResult('')
      } else {
        const newValue = isOperation ? ` ${value} ` : value
        if (result) {
          setExpression(newValue)
          setResult('')
        } else {
          setExpression(expression + newValue)
        }
      }
    } catch (e) {
      console.error(e)
    }
  }

  return {
    expression,
    result,
    handlePress,
  }
}

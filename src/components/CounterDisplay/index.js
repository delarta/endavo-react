import React from 'react'

export default function CounterDisplay(props) {
  console.log(props)
  return (
    <h1>{props.counter}</h1>
  )
}

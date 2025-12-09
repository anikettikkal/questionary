import React from "react"
import { useState } from "react"

function App() {

  let [value,setValue] = useState(0)

  function increaseValue(){
    setValue(value+1);
  }

  function decreseValue(){
    setValue(value-1)
  }

  function resetValue(){
    setValue(0)
  }

  return (

    <>
      <h1 className="p-4 text-3xl bg-amber-300">ANIKET</h1>

      <h2>Counter App</h2>
      <h3>Value : {value}</h3>
      <button onClick={increaseValue} className="border-4 gap-3 bg-black text-xl p-4 m-3 text-white">Increment Button</button>
      <button onClick={decreseValue} className="border-4 gap-3 bg-black text-xl p-4 m-3 text-white">Decrement Button</button>
      <button onClick={resetValue} className="border-4 gap-3 bg-black text-xl p-4 m-3 text-white">Reset Button</button>
    </>
  )
}

export default App

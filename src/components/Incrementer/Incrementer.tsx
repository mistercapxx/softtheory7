import React, { useState } from 'react'

// function Incrementer(props) {
  function Incrementer() {
    const [result,setResult] = useState(0);
    const [incrementValue, setIncrementValue] = useState(1);

  return (
    <>
   <h1>{result}</h1>
   <input
   type='number'
   aria-label='incrementBy'
   value={incrementValue}
   onChange={(e)=> setIncrementValue(parseInt(e.target.value))}
   />
   <button onClick={() => setResult(res => res + incrementValue)}>
    Increment
   </button>
        </>
  );
}

export default Incrementer
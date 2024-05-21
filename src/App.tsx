import React, { useEffect, useReducer, useState } from "react";
import ReactDOM from "react-dom";
import Incrementer from "./components/Incrementer/Incrementer";


const App = () => {


  return (

      <div className="App">
        {/* <Incrementer id={10} /> */}
        <Incrementer  />
      </div>

  );
}

export default App;
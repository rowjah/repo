import React, { Component } from "react";
import Api from "./Api";
import Birth from "./COMPONENT/Birth";
import Filter from "./Filter";

import Fun from "./Fun";
import Movie from "./Movie";



class App extends Component {
  render() {
    return (
      <div>
        roja
        <Fun/>
        <Birth/>
        <Movie funz="vikram"/>
        <Movie funz="vikram"/>
        <Movie funz="vikram"/>
        
        <Filter/>
        <Api/>

        
      </div>
    )
  }
}

export default App

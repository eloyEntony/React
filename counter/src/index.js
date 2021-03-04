import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from "./components/counter/counter"
import {Provider} from "react-redux"

import store from "./store"
const App = ()=>{
  return(
    <Provider store = {store}>
      <Counter />
    </Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))
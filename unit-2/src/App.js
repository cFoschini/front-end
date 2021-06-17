import React, {useState} from 'react'
import './App.css';
import Login from "./components/Login"


function App() {

  const [formValue, setFormValue] = useState({
    email: "",
    password: ""
  })

  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

import TextForm from './TextForm';
import { useState } from 'react';
import Alert from './Alert';
import About from './About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  
    const [mode, setMode] = useState("light")

    const toggleMode = ()=>{
      if(mode==="light"){
        setMode("dark")
        document.body.style.backgroundColor="rgb(5 39 76)"
        showAlert("Dark mode Enabled","success")
        document.title="Text Turnn -- Dark Mode"
      }
      else{
        setMode("light")
        document.body.style.backgroundColor="white"
        showAlert("Light mode Enabled","success")
        document.title="Text Turnn -- Light Mode"
      }
    }

    const [alert, setAlert] = useState(null)
    
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(()=>{
        setAlert(null)
      },1500)
    }


    


  return (
    <>
      <Router>
      <Navbar title={"HeroBiz"} search={"Search"} mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert} showAlert={showAlert}/>


      <Routes>
      <Route  path="/about" element={<About  mode={mode} toggleMode={toggleMode}/> }>



      </Route>
      
      <Route path="/" element={<TextForm mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert} />}>
        
      </Route>
      </Routes>

      
      </Router>

    </>
    
  );
}

export default App;

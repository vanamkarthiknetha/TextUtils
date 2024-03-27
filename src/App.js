import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextBar from './components/TextBar';
import React,{useState} from 'react'
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

// } from "react-router-dom";



function App() {
  const [AppMode,setAppMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
      setAlert({
        message:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null)
      }, 3000);
  }
  const toggleAppMode=()=>{
    if(AppMode==='light'){
      setAppMode('dark')
      document.body.style.backgroundColor='black'
      showAlert("Dark mode is activated","warning")
      document.title='textUtils-Darkmode'
    }
    else{
      setAppMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode is activated","warning")
      document.title='textUtils-Lightmode'

    }

    
  }

  const RedTheme=()=>{
    document.body.style.backgroundColor='#350000'
    
    showAlert("Theme is changed to red","warning")

  }
  const GreenTheme=()=>{
    document.body.style.backgroundColor='#002a02'
    
    showAlert("Theme is changed to green","warning")

  }
  const BlackTheme=()=>{
    document.body.style.backgroundColor='black'
    
    showAlert("Theme is changed to black","warning")

  }
  return (
    <>
    {/* <Router> */}
        {/* <Navbar title="textUtils" aboutText="About us"/> */}
        {/* <Navbar/> */}
        <Navbar title="textUtils" AppMode={AppMode} toggleAppMode={toggleAppMode} showAlert={showAlert} Theme={
          {RedTheme,GreenTheme,BlackTheme}} />
        <Alert alert={alert}/>
        <TextBar heading="Enter the text to convert" AppMode={AppMode} showAlert={showAlert} />
        {/* <Routes>
          <Route exact path="/about" element={  <About />}>
          
          </Route>
          <Route exact path="/" element={<TextBar heading="Enter the text to convert" AppMode={AppMode} showAlert={showAlert} />}>
    
          </Route>
        </Routes> */}





        {/* <About/> */}
        {/* </Router> */}
    </>
      
  );
}

export default App;

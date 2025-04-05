import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
// import About from './components/About'; // Removed About import
// import React, { ustate } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');  //whenever dark mode is enabled or not
  const [alert, setAlert] = useState(null); //alert message
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
    const removeBodyClasses=()=>{
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')
      document.body.classList.remove('bg-primary')
      document.body.classList.remove('bg-danger')
      document.body.classList.remove('bg-success')
      document.body.classList.remove('bg-warning')
    }


  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#172336"
      showAlert("Dark mode has been enebled", "success")
      // document.title = 'ReText -Dark mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enebled", "success")
      // document.title = 'ReText - light mode'

    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar title="ReText" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container" my-4 mode={mode}>
          <Routes>
            {/* About route removed */}
            <Route exact path='/' element={
              <TextForm showAlert={showAlert} heading="Try ReText -Word counter, Characer counter & remove extra spaces" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
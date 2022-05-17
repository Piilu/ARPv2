import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllFunc from './pages/develop_test/AllFunc';
import Login from './pages/unauthorized/Login';
import Register from './pages/unauthorized/Register';
import NavBar from './components/NavBar';
import { useState } from 'react';
import CustomAlert from './components/CustomAlert';
import Paevik from './pages/unauthorized/Paevik';
import Home from './pages/authorized/Home';
function App() {
  const [alerts, setAlerts] = useState([])  

  const closeAlert = (item) => {
    const newalerts = []
    alerts.forEach(value=>{
      if(value.id!=item.id){
        newalerts.push(value)
      }
    })
    console.log(item)
    setAlerts(newalerts)
  }
  const makeAlert =(item)=>{
    const newalerts = []
    alerts.forEach(value=>{
      newalerts.push(value)
    })
    newalerts.push(item)
    setAlerts(newalerts)

  }
  return (
    <div className="App">
      {alerts.length ? alerts.map(value=>{
        return(<CustomAlert item={value} key={value.id}  variant={value.variant} text={value.text}  closeAlert={closeAlert} />
        )
      }):null}

      <NavBar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/paevik' element={<Paevik/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/development/testing' element={<AllFunc alerts={alerts} makeAlert={makeAlert}   />} />
      </Routes>
    </div>
  );
}

export default App;

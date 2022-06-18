import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllFunc from './pages/develop_test/AllFunc';
import Login from './pages/unauthorized/Login';
import Register from './pages/unauthorized/Register';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import CustomAlert from './components/CustomAlert';
import Paevik from './pages/unauthorized/Paevik';
import Home from './pages/authorized/Home';
import axios from 'axios';
axios.defaults.withCredentials = true

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
  const [loading, setLoading] = useState(false);
  const [serverDown, setServerDown] = useState(false);
  const [username, setUsername]=useState("");
  const getUser = async()=>{
    await axios.get("http://localhost:3001/api/test/user").then(res=>{
        setUsername(res.data.username);
    }).catch(err=>{
        console.log(err)
    })
}
  const pingServer = async()=>{
    setLoading(true);
    await axios.get("http://localhost:3001/api/ping/").then(res=>{
      if(res.status == 200){
        setLoading(false);
        setServerDown(false);

      }
    }).catch(err=>{
      setServerDown(true);
    })
  }
  useEffect(()=>{
    getUser();
},[])
  useEffect(()=>{
    pingServer();
  },[]);
  if(serverDown){
    return("Server down");
  }
  if(loading){
    return("Loading");
  }
  else{
    if(username){
      return(
      <div className="App">
      {alerts.length ? alerts.map(value=>{
        return(<CustomAlert item={value} key={value.id}  variant={value.variant} text={value.text}  closeAlert={closeAlert} />
        )
      }):null}
      <NavBar username={username} mode={"loggedin"} />
      <Routes>
        <Route path='/paevik/:id' element={<Paevik/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/development/testing' element={<AllFunc alerts={alerts} makeAlert={makeAlert}   />} />
      </Routes>
    </div>
    );
    }
    else{
      return (
        <div className="App">
        {alerts.length ? alerts.map(value=>{
          return(<CustomAlert item={value} key={value.id}  variant={value.variant} text={value.text}  closeAlert={closeAlert} />
          )
        }):null}
        <NavBar  mode={"guest"} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/paevik/:id' element={<Paevik/>} />
        </Routes>
      </div>
    );
    }
    
}
}

export default App;

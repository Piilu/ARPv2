import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllFunc from './pages/develop_test/AllFunc';
import Login from './pages/unauthorized/Login';
import Register from './pages/unauthorized/Register';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/development/testing' element={<AllFunc />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Login from './components/Login';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
        < Route path='/' element={<Home/>}/>
        < Route path='/about' element={<About/>}/>
        < Route path='/users' element={<Users/>}/>
        < Route path='/users/:userId' element={<UserDetails/>}/>
        < Route path='/login' element={<Login/>} />
      </Routes>

    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/Login(form)/Login';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';
import Detail from './components/Details/Detail';


const App = () => {
  const { pathname } = useLocation();
  const [ access, setAccess ] = useState(false);
  const [ noRegistered, setNoRegistered ] = useState('');

  const navigate = useNavigate()
  
  const email = "dilinyer@gmail.com";
  const password = "Dilinyer123";
  
  const login = (loginInput) => {
    if(loginInput.email === email && loginInput.password === password) {
      setAccess(true)
      navigate("/home")
    } else {
      setNoRegistered('Email o Password incorrecto!')
      setTimeout(() => {
        setNoRegistered("");
      }, 3000);
    }
  }

  const logOut = () => {
    setAccess(false)
  }

  // Si no existe access (access === false) llevame a "/"
  useEffect(() => {
    !access && navigate("/")
  }, [access])



  return (
    <div>
      {pathname !== '/' && pathname !== '/login' && pathname !== '/about' && <Nav logOut={logOut} />}

      <Routes>
        <Route path='/' element={<Landing />} />

        <Route path='/login' element={<Login login={login} noRegistered={noRegistered}/>} />

        <Route path='/home' element={<Home />} />

        <Route path='/about' element={<About />}/>

        <Route path='/favorites' element={<Favorites />}/>

        <Route path='/detail/:id' element={<Detail />}/>

      </Routes>
    </div>
  )
}

export default App

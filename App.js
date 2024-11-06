import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/services' Component={Services}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/login' Component={Login}/>
      <Route path='/register' Component={Register}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

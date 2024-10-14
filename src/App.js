import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Infra from './components/Infra/Infra';
import User from './components/User/User';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Oldbooks from './components/Book/Oldbooks';
import Newbooks from './components/Book/Newbooks';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <>
    <center>
        <BrowserRouter>
             <ul className='link-14'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/infra'>Infra</Link></li>
                <li><Link to='/user/1'>User</Link></li>
                <li><Link to="/books/oldbooks">Oldbook</Link></li>
                <li><Link to="/books/newbooks">Newbook</Link></li>
                <li><Link to="/login">Login</Link></li>
             </ul>
             <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/infra' element={<Infra/>}></Route>
                <Route path='/user/:id' element={<User/>}></Route>
                <Route path='/books'>
                   <Route path='oldbooks' element={<Oldbooks/>}></Route>
                   <Route path='newbooks' element={<Newbooks/>}></Route>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
             </Routes>
        </BrowserRouter>
    </center>
    </>
  );
}

export default App;

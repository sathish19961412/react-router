import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Infra from './components/Infra/Infra';
import User from './components/User/User';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Oldbooks from './components/Book/Oldbooks';
import Newbooks from './components/Book/Newbooks';
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
             </Routes>
        </BrowserRouter>
    </center>
    </>
  );
}

export default App;

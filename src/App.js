import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';
function App() {
  return (
    <>
    <center>
        <BrowserRouter>
             <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
             </ul>
             <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
             </Routes>
        </BrowserRouter>
    </center>
    </>
  );
}

export default App;

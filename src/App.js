import './App.css';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Navbar from './components/Homepage/Navbar';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/menu" element={<Menu />}></Route>
            </Routes>
            
        </Router>
    </div>
  );
}

export default App;
<h1>Restaurant Website by Group 38</h1>
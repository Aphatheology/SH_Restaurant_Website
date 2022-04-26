import './App.css';
import Footer from './components/Footer/Footer';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import MainMenu from './components/MainMenu';
import Navbar from './components/Homepage/Navbar';
import AboutTheTeam from './components/AboutTheTeam';
import './components/About/AboutUs.css'


function App() {
  return (
    <div className="App">


      {/* <h1>Restaurant Website by Group 38</h1>
      <Homepage /> */}

      <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Homepage />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/menu" element={<MainMenu />}></Route>
                <Route exact path="/abouttheteam" element={<AboutTheTeam />}></Route>
            </Routes>

        </Router>
<Footer />
    </div>
  );
}

export default App;

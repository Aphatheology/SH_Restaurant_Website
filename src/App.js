import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';


function App() {
  return (
    <Routes className="App">
      <Route path='Menu' element={<Menu />}></Route>
      
    </Routes>
  );
}

export default App;

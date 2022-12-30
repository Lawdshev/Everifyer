import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Index from './pages/index';
import About from './pages/About';
import FooterOne from './Components/FooterOne';
import Navbar from './Components/Navbar/Navbar'





function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/about' element={<About/>}/> 
        </Routes>
        <FooterOne/>
      </Router>
    </>
  );
}
export default App;

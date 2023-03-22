
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/NavBar/Navbar';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
       

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services';
import Recent from './components/Recent';
import Our from './components/Our';


function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <About />
     <Services />
     <Recent />
     <Our />
    </div>
  );
}

export default App;

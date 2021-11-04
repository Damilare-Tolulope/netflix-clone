import './App.css';
import Download from './components/Homepage/Download';
import Enjoy from './components/Homepage/Enjoy';
import Faq from './components/Homepage/Faq';
import Footer from './components/Homepage/Footer';
import Hero from './components/Homepage/Hero';
import Kids from './components/Homepage/Kids';
import Watch from './components/Homepage/Watch';

function App() {
  return (
    <div className="App">

        <Hero />
        <Enjoy />
        <Download />
        <Watch />
        <Kids />
        <Faq />
        <Footer />
      
    </div>
  );
}

export default App;

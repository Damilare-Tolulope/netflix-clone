import './App.css';
import { useState, useEffect } from 'react';
// import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Download from './components/Homepage/Download';
import Enjoy from './components/Homepage/Enjoy';
import Faq from './components/Homepage/Faq';
import Footer from './components/Homepage/Footer';
import Hero from './components/Homepage/Hero';
import Kids from './components/Homepage/Kids';
import Watch from './components/Homepage/Watch';
import SignIn from './components/Sign In/SignIn'
import SignUp from './components/Sign In/SignUp'
import TVShows from './components/TVShows/TVShows';
import Movie from './components/Movie';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {

    fetch('http://localhost:5000/users')
      .then( response => response.json())
      .then(data => {
        setUsers(data)
        console.log(data)
      })
      .catch(err=> console.log(err))

    // axios.get('http://localhost:5000/users/')
    //   .then( res => {
    //     setUsers(res)
    //     console.log(res)
    //   })
    //   .catch(err=> console.log(err))
  }, [])

  return (
    <Router>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/tv_shows' component={TVShows} />
        <Route path='/movie' component={Movie} />
        <Route exact path='/'>
        <div className="App">
          {users}
          <Hero />
          <Enjoy />
          <Download />
          <Watch />
          <Kids />
          <Faq />
          <Footer />

        </div>
        </Route>
    </Router>


  );
}

export default App;

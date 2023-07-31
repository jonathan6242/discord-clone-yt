import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={(
          <>
            <Header />
            <Hero />
          </>
        )} />
        <Route exact path='/channels' element={(
          <>
            <Home />
          </>
        )} />
        <Route exact path='/channels/:id' element={(
          <>
            <Home />
          </>
        )} />
      </Routes>
    </Router>
  );
}

export default App;

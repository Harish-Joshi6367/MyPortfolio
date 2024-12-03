import './App.css';
import Header from './components/Header';
import Home from "./components/Home/Home";
import {BrowseRouter, Routes, Route} from 'react';
import About from './components/About/About';
import Projects from './components/Project/Projects';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Footer />
    </div>
  );
}

export default App;

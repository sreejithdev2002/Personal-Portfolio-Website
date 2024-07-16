import './App.css';
import About from './Components/Skills';
import Header from './Components/Header';
import Home from './Components/Home';
import MouseShadow from './MouseShadow';
import Experience from './Components/Experience';
import Education from './Components/Education';

function App() {
  return (
    <div className='App'>
    <Header/>
    <Home/>
    <About/>
    <Experience/>
    <Education/>
    <MouseShadow/>
    </div>
  );
}

export default App;

import './App.css';
import About from './Components/Skills';
import Header from './Components/Header';
import Home from './Components/Home';
import MouseShadow from './MouseShadow';

function App() {
  return (
    <div className='bg-custom-blue App'>
    <Header/>
    <Home/>
    <About/>
    <MouseShadow/>
    </div>
  );
}

export default App;

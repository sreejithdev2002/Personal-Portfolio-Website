import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import MouseShadow from './MouseShadow';

function App() {
  return (
    <div className='bg-custom-blue App'>
    <Header/>
    <Home/>
    <MouseShadow/>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './component/navbar';
import Home from './views/home';
import About from './views/home/about';
import Contact from './views/contact';
import Skills from './views/skills';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </>

  );
}

export default App;

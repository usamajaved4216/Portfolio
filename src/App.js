import './App.css';
import Navbar from './component/navbar';
import Home from './views/home';
import About from './views/home/about';
import Service from './views/service';
import Project from './views/project';
import Contact from './views/contact';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
    </>

  );
}

export default App;

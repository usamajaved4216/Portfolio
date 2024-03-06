import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './config/router';
import Home from './views/home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </>

  );
}

export default App;

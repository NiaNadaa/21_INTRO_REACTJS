import logo from './logo.svg';
import './App.css';

import Main from "./Main"
import videoclub from "./datos"
import Header from "./Header"

function App() {
  return (
    
      <>
      <Header/>
      <Main peliculas={videoclub.peliculas}/>
      </>
    
  );
}

export default App;

//Libraries

import { Routes, Route } from 'react-router-dom';

//Components

import Login from "./components/Login.jsx";
import List from ".//components/List.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";

//Styles

import './styles/App.css';



function App() {
  return (
      <>
        <Header />  
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/list" element={<List />} />
          </Routes>
        <Footer />
      </>
  );
}

export default App;

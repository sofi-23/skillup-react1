//Libraries

import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components

import Login from "./components/Login.jsx";
import List from ".//components/List.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Detail from ".//components/Detail.jsx";
import Results from './components/Results.jsx';
import Favs from './/components/Favs.jsx';

//Styles

import './styles/App.css';



function App() {

  const favMovies = localStorage.getItem('favs');

  let tempMoviesInFavs;

  if (favMovies === null) {
    tempMoviesInFavs = [];
  }else {
    tempMoviesInFavs = JSON.parse(favMovies); //convert json to array
  }

  function addOrRemoveFromFavs (e) {
    const btn = e.currentTarget; //I capture the button that was clicked
    const parent = btn.parentElement; //I capture the parent of the button
    const imgUrl = parent.querySelector('img').getAttribute('src'); //I capture the image url
    const title = parent.querySelector('h3').innerText; //I capture the title of the image
    const movieData = {
      imgUrl, title, //that is to say:  imgUrl: imgUrl, title: title
      id: btn.dataset.movieid, 
    }
    let movieIsInArray = tempMoviesInFavs.find(movie=> movie.id === movieData.id); //I filter the array to see if the movie is already in the array
    if (!movieIsInArray) {
    tempMoviesInFavs.push(movieData); //I add the movie to the array
    localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs)); //I convert the array to json and save it in localStorage
    console.log("Movie added to favs")
  }else {
    tempMoviesInFavs = tempMoviesInFavs.filter(movie=> movie.id !== movieData.id); //I remove the movie from the array
    localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs)); //I convert the array to json and save it in localStorage
    console.log("Movie removed from favs");
  }
  }

  return (
      <>
        <Header />  
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/list" element={<List addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/results" element={ <Results addOrRemoveFromFavs={addOrRemoveFromFavs} />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
        <Footer />
      </>
  );
}

export default App;

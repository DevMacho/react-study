import React from "react";

function Movie({fav_movie}) {
  return <h1>I love {fav_movie}</h1>
}

function App() {
  return <div>
  <h1>Hello!</h1>
  <Movie fav_movie='Nyaco'/>
  <Movie fav_movie='Greatest Showman'/>
  <Movie fav_movie='Mickey Mouse'/>
  <Movie fav_movie='#살아있다'/>
  <Movie fav_movie='Avengers'/>
  <Movie fav_movie='Elf'/>
  </div>;
}

export default App;

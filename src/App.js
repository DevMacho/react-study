import React from "react";

function Movie({name, time}) {
  return <div><h1>I love {name}</h1>
  <h2>runtime: {time}</h2></div>;
}

const movieILike = [
  {
    name: 'Avengers',
    runtime: '3hr'
  },
  {
    name: 'greatest showman',
    runtime: '2hr'
  }
]

function App() {
  return <div>
  {movieILike.map(movie => (
    <Movie name={movie.name} time={movie.runtime}/>
    ))}
  </div>;
}

export default App;

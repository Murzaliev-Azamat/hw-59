import React from 'react';
import './App.css';
import MovieApp from "./containers/MovieApp/MovieApp";
import JokeApp from "./containers/JojeApp/JokeApp";

function App() {
  return (
    <div className="App">
      <MovieApp/>
      <JokeApp/>
    </div>
  );
}

export default App;

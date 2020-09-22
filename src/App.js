import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MovieSearch from "./Components/MovieSearch";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <MovieSearch />
    </div>
  );
}

export default App;

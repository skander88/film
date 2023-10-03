import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
function App() {
  return (
    <div className="App">
      <h1> Movies</h1>
      <br />
      <MovieList />
    </div>
  );
}

export default App;

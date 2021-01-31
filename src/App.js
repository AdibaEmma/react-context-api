import MovieList from "./components/MovieList";
import Nav from "./components/Nav"
import AddMovie from "./components/AddMovie"
import { MovieProvider } from "./MovieContext"

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav />
      <div className="main">
      <AddMovie />
      <MovieList />
      </div>
    </div>
    </MovieProvider>
  );
}

export default App;

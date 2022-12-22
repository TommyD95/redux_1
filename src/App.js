
import "./styles.css";
import MovieList from "./components/MovieList";
import SongList from "./components/SongList";
import { useDispatch } from "react-redux";
import { reset } from "./store/actions";

 export default function App() {
  const dispatch=useDispatch();

  const handleResetClick = () => {
    dispatch(reset())
};

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MovieList />
      <hr />
      <SongList />
    </div>
  );
}



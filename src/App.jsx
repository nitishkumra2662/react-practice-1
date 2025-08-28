import "./App.css";
import UserCard from "./components/UserCard";
import Board from "./components/Board";
import Gallery from "./components/Gallery";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <div>
        <UserCard />
        <Board />
        <Gallery />
        <Weather />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import UserCard from "./components/UserCard";
import Board from "./components/Board";
import Gallery from "./components/Gallery";
import Weather from "./components/Weather";
import Information from "./components/Information";
import Congratulations from "./components/Congratulations";
import Form from "./components/Form";
import UncontrolledForm from "./components/UncontrolledForm";
import LargeForm from "./components/LargeForm";

function App() {
  return (
    <>
      <div>
        <Form />
        <UncontrolledForm />
        <Congratulations />
        <UserCard />
        <Board />
        <Gallery />
        <Weather />
        <Information />
        <LargeForm />
      </div>
    </>
  );
}

export default App;

import { Outlet } from "react-router";
import "./App.css";
import Foter from "./components/Foter";
import Headder from "./components/Headder";
import Routing from "./routing/routing";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-blue-300 text-center">
        <Headder />
        <Routing />
        <Outlet />
        <Foter />
      </div>
    </>
  );
}

export default App;

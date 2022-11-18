import logo from "./logo.svg";
import "./style.css";
import Navbar from "./components/Navbar";
// import Taskdata from "./components/task/Taskdata";
// import Task from "./components/task/Task";
import Login from "./components/login/Login";
// import Passchange from "./components/login/Passchange";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Task from "./components/task/Task";
import Drop from "./components/dropdown/Drop";
import Passchange from "./components/login/Passchange";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Drop />} />
          <Route exact path="/task" element={<Task />} />
          <Route exact path="/user" element={<Login />} />
        </Routes>
      </BrowserRouter>

      {/* <Navbar /> */}
      {/* <Taskdata /> */}
      {/* <Task /> */}
      {/* <Login /> */}
      {/* <Passchange /> */}
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import LoggedIn from "./components/LoggedIn";

// Styles
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/loggedin" element={<LoggedIn />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import AliQuiz from "./pages/AliQuiz";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/quiz" element={<Quiz></Quiz>}></Route>
          <Route path="/aliquiz" element={<AliQuiz></AliQuiz>}></Route>

        </Routes>
      </Router>
    </div>
  );
};

export default App;

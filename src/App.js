import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Day3 from "./components/Day3";
import Day5 from "./components/Day5/index";
import Day6 from "./components/Day6/index";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day5" element={<Day5 />} />
        <Route path="/day6" element={<Day6 />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="/day3">Day 3</Link>
        </li>
        <li>
          <Link to="/day5">Day 5</Link>
        </li>
        <li>
          <Link to="/day6">Day 6</Link>
        </li>
      </ul>
    </>
  );
}

export default App;

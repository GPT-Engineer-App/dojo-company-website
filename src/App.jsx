import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import WorkStandards from "./pages/WorkStandards.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/work-standards" element={<WorkStandards />} />
      </Routes>
    </Router>
  );
}

export default App;

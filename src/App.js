import logo from "./logo.svg";
import "./App.css";
import jetsData from "./data";
import JestsTable from "./components/JestsTable";
import DetailsPanel from "./components/DetailsPanel";
import { useState } from "react";

function App() {
  const [selectedJet, setSelectedJet] = useState(null);
  return (
    <div className="container d-flex mt-5">
      <div className="flex-grow-1 mr-5">
        <JestsTable jets={jetsData} onSelect={setSelectedJet} />
      </div>
      <div>
        <DetailsPanel {...{ selectedJet }} />
      </div>
    </div>
  );
}

export default App;

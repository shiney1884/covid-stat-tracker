import Cases from "./Cases";
import Deaths from "./Deaths";
import Tests from "./Tests";
import {SearchBar} from "./SearchBar";
import {CovidContext} from './CovidContext'
import { useState } from "react";

function App() {

  const [results, setResults] = useState(null)

  return (
    <div className="App">
      <SearchBar/>
      <div className="flex justify-evenly">
        <CovidContext.Provider value={results}>
          <Cases/>
          <Deaths/>
          <Tests/>
        </CovidContext.Provider>
      </div>
    </div>
  );
}

export default App;

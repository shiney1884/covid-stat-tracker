import Cases from "./Cases";
import Deaths from "./Deaths";
import Tests from "./Tests";
import {SearchBar} from "./SearchBar";
import { CovidProvider } from "./CovidContext";

function App() {
  return (
    <div className="App">
      <CovidProvider>
      <SearchBar/>
          <div className="flex justify-evenly">
                <Cases/>
                <Deaths/>
                <Tests/>
          </div>
        </CovidProvider>
    </div>
  );
}

export default App;

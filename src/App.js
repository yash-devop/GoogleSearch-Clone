import { Route, Routes } from "react-router";
import Home from './components/Home'
import SearchResult from './components/SearchResult'
import { AppContext } from "./utils/ContextApi";
function App() {
  return (
    <>
    <AppContext>
      <div className="">
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/:query/:startIndex" exact element={<SearchResult/>}/>
          </Routes>
      </div>
    </AppContext>
    </>
  );
}

export default App;

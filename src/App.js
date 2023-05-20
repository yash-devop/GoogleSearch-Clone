import { Route, Routes } from "react-router";
import Home from './components/Home'
import SearchResult from './components/SearchResult'
function App() {
  return (
    <>
      <div className="">
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/result" exact element={<SearchResult/>}/>
          </Routes>
      </div>
    </>
  );
}

export default App;

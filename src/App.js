import Menu from "./components/Menu";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import CoctailDayPage from "./pages/CoctailDay";
import Bar from "./pages/Bar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="add" Component={CoctailDayPage}></Route>
          <Route path="/coctail" Component={Bar}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

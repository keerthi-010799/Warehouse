import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WareHouseDetails from "./WareHouseDetails";
import WareHouseList from "./WareHouseList";

function App(props) {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WareHouseList />}></Route>
          <Route
            exact
            path="/WareHouseDetails"
            element={<WareHouseDetails />}
          ></Route>
          <Route
            exact
            path="/WareHouseDetails/:id"
            element={<WareHouseDetails />}
            render={(props) => <WareHouseDetails {...props} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

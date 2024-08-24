import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toolbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home";
import { Route, Routes } from "react-router-dom";
import FullNews from "./features/News/FullNews";

const App = () => {
  return (
    <>
      <Toolbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news/:id" element={<FullNews />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home";
import { Route, Routes } from "react-router-dom";
import FullNews from "./features/News/FullNews";
import NewsForm from "./features/News/NewsForm";

const App = () => {
  return (
    <>
      <Toolbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<FullNews />} />
          <Route path="/create" element={<NewsForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

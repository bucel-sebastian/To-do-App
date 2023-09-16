import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import List from "./pages/List";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list/:listId"  element={<List />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;

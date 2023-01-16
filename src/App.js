import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import SimpleFetch from "./Component/SimpleFetch/SimpleFetch";
import User from "./Component/User/User";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="react-query" element={<User />} />
      <Route path="simple-fetch" element={<SimpleFetch />} />
    </Routes>
  );
}

export default App;

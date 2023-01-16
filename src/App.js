import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import SimpleFetch from "./Component/SimpleFetch/SimpleFetch";
import User from "./Component/User/User";

const queryClint= new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClint}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="react-query" element={<User />} />
      <Route path="simple-fetch" element={<SimpleFetch />} />
    </Routes>
    <ReactQueryDevtools intialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;

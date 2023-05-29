import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import SearchPage from "./Pages/SearchPage";
function App() {
  return (
    <Layout>
      {" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

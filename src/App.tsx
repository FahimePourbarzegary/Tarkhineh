import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
function App() {
  return (
    <Layout>
      {" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;

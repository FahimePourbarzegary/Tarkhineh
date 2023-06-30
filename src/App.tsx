import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import SearchPage from "./Pages/SearchPage";
import BranchPage from "./Pages/BranchPage";
import BranchPageMenu from "./Pages/BranchPageMenu";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import Franchise from "./Pages/Franchise";
function App() {
  return (
    <Layout>
      {" "}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/branch" element={<BranchPage />} />
        <Route path="/branch-menu" element={<BranchPageMenu />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/franchise" element={<Franchise />} />
      </Routes>
    </Layout>
  );
}

export default App;

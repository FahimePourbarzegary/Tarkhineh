import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout/Layout";
import SearchPage from "./Pages/SearchPage";
import BranchPage from "./Pages/BranchPage";
import BranchPageMenu from "./Pages/BranchPageMenu";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import Franchise from "./Pages/Franchise";
import FAQPage from "./Pages/FAQPage";
import RulesPage from "./Pages/RulesPage";
import PrivacyPage from "./Pages/PrivacyPage";
import DashboardPage from "./Pages/DashboardPage";
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
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

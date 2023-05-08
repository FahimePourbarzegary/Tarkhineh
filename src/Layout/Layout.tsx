import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
type LayoutType = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutType) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

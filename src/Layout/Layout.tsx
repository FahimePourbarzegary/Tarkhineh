import React from "react";
import Footer from "../Components/Footer/Footer";

type LayoutType = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutType) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

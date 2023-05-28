import { useState, createContext } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
type IsSearchContext = {
  isSearchPopup: boolean | null;
  setIsSearchPopup: (state: boolean) => void;
};
export const IsSearchContext = createContext<IsSearchContext>({
  isSearchPopup: null,
  setIsSearchPopup: () => {
    return null;
  },
});
type LayoutType = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutType) {
  const [isSearchPopup, setIsSearchPopup] = useState(false);
  return (
    <IsSearchContext.Provider value={{ isSearchPopup, setIsSearchPopup }}>
      <Header />
      {children}
      <Footer />
    </IsSearchContext.Provider>
  );
}

export default Layout;

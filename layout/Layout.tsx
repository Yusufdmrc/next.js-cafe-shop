import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import Footer from "../Footer";
import Header from "../Header";

const MainContainer = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainContainer;

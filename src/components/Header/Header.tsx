import Navbar from "../Navbar/Navbar";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" alt="logo" />
      <Navbar />
    </header>
  );
};

export default Header;

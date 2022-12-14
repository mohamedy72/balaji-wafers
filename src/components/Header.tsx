import logo from "../assets/logo.png";
import search from "../assets/search.png";
import bag from "../assets/bag.png";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Balaji Wafers Logo" />
      </div>

      <nav className="header-nav">
        <ul className="header-nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">chips</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
        </ul>
      </nav>

      <div className="input header-search-bar">
        <img src={search} alt="Search Icon" />
        <input type="text" name="search" id="search" placeholder="search" />
        <img src={bag} alt="Bag Icon" />
      </div>
    </header>
  );
};

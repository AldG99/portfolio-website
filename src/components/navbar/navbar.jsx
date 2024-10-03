import "../../styles/navbar/navbar.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span>AG</span>
        <div className="social">
          <a href="https://github.com/Aldg99" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

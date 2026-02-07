import "./Footer.css";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import footer from "../assets/homePage/footeravif";

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="footer-cta">
          <p className="footer-cta-text">An experience thats</p>
          <span className="footer-cta-highlight">beyond imagination</span>
          <button
            className="footer-cta-button"
            onClick={() => {
              navigate("/booking");
            }}
          >
            Reserve your stay
          </button>
        </div>
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li className="footer-link">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-link">
              <Link to="/rooms">Rooms & Stay</Link>
            </li>
            <li className="footer-link">
              <Link to="/wellness">Wellness & Spa</Link>
            </li>
            <li className="footer-link">
              <Link to="/blog">Blog Articles</Link>
            </li>
            <li className="footer-link">
              <Link to="/booking">Reservation</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="site-footer-main2">
        <ul className="footer-legal-list">
          <li className="footer-link">Privacy Policy</li>
          <li className="footer-link">Refund Policy</li>
          <li className="footer-link">Contact</li>
        </ul>
        <p className="footer-copyright">© 2025 Nivara. All rights reserved.</p>
      </div>
      <p className="footerLogo">Nivara</p>
    </footer>
  );
}

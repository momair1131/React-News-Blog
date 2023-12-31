import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>
              <Link to="/React-News-Blog/">MyNews</Link>
            </h2>
            <p>Your source for the latest news</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/React-News-Blog/science">Science</Link>
              </li>
              <li>
                <Link to="/React-News-Blog/sports">Sports</Link>
              </li>
              <li>
                <Link to="/React-News-Blog/technology">Technology</Link>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Follow Me</h3>
            <ul>
              <li>
                <a href="#" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Stay updated with the latest news and updates.</p>
            <form>
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} MyNews. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

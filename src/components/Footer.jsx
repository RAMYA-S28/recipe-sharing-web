import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Recipe Sharing. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </footer>
  );
};

export default Footer;

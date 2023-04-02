import { pageLinks, social_links } from "../data.js";
import Footer_Link from "./Footer_Link";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map(function (link) {
          const { id, href, text } = link;
          return <Footer_Link id={id} href={href} text={text}></Footer_Link>;
        })}
      </ul>
      <ul className="footer-icons">
        {social_links.map(function (social_link) {
          const { icon, href } = social_link;
          return (
            <li>
              <a href={href} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;

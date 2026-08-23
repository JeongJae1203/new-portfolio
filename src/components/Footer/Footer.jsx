import { profile } from '../../data/portfolioData';
import './Footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__text">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
        <p className="footer__credit">
          Built with React &amp; SCSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;

import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile, contactInfo } from '../../data/portfolioData';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Contact.scss';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <SectionTitle
          title={contactInfo.title}
          subtitle={contactInfo.subtitle}
        />

        <div className="contact__wrapper" data-reveal>
          <p className="contact__message">{contactInfo.message}</p>

          <a href={`mailto:${profile.email}`} className="contact__email">
            <FiMail />
            <span>{profile.email}</span>
          </a>

          <div className="contact__social">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

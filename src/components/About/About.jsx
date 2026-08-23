import { aboutContent, experience, education } from '../../data/portfolioData';
import SectionTitle from '../SectionTitle/SectionTitle';
import './About.scss';

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <SectionTitle
          title={aboutContent.title}
          subtitle={aboutContent.subtitle}
        />

        <div className="about__grid">
          <div className="about__content" data-reveal>
            {aboutContent.description.map((paragraph) => (
              <p key={paragraph.slice(0, 20)} className="about__text">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about__highlights" data-reveal>
            {aboutContent.highlights.map((item) => (
              <div key={item.label} className="about__highlight-card">
                <span className="about__highlight-value">{item.value}</span>
                <span className="about__highlight-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__section" data-reveal>
          <h3 className="about__section-title">— 경력</h3>
          <div className="about__cards">
            {experience.map((item) => (
              <article key={item.company} className="about__card">
                <span className="about__card-period">{item.period}</span>
                <h4 className="about__card-name">{item.company}</h4>
                <p className="about__card-role"># {item.role}</p>
                <ul className="about__card-list">
                  {item.details.map((detail) => (
                    <li key={detail.slice(0, 24)}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="about__section" data-reveal>
          <h3 className="about__section-title">— 교육</h3>
          <div className="about__cards">
            {education.map((item) => (
              <article key={item.institution} className="about__card">
                <span className="about__card-period">{item.period}</span>
                <h4 className="about__card-name">{item.institution}</h4>
                {item.programs.map((program) => (
                  <p key={program} className="about__card-role">
                    # {program}
                  </p>
                ))}
                <ul className="about__card-list">
                  {item.details.map((detail) => (
                    <li key={detail.slice(0, 24)}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

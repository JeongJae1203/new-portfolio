import { skills } from '../../data/portfolioData';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Skills.scss';

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionTitle title="Skills" subtitle="사용 가능한 기술 스택입니다." />

        <div className="skills__grid">
          {skills.map((group, index) => (
            <div
              key={group.category}
              className="skills__card"
              data-reveal
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((skill) => (
                  <li key={skill} className="skills__item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Projects.scss';

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <SectionTitle
          title="Projects"
          subtitle="제가 작업한 주요 프로젝트입니다."
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`projects__card ${project.featured ? 'projects__card--featured' : ''}`}
              data-reveal
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="projects__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects__image"
                  loading="lazy"
                />
                <div className="projects__overlay">
                  <div className="projects__links">
                    <a
                      href={project.liveUrl}
                      className="projects__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} 라이브 보기`}
                    >
                      <FiExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="projects__link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                    >
                      <FiGithub />
                    </a>
                  </div>
                </div>
              </div>

              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                <ul className="projects__tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="projects__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

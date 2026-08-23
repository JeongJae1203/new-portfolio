import { profile } from '../../data/portfolioData';
import './Hero.scss';

function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid" />
      </div>

      <div className="hero__container container">
        <div className="hero__content" data-reveal>
          <p className="hero__greeting">Hello, I&apos;m</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">{profile.role}</h2>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => handleScrollTo('projects')}
            >
              View Projects
            </button>
            <button
              type="button"
              className="btn btn--outline"
              onClick={() => handleScrollTo('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero__avatar">
            <div className="hero__avatar-inner">
              <span className="hero__avatar-text">
                {profile.name.charAt(0)}
              </span>
            </div>
            <div className="hero__avatar-ring" />
            <div className="hero__avatar-ring hero__avatar-ring--delay" />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="hero__scroll"
        onClick={() => handleScrollTo('about')}
        aria-label="About 섹션으로 이동"
      >
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" />
      </button>
    </section>
  );
}

export default Hero;

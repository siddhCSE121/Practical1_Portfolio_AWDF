import { profile } from "../data";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hello">Hello, I am</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p className="tagline">{profile.tagline}</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          {/* Showing the first letters of the name instead of a photo.
              You can replace this with an <img> tag later. */}
          <div className="avatar">SG</div>
        </div>
      </div>
    </section>
  );
}

export default Home;

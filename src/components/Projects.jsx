import { projects } from "../data";

function Projects() {
  return (
    <section id="projects" className="section gray">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="grid">
          {projects.map((project, index) => (
            <div className="card project-card" key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.tech.map((t, i) => (
                  <span className="tag" key={i}>
                    {t}
                  </span>
                ))}
              </div>

              <a href={project.link} target="_blank" rel="noreferrer" className="link">
                View Code
              </a>
              {project.live ? (
                <a
                  href={project.live}
                  style={{ marginLeft: "10px" }}
                  target="_blank"
                  rel="noreferrer"
                  className="link"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

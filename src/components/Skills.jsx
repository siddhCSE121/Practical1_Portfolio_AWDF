import { skills } from "../data";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="grid">
          {skills.map((group, index) => (
            <div className="card" key={index}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((skill, i) => (
                  <span className="tag" key={i}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

import { education } from "../data";

function Education() {
  return (
    <section id="education" className="section gray">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="dot"></div>
              <div className="card">
                <span className="year">{item.year}</span>
                <h3>{item.course}</h3>
                <p className="college">{item.college}</p>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;

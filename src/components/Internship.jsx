import { internship } from "../data";

function Internship() {
  return (
    <section id="internship" className="section">
      <div className="container">
        <h2 className="section-title">Internship</h2>

        {internship.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.role}</h3>
            <p className="college">{item.company}</p>
            <span className="year">{item.duration}</span>

            <ul className="bullet-list">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Internship;

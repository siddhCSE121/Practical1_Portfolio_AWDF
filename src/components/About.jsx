import { about, profile } from "../data";

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-box">
          {about.map((line, index) => (
            <p key={index}>{line}</p>
          ))}

          <ul className="about-list">
            <li>
              <b>Name:</b> {profile.name}
            </li>
            <li>
              <b>Location:</b> {profile.location}
            </li>
            <li>
              <b>Email:</b> {profile.email}
            </li>
            <li>
              <b>Course:</b> B.Tech CSE (Third Year)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

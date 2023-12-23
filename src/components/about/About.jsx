import "./About.css";
import about from "../../assets/about.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about">
          <div className="about-content">
            <div className="about-box">
              <h2>ABOUT US</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomisedThere are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form, by injected humour, or
                randomised
              </p>
              <button>read more</button>
            </div>
          </div>
          <div className="about-image-box">
            <div className="about-image">
              <img src={about} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

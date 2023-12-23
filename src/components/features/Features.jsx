import "./Features.css";
import repair from "../../assets/repair.svg";
import improve from "../../assets/improve.svg";
import house from "../../assets/house.svg";

function Features() {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features">
          <div className="feature-box">
            <div className="feature-image">
              <img src={repair} alt="repair" />
            </div>
            <h5>repair</h5>
          </div>
          <div className="feature-box" id="active">
            <div className="feature-image">
              <img src={improve} alt="improve" />
            </div>
            <h5>improve</h5>
          </div>
          <div className="feature-box">
            <div className="feature-image">
              <img src={house} alt="maintain" />
            </div>
            <h5>maintain</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

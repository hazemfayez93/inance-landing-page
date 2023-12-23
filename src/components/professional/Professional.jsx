import "./Professional.css";
import professional from "../../assets/professional.png";

function Professional() {
  return (
    <section className="professional-section">
      <div className="professional-container">
        <div className="professional">
          <div className="professional-image-box">
            <div className="professional-image">
              <img src={professional} alt="professional" />
            </div>
          </div>
          <div className="professional-content">
            <div className="professional-box">
              <h2>
                WE PROVIDE PROFESSIONAL <br /> HOME SERVICES.
              </h2>
              <p>
                randomised words which don't look even slightly believable. If
                you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text. All randomised words which don't look even slightly
              </p>
              <button>read more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Professional;

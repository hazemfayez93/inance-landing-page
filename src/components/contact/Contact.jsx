import "./Contact.css";
import map from "../../assets/map.png";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>contact us</h2>
        </div>
        <div className="contact">
          <div className="contact-form">
            <form>
              <div className="form-name">
                <input placeholder="Name" />
              </div>
              <div className="form-phone">
                <input placeholder="Phone Number" />
              </div>
              <div className="form-email">
                <input placeholder="Email" />
              </div>
              <div className="form-message">
                <input placeholder="Message" />
              </div>
            </form>
            <div className="contact-button">
              <button>send</button>
            </div>
          </div>
          <div className="contact-image">
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

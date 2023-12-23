import "./Footer.css";
import location from "../../assets/location.svg";
import telephone from "../../assets/telephone.svg";
import email from "../../assets/email.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import youtube from "../../assets/youtube.svg";
import instagram from "../../assets/instagram.svg";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <h4 className="footer-heading">GET IN TOUCH</h4>
        <div className="info-box">
          <div className="info-container">
            <div className="info-items-container">
              <div className="info-items">
                <div className="info-item">
                  <a href="/">
                    <div className="item">
                      <div className="item-image">
                        <img src={location} alt="" />
                      </div>
                      <p>location</p>
                    </div>
                  </a>
                </div>
                <div className="info-item">
                  <a href="/">
                    <div className="item">
                      <div className="item-image">
                        <img src={telephone} alt="" />
                      </div>
                      <p>+02 1234567890</p>
                    </div>
                  </a>
                </div>
                <div className="info-item">
                  <a href="/">
                    <div className="item">
                      <div className="item-image">
                        <img src={email} alt="" />
                      </div>
                      <p>mail@domain.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="social-box">
        <h4 className="footer-heading">follow us</h4>
        <div className="social-container">
          <a href="/" className="social-link">
            <img src={facebook} alt="" />
          </a>
          <a href="/" className="social-link">
            <img src={twitter} alt="" />
          </a>
          <a href="/" className="social-link">
            <img src={youtube} alt="" />
          </a>
          <a href="/" className="social-link">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;

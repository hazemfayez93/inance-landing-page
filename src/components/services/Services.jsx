import { services } from "../../constants";
import "./Services.css";

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>OUR SERVICES</h2>
        </div>
        <div className="services">
          {services.map((service) => (
            <div key={service.id} className="service-box">
              <div className="service">
                <div className="service-image">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="service-content">
                  <h5>{service.title}</h5>
                  <p>{service.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="services-button">
          <button>view more</button>
        </div>
      </div>
    </section>
  );
}

export default Services;

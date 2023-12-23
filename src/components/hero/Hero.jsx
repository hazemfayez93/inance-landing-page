import "./Hero.css";
import hero from "../../assets/hero.png";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        <div className="hero">
          <div className="hero-content">
            <div className="content-box">
              <h1>
                Repair and <br /> Maintenance <br /> Services
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                harum voluptatem adipisci. Quos molestiae saepe dicta nobis
                pariatur, tempora iusto, ad possimus soluta hic praesentium
                mollitia consequatur beatae, aspernatur culpa.
              </p>
              <button>contact us</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-box">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

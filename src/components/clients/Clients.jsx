import "./Clients.css";
import client1 from "../../assets/client-1.jpg";
import client2 from "../../assets/client-2.jpg";
import quote from "../../assets/quote.svg";
import star from "../../assets/star.svg";
import leftarrow from "../../assets/left-arrow.svg";
import rightarrow from "../../assets/right-arrow.svg";

function Clients() {
  return (
    <section>
      <div className="clients-container">
        <div className="clients-heading">
          <h2>WHAT OUR CLIENTS SAY</h2>
        </div>
        <div className="carousel-wrap">
          <div className="carousel-container">
            <div className="comments-section">
              <div className="comments-container">
                <div className="comment-box">
                  <div className="comment">
                    <div className="box">
                      <div className="client-id">
                        <div className="client-image-box">
                          <img src={client1} alt="" />
                        </div>
                        <div className="client-details">
                          <div className="client-info">
                            <h6>Jorch morik</h6>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                          </div>
                          <img src={quote} alt="" />
                        </div>
                      </div>
                      <div className="client-text">
                        <p>
                          chunks as necessary, making this the first true
                          generator on the Internet. It uses a dictionary of
                          over 200 Latin words, combined with a handful of model
                          sentence structures, to generate Lorem Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-box">
                  <div className="comment">
                    <div className="box">
                      <div className="client-id">
                        <div className="client-image-box">
                          <img src={client2} alt="" />
                        </div>
                        <div className="client-details">
                          <div className="client-info">
                            <h6>Jorch morik</h6>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                          </div>
                          <img src={quote} alt="" />
                        </div>
                      </div>
                      <div className="client-text">
                        <p>
                          chunks as necessary, making this the first true
                          generator on the Internet. It uses a dictionary of
                          over 200 Latin words, combined with a handful of model
                          sentence structures, to generate Lorem Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-section">
              <button className="nav-button">
                <img src={leftarrow} alt="" />
              </button>
              <button className="nav-button">
                <img src={rightarrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;

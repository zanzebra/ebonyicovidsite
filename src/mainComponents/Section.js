import React from "react";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div className="pset">
      <div className="">
        <div className="section-container">
          <div className="section-item">
            <div className="section-item-inner">
              <div className="section-feature-block-content-wrapper">
                <div className="section-feature-icon-wrapper">
                  <div className="section-feature-icon-inner">
                    <div>
                      <img
                        alt="Businesses"
                        className="section-image-icon"
                        src="images/faq1.jpg"
                      />
                    </div>
                  </div>
                </div>

                <div className="section-feature-content-wrapper">
                  <div className="section-button-div">
                    <Link to="/faq">
                      <button className="section-button">Learn More</button>
                    </Link>
                  </div>

                  <div>
                    Here are the frequently asked questions about COVID19. Know
                    about the virus and how to keep yourself and surroundings
                    safe from it.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-item">
            <div className="section-item-inner">
              <div className="section-feature-block-content-wrapper">
                <div className="section-feature-icon-wrapper">
                  <div className="section-feature-icon-inner">
                    <div>
                      <img
                        alt="Businesses"
                        className="section-image-icon"
                        src="images/news.jpg"
                      />
                    </div>
                  </div>
                </div>
                <div className="section-feature-content-wrapper">
                  <div className="section-button-div">
                    <Link to="/news">
                      <button className="section-button">Learn More</button>
                    </Link>
                  </div>
                  <div>
                    Get the latest news on the happens of corona in the state
                    and Nigeria. Be informed be safe.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="section-item">
            <div className="section-item-inner">
              <div className="section-feature-block-content-wrapper">
                <div className="section-feature-icon-wrapper">
                  <div className="section-feature-icon-inner">
                    <div>
                      <img
                        alt="Businesses"
                        className="section-image-icon"
                        src="images/statistics.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="section-feature-content-wrapper">
                  <div className="section-button-div">
                    <Link to="/graph">
                      <button className="section-button">Learn More</button>
                    </Link>
                  </div>
                  <div>
                    Check out our graph. get the latest numbers of the
                    virusspread. keep yourself informed
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-item">
            <div className="section-item-inner">
              <div className="section-feature-block-content-wrapper">
                <div className="section-feature-icon-wrapper">
                  <div className="section-feature-icon-inner">
                    <div>
                      <img
                        alt="Businesses"
                        className="section-image-icon"
                        src="images/emergency.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="section-feature-content-wrapper">
                  <div className="section-button-div">
                    <Link to="/contact_us">
                      <button className="section-button">Learn More</button>
                    </Link>
                  </div>
                  <div>
                    Have you been feeling symptoms on the virus or have been in
                    contact with anyone who has the virus or symptoms, call
                    these hotlines. Lets be vigilant.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sponsors">
        <div className="sponsors-div">
          <img src="images/Ebonyi.jpg" alt="ebonyi logo" />
        </div>
        <div className="sponsors-div">
          <img src="images/COA.jpg" alt="coat of arms" />
        </div>
        <div className="sponsors-div">
          <img src="images/ncdc.jpg" alt="ncdc logo" />
        </div>
      </div>
    </div>
  );
}
export default Section;

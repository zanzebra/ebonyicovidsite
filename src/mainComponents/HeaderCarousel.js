import React from "react";

function HeaderCarousel() {
  return (
    <div className="top-content">
      <div className="carousel">
        <img src="images/virus.jpg" alt="covid19" />
      </div>
      <div className="heading">
        <div className="container">
          <section className="card">
            <div className="card_inner">
              <div className="card_inner__content">
                <div className="title">
                  Welcome to the Ebonyi COVID19 awareness page
                </div>
                <div className="text">
                  We are the official corona virus awareness page of the ebonyi
                  state government. Get the latest information and updates of
                  the COVID19 pandemic here. Lets work together to create a
                  safer environment for ourself.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
export default HeaderCarousel;

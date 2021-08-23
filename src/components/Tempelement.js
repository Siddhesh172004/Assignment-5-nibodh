import React from "react";
import Poorimg from "../img/Poorkid.jpg";
const Tempelement = () => {
  return (
    <>
      {/* <!-- about section  --> */}
      <div className="section6" id="section6">
        <div className="about">
          <h1 className="text-center text-capitalize fw-bold pt-5">About Us</h1>
        </div>

        <div className="container">
          <div className="bg-style">
            <div className="row">
              <div className="col-lg-6 col-md-6 padding-0">
                <img src={Poorimg} className="img-fluid" />
              </div>

              <div className="col-lg-6 col-md-6 padding-0 cus text-white">
                <h2 className="Mission fw-lighter">Our Mission</h2>
                <p className="mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br /> Doloribus consequuntur cupiditate at <br />
                  et earum quidem dolorem
                </p>
                <button className="fst-normal btn btn-success br-radius mt-2 bg-white  learnmore text-success ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tempelement;

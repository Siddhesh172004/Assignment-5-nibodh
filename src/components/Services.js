import React, { useState } from "react";
import Servicesapi from "./Servicesapi";
const Services = () => {
  // const [workdata, setworkdata] = useState(Servicesapi);
  return (
    <>
      {/* <!-- services --> */}
      <div class="section3" id="section3">
        <div class="about">
          <h1 class="text-center text-capitalize fw-bold pt-5">Services</h1>
        </div>

        <div class="container mt-3 mb-3">
          <div class="d-flex flex-row align-items-center"></div>
          <div class="row mt-1 g-4">
            {/* here is the content which we are going to loop  */}
            {Servicesapi.map((currE) => {
              const { tickicon, logo, Topic, Desc, Text1, Text2, Text3 } =
                currE; // destructuing of array

              return (
                <>
                  {/* here is the content which we are going to loop  */}

                  <div class="col-md-4">
                    <div class="card p-2">
                      <div class="d-flex p-1 px-4 align-items-center">
                        <span class="square">
                          <img src={logo} height="20" width="20" />
                        </span>
                      </div>

                      <div class="email mt-1">
                        <span>{Topic}</span>
                        <div class="dummytext mt-1">
                          <span>{Desc}</span>{" "}
                        </div>
                      </div>
                      <div class="d-flex flex row align-items-center mr-2 mt-2">
                        <div class={tickicon}>
                          {" "}
                          <i class="fa fa-check-circle"></i>{" "}
                          <span>{Text1}</span>{" "}
                        </div>
                        <div class={tickicon}>
                          {" "}
                          <i class="fa fa-check-circle"></i>{" "}
                          <span>{Text2}</span>{" "}
                        </div>
                        <div class={tickicon}>
                          {" "}
                          <i class="fa fa-check-circle"></i>{" "}
                          <span>{Text3}</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* here is the content which we are going to loop ended */}
                </>
              );
            })}
            {/* map func ended  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

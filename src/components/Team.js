import React, { useState } from "react";
import Teamapi from "./Teamapi";
const Team = () => {
  // const [Teamwork, setTeamwork] = useState(Teamapi);
  return (
    <>
      {/* <!-- team section --> */}
      <div class="section4" id="section4">
        <div class="about">
          <h1 class="text-center text-capitalize fw-bold pt-5">Teams</h1>
        </div>
        <div class="container-fluid row mt-5  teams-center">
          {/* here is the content which we are going to loop  */}
          {Teamapi.map((currE) => {
            const { Teamimg, Name, Role } = currE; // destructuing of array

            return (
              <>
                {/* here is the content which we are going to loop  */}

                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                  <div class="my-card">
                    {" "}
                    <img class="my-card-img" src={Teamimg}></img>
                    <div class="my-card-body trainer-card-body">
                      <h5>{Name}</h5>
                      <p>{Role}</p>
                      <div class="social-icons">
                        {" "}
                        <a href="#">
                          <i class="fa fa-tumblr"></i>
                        </a>{" "}
                        <a href="#">
                          <i class="fa fa-pinterest-p"></i>
                        </a>{" "}
                        <a href="#">
                          <i class="fa fa-facebook-f"></i>
                        </a>{" "}
                        <a href="#">
                          <i class="fa fa-twitter"></i>
                        </a>{" "}
                      </div>{" "}
                      <a href="#" class="my-card-btn">
                        Hire Me
                      </a>
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
    </>
  );
};

export default Team;

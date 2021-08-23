import React from 'react'
import '../../components/tempdelete/tempp.css';
const Banner = () => {
    return (
        <>
            {/* started  */}
            {/* <!-- <div className="started"></div> --> */}
<div className="Main-section d-flex align-items-center">
<div className="container Parent-section">
<div className="row">

    <div className="col-lg-6 col-md-6 first-section">
            <h3 className="banner-text">
                We Help for <strong> 25 years</strong>  to<br />
                helpless people with trust <br />
                and we're happy! 
            </h3>
<button className="btn btn-lg  voluntneer-btn mt-4">Become Volutneer</button>
    </div>

    <div className="col-lg-6 col-md-6  d-flex flex-row mt-3 justify-content-start ">

<div className="bg-icon1 text-center">
    <i className="fas fa-trophy trophy"></i>
     <h1 className="num-hai">43</h1>
     <p>AWARDS</p>
  </div>

<div className="bg-icon1 text-center">
<i className="fas fa-hands-helping trophy"></i>
     <h1 className="num-hai">3500</h1>
     <p>VOLUNTNEER</p>
  </div>

<div className="bg-icon1 text-center">
  <i className="fas fa-tasks trophy"></i>    
   <h1 className="num-hai">43</h1>
     <p>PROJECTS</p>
  </div>


</div>

</div>
</div>
</div>

{/* <!-- <div className="ended"></div> --> */}

            {/* Ended  */}
        </>
    )
}

export default Banner

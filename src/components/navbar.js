import React from 'react'
import googlelogo from '../img/google.png';
import cup from '../img/cup.jpg';
const navbar = () => {
    return (
        <>
            
      {/* <!-- navbar started   --> */}

<nav class="navbar navbar-expand-sm  navbar-dark bg-dark fixed-top">

    <a class="navbar-brand" href="#"><img class="logo" src={googlelogo}></img>  </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#section2">About Us</a>
        </li>

        <li class="nav-item active">
          <a class="nav-link " href="#section3">Services</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link " href="#section4">Teams</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link " href="#contact">Contact Us</a>
        </li>
        
      </ul>
    
    </div>
    
  </nav>
  {/* <!-- navbar ended--> */}

   
  {/* <!-- carosuel started  --> */}
        
        <div class="img-fluid img">
          <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" class="d-block w-100" alt="..."></img>
          </div>
    {/* <!-- carosuel ended  --> */}


    {/* <!-- about section  --> */}
<div class="section2" id="section2">
  <div class="about">
    <h1 class="text-center text-capitalize fw-bold pt-5">About Us</h1>
</div>

<div class="container-fluid mt-5">
<div class="row ">
  <div class="col-lg-6 col-md-6 col-12"> 
  <img src={cup} class="img-fluid"></img>
  </div>

  <div class="col-lg-6 col-md-6 col-12"> 
      <h1>Who am I?</h1>
      <hr></hr>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
      </p>
      <button class="btn bg-primary text-light">Contact Us</button>
  </div>
</div>
</div>

</div>

        </>





    )
}

export default navbar

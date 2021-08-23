import React from 'react'

const Contact = () => {
    return (
        <>
            
{/* <!-- contact form  --> */}

{/* <!-- contact form starts --> */}
<section id="contact" class="fw-bold">
  <div class="container ">
    <h1 class="text-center text-capitalize  pt-5">Contact Us</h1>  
    <div class="mx-auto w-50">
     <form action="/action_page.php">
      <div class="form-group">
        <label for="email">Your Name:</label>
        <input type="email" class="form-control" placeholder="Enter email" id="email"></input>
      </div>
  
      <div class="form-group mt-3">
        <label for="email">Email address:</label>
        <input type="email" class="form-control" placeholder="Enter email" id="email"></input>
      </div>
  
      <div class="form-group mt-3">
        <label for="pwd">Your Message:</label>
        <textarea class="form-control"></textarea>
      </div>
  
      <button type="submit" class="btn btn-primary mt-4">Submit</button>
    </form>
  </div>
    </div>
  </section>
  
  {/* <!-- contact form ends --> */}
  





        </>
    )
}

export default Contact

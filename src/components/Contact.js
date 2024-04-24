import React from 'react'
import ContactMap from './ContactMap'

function Contact() {
  return (
    <div class="container-xxl py-5 contact-us">
        <div class="container">
          <div class="text-center mx-auto title" style={{maxWidth: "500px"}}>
            <h1 class="display-6 mb-5 ">
               Contact Us
            </h1>
          </div>
             <div className='row'>
                <div className='contact-form col-lg-5 mb-5'>
   
        <form>
        <h1>Send us a Message.</h1>
         <div class="form-group">
                <label for="exampleInputPhonenumber">Phone Number</label>
                <input type="number" class="form-control" id="exampleInputPhonenumber" placeholder="Enter phone number"/> 
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/> 
            </div>
           
          
            <div class="form-group">
                <label for="exampleInputMessage">Message </label>
                <textarea type="text" class="form-control" id="exampleInputMessage"  placeholder="Write your Message..."/> 
            </div>
         
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
                </div>
                <div className='contact-form col-lg-6'>
                    <ContactMap/>
                 </div>
             </div>

   
    </div>
    </div>

  )
}

export default Contact

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function booknow  () {
  fetch ("http://localhost/unikaaa/view_contact.php")
  .then((res) => res.json())
  .then((data) => {console.log(data);});
  return (


 <form action="" method="POST">
    <div class=" container row g-5 mt-5">
  <div class="col-md-6">
    <label for="" class="form-label">First Name</label>
    <input type="text" class="form-control" id="" name="Fname" required=""></input>
  </div>
  <div class="col-md-6">
    <label for="hghj" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="" name="Lname" required=""></input>
  </div>


  
  <div class="col-md-6 ">
    <label for="" class="form-label">Email</label>
    <input type="text" class="form-control" id="" name="email" required=""></input>
  </div>
  <div class="col-md-6">
    <label for="" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="" name="Number" required=""></input>
  </div>
  <div class="col-md-6">
    <label for="" class="form-label">message</label>
    <input type="message" class="form-control" id="" name="message" required=""></input>
  </div>
   
  <div class="col-12">
    <button type="submit" class="btn btn-primary w-50"  name='submit'>send message</button>
  </div>
  </div>
</form>
  
  
  );
};





export default booknow;

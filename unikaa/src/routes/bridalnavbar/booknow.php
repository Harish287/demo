

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
   {/* <br> */}
  <div class="col-12">
    <button type="submit" class="btn btn-primary w-50"  name='submit'>send message</button>
  </div>
  </div>
</form>
  
<?php

$servername = "localhost";

$username = "root"; 

$password = ""; 

$dbname = "web"; 

$con = new mysqli($servername, $username, $password, $dbname);

if ($con->connect_error) {

    die("Connection failed: " . $con->connect_error);

}

?> 

<?php 

include "connect.php";

  if (isset($_POST['submit'])) {
    $Fname = $_POST['Fname'];
    $Lname= $_POST['Lname'];
    $email= $_POST['email'];
    $Number= $_POST['Number'];
    $message= $_POST['message'];
     $sql = "INSERT INTO `contact`(`Fname`, `Lname`,`email`,`Number`,`message`) VALUES ('$Fname','$Lname','$email','$Number','$message')";
    $result = $con->query($sql);
     if ($result == TRUE) {
     "New record created successfully.";
    }else{
      echo "Error:". $sql . "<br>". $con-> error;
    } 
    $con->close(); 

  }

?>
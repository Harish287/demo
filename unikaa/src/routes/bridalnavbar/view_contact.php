

  <html>
  <head>
  <title>naturals</title>
<!-- boo -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
<link rel="stylesheet" href="css/style.css">
<!-- js -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>
<!-- icons -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
</head>
<body>
<div class="ms-auto btn-group mt-5 p-2">
	 <a class="btn btn-p-2 text-white bg-dark" href="index.php" role="button"><i class="bi bi-arrow-left"></i>back to privious page</a>
	</div>
<div class="container mt-5">
 <div class="card bg-light" style="width: 50rem;"> 
  <div class="card-body">
<form action="" method="POST">
    <div class=" container row g-5 mt-5">
  <div class="col-md-6">
    <label for="" class="form-label">First Name</label>
    <input type="text" class="form-control" id="" name="Fname" required="">
  </div>
  <div class="col-md-6">
    <label for="" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="" name="Lname" required="">
  </div>
 
  
  <div class="col-md-6 ">
    <label for="" class="form-label">Email</label>
    <input type="email" class="form-control" id="" name="email" required >
  </div>
  <div class="col-md-6">
    <label for="" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="" name="number" pattern="[0-9]{10}" required="enter 10 degital number">
  </div>
  <div class="col-md-6">
    <label for="" class="form-label">place</label>
    <input type="text" class="form-control" id="" name="place" required="">
  </div>
  <div class="col-md-6">
    <label for="" class="form-label">message</label>
    <input type="message" class="form-control" id="" name="message" required="" >
  </div>
   <br>
  <div class="col-12">
    <button type="submit" class="btn btn-primary w-50"  name='submit'>send message</button>
  </div>
  </div>
</div>
 </div>
</div>
</form>
</body>
</html>

<?php 

error_reporting(0);
header('Access-Control-Allow-origin: http://localhost:3000/booknow');
header('Access-Control-Allow-Headers: access');
header('Content-Type: application/json; charset=UFT-8');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Authorization, X-Request-with');
include "connect.php";

  if (isset($_POST['submit'])) {

    $Fname = $_POST['Fname'];
    $Lname= $_POST['Lname'];
    $email= $_POST['email'];
    $number= $_POST['number'];
    $place=$_POST['place'];
    $message= $_POST['message'];

    $sql = "INSERT INTO `contact`(`Fname`, `Lname`,`email`,`number`,`place`,`message`) VALUES ('$Fname','$Lname','$email','$number','$place','$message')";

    $result = $con->query($sql);
    if ($result == TRUE) {
     "New record created successfully.";
    }else{

      echo "Error:". $sql . "<br>". $con-> error;

    } 

    $con->close(); 



    $query = "SELECT * FROM contact"; // Adjust the query based on your database structure

$result = $con->query($query);

$contacts = [];

while ($row = $result->fetch_assoc()) {
    $contacts[] = $row;
}

// Respond with a JSON object
header('Content-Type: application/json');
echo json_encode($contacts);

// Close the database connection
$con->close();
  }

?>


    <html>
    </html>
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
    <input type="text" class="form-control" id="" name="email" required="">
  </div>
  <div class="col-md-6">
    <label for="" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="" name="Number" required="">
  </div>
  <div class="col-md-6">
    <label for="" class="form-label">message</label>
    <input type="message" class="form-control" id="" name="message" required="">
  </div>
   <br>
  <div class="col-12">
    <button type="submit" class="btn btn-primary w-50"  name='submit'>send message</button>
  </div>
  </div>
</form>
</body>
</html>





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
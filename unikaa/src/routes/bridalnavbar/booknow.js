import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function booknow() {
  // fetch ("http://localhost/unikaaa/view_contact.php")
  // .then((res) => res.json())
  // .then((data) => {console.log(data);});

  // const [users,Getusers]=useState([]);
  // const[Username, getusername]=useState("")
  // const[Mobileno, getmobileno]=useState("")
  // const[Email,getemail]=useState("")
  // const[Password,getpassword]=useState("")

  // useEffect(()=>{
  //   fetch("http://localhost:8081/booknow")
  //   .then(res=>res.json())
  //   .then(data=>Getusers(data))
  //   .catch(err=> console.log(err))
  // },[])

  // function Signin(){
  //   let a= users.find((val) => val.Username === Username  && val.Password === Password && val.Email === Email )
  //   if(a){
  //     window.location.href="http://localhost:3000/"
  //     document.cookie = "user="+a.Username

  //   }
  //   else{
  //     alert("enter valid credentials")
  //   }
  // }
  return (
    <form action="" method="POST">
      <div class=" container row g-5 mt-5">
        <div class="col-md-6">
          <div className="m-4" style={{ width: 400 }}>
            <label for="name" className="form-label">
              Username:
            </label>
            {/* <input
        onInput={(c)=>{getusername(c.target.value)}}
         type="text" className="form-control"name=""id=""></input> */}
          </div>
          {/* <label for="" class="form-label">First Name</label>
    <input type="text" class="form-control" id="" name="Fname" required=""></input> */}
        </div>
        <div class="col-md-6">
          <label for="hghj" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            name="Lname"
            required=""
          ></input>
        </div>

        <div class="col-md-6 ">
          {/* <label for="" class="form-label">Email</label>
    <input type="text" class="form-control" id="" name="email" required=""></input> */}
          <div className="m-4" style={{ width: 400 }}>
            <label for="mail" className="form-label">
              Email:
            </label>
            {/* <input 
          onInput={(c)=>{getemail(c.target.value)}}       
        type="text" className="form-control"name=""id=""></input> */}
          </div>
        </div>
        <div class="col-md-6">
          <label for="" class="form-label">
            Phone Number
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            name="Number"
            required=""
          ></input>
        </div>
        <div class="col-md-6">
          <div className="m-4" style={{ width: 400 }}>
            <label for="pass" className="form-label">
              Password:
            </label>
            {/* <input
        onInput={(c)=>{getpassword(c.target.value)}}
         type="text" className="form-control"name=""id=""></input> */}
          </div>
        </div>

        <div class="col-12">
          {/* <button type="submit" class="btn btn-primary w-50"  name='submit'>send message</button> */}
          {/* <button onClick={Signin} className="btn btn-primary">send message</button> */}
        </div>
      </div>
    </form>
  );
}

export default booknow;

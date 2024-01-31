function booking(values) {
  let errors = {};
  const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phone_pattern = /^\d{10}$/;

  if (values.email === "") {
    errors.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email format";
  }

  if (values.Fname === "") {
    errors.Fname = "First Name should not be empty";
  }

  if (values.Lname === "") {
    errors.Lname = "Last Name should not be empty";
  }

  if (values.number === "") {
    errors.number = "Phone number should not be empty";
  } 
   else if (!phone_pattern.test(values.number)) {
    errors.number = "Invalid phonenumber format";
  }

  if (values.Place === ""){
    errors.palce= "place should not to be empty"
  }

  if (values.message === ""){
    errors.message= "message should not to be"
  }

  return errors;
}

export default booking;

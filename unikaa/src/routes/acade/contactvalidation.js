function contactvalidation(values) {
  let errors = {};
  const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const phone_pattern = /^\d{10}$/;

  if (values.email === "") {
    errors.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    errors.email = "Invalid email format";
  } else {
    errors.email = "";
  }

  if (values.fname === "") {
    errors.fname = " Name should not be empty";
  } else {
    errors.fname = "";
  }

  if (values.number === "") {
    errors.number = "Phone number should not be empty";
  } else if (!phone_pattern.test(values.number)) {
    errors.number = "Invalid phonenumber format";
  } else {
    errors.number = "";
  }

  if (values.message === "") {
    errors.message = "message should not to be";
  } else {
    errors.message = "";
  }

  if (values.course === "") {
    errors.course = "please select the course";
  } else {
    errors.course = "";
  }

  return errors;
}

export default contactvalidation;

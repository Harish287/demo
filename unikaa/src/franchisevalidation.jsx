function Franchisevalidation(values) {
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

  if (values.name === "") {
    errors.name = " Name should not be empty";
  } else {
    errors.name = "";
  }

  if (values.phone === "") {
    errors.phone = "Phone phone should not be empty";
  } else if (!phone_pattern.test(values.phone)) {
    errors.phone = "Invalid phonephone format";
  } else {
    errors.phone = "";
  }

  return errors;
}

export default Franchisevalidation;

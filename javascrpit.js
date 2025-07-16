function validateUpload(event) {
  event.preventDefault();
  const name = document.getElementById("artName").value;
  const email = document.getElementById("artistEmail").value;
  const desc = document.getElementById("artDesc").value;
  let valid = true;

  if (name.length < 5 || name.length > 50) {
    document.getElementById("artError").textContent = "Title must be between 5 and 50 characters.";
    valid = false;
  } else {
    document.getElementById("artError").textContent = "";
  }

  if (desc.length < 10) {
    alert("Description must be at least 10 characters.");
    valid = false;
  }

  if (!email.includes("@")) {
    alert("Email format invalid.");
    valid = false;
  }

  if (valid) alert("Artwork submitted!");
  return valid;
}

function validateRegister(event) {
  event.preventDefault();
  const password = document.getElementById("regPassword").value;
  const error = document.getElementById("regError");
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!regex.test(password)) {
    error.textContent = "Password must contain uppercase, lowercase, number, and be 8+ characters.";
    return false;
  } else {
    error.textContent = "";
    alert("Registration successful!");
    return true;
  }
}
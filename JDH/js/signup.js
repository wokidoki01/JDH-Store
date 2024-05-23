document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const emailPhone = document.getElementById('emailPhone').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const country = document.getElementById('country').value;

  if (!validateName(name)) {
      alert('Please enter a valid name.');
      return;
  }

  if (!validateEmailPhone(emailPhone)) {
      alert('Please enter a valid email or phone number.');
      return;
  }

  if (!validatePassword(password)) {
      alert('Password must be at least 6 characters long.');
      return;
  }

  if (!validateDob(dob)) {
      alert('Please enter a valid date of birth.');
      return;
  }

  if (!validateCountry(country)) {
      alert('Please select a country.');
      return;
  }

  // If validation passes, submit the form or perform signup
  alert('Form submitted successfully!');
});

function validateName(name) {
  return name.trim().length > 0;
}

function validateEmailPhone(emailPhone) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;
  return emailPattern.test(emailPhone) || phonePattern.test(emailPhone);
}

function validatePassword(password) {
  return password.length >= 6;
}

function validateDob(dob) {
  const dobDate = new Date(dob);
  const today = new Date();
  return dobDate < today;
}

function validateCountry(country) {
  return country.trim().length > 0;
}
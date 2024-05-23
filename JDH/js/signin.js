document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailPhone = document.getElementById('emailPhone').value;
  const password = document.getElementById('password').value;

  if (!validateEmailPhone(emailPhone)) {
      alert('Please enter a valid email or phone number.');
      return;
  }

  if (!validatePassword(password)) {
      alert('Password must be at least 6 characters long.');
      return;
  }

  // If validation passes, submit the form or perform login
  alert('Form submitted successfully!');
});

function validateEmailPhone(emailPhone) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;
  return emailPattern.test(emailPhone) || phonePattern.test(emailPhone);
}

function validatePassword(password) {
  return password.length >= 6;
}
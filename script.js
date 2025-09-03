// Project buttons
function showMessage(project) {
  alert("You clicked on " + project + " project!");
}

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you, " + name + "! Your message has been sent.");
    document.getElementById("contactForm").reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
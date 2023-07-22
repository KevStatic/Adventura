// Add JavaScript for the carousel navigation
let slideIndex = 0;

function showSlide(n) {
  const slides = document.getElementsByClassName("carousel-item");
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

// Set an interval to automatically move to the next slide every 2 seconds
setInterval(nextSlide, 2000);

// Form validation
function validateForm() {
  // Add your form validation logic here
  return true; // Return false to prevent form submission
}

// Show the initial slide
showSlide(slideIndex);


// Form validation
function validateForm() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  // Check if any field is empty
  if (fname.trim() === "" || lname.trim() === "" || phone.trim() === "" || email.trim() === "" || comment.trim() === "") {
    alert("All fields are required.");
    return false;
  }

  // Validate phone number (Example: 1-123-456-7890)
  const phoneRegex = /^\d{1,3}-\d{3}-\d{3}-\d{4}$/;
  if (!phone.match(phoneRegex)) {
    alert("Please enter a valid phone number in the format 1-123-456-7890.");
    return false;
  }

  // Validate email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address.");
    return false;
  }

  return true;
}




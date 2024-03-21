"strict";
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("The element is intersecting");
      entry.target.style.animation = entry.target.dataset.animate;
    } else {
      entry.target.style.animation = "none";
    }
  });
};

let observer = new IntersectionObserver(callback);

const animationItems = document.querySelectorAll(".animate");
animationItems.forEach((item) => {
  observer.observe(item);
});

function sendEmail() {
  Email.send({
    SecureToken: "8e4b2ae7-bfa9-417d-be33-ec974d827a1e",
    To: "kyanyui67@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br>Phone Number: " +
      document.getElementById("phone").value +
      "<br>Meseage: " +
      document.getElementById("message").value,
  }).then((message) => {
    alert("Email sent successfully!");
  });
}

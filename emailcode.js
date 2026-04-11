(function(){
  emailjs.init("vQ-OlwoaBIJ1UmYQZ"); // replace this
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_hwd804l", "template_889v16o", {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    message: this.message.value
  })
  .then(function() {
    alert("Message sent successfully!");
    document.getElementById("contact-form").reset();
  }, function(error) {
    alert("Something went wrong. Please try again.");
    console.log(error);
  });
});

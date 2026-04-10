(function(){
  emailjs.init("YOUR_PUBLIC_KEY"); // replace this
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
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

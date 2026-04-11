window.addEventListener("DOMContentLoaded", function() {

  emailjs.init("vQ-OlwoaBIJ1UmYQZ");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_hwd804l", "template_sghqrwq", {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    })
    .then(function() {
      alert("Message sent successfully!");
      form.reset();
    }, function(error) {
      alert("Something went wrong. Please try again.");
      console.log(error);
    });
  });

});

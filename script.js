function showThankYou() {
  const msg = document.getElementById("thankYouMsg");
  msg.classList.add("show");
  setTimeout(() => {
    msg.classList.remove("show");
  }, 4000);
}

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const notes = document.getElementById("notes").value;

  const message = `Hello Legends Technologies! 👋
Booking Request:
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Date: ${date}
Time: ${time}
Notes: ${notes || "N/A"}`;

  showThankYou();

  const url = `https://wa.me/254704431542?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");

  document.getElementById("bookingForm").reset();
});

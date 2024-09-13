document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const vehicle = document.getElementById("vehicle").value;
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
  
    alert(`Gracias ${name}! Tu reserva de un ${vehicle} desde el ${startDate} hasta el ${endDate} ha sido recibida. Te enviaremos la confirmación a ${email}.`);
  });
  
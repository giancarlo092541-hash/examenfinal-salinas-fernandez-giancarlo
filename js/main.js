// js/main.js
document.addEventListener('DOMContentLoaded', function(){
  // Example: prevent form submission if name or phone empty (HTML already enforces required)
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      const name = form.querySelector('#nombre').value.trim();
      const phone = form.querySelector('#telefono').value.trim();
      if(!name || !phone){
        e.preventDefault();
        alert('Por favor complete los campos obligatorios: Nombre y Teléfono.');
      }
    });
  }
});
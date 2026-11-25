// JS mínimo: solo conecta los componentes de Bootstrap (modal, toast y validación de formularios).
(function () {
  'use strict';
  var toastEl = document.getElementById('toastOk');
  var toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 4000 });

  function mostrar(texto) {
    document.getElementById('toastTexto').textContent = texto;
    toast.show();
  }

  function manejar(form, alExito) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
      alExito();
      form.reset();
      form.classList.remove('was-validated');
    });
  }

  manejar(document.getElementById('formContacto'), function () {
    mostrar('¡Gracias! Tu mensaje fue enviado. Te responderemos pronto.');
  });

  manejar(document.getElementById('formCita'), function () {
    var m = bootstrap.Modal.getInstance(document.getElementById('modalCita'));
    if (m) { m.hide(); }
    mostrar('¡Cita registrada! Te confirmaremos por WhatsApp.');
  });
})();

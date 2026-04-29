/* ===========================================
   EcoMarket - Form Validation JavaScript
   HTML5 + CSS3 + Bootstrap 5 + Vanilla JS
   =========================================== */

/* ===========================================
   Contact Form Validation
   =========================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    nombre: {
      element: document.getElementById('contact-nombre'),
      error: document.getElementById('error-nombre'),
      validate: (value) => {
        if (!value.trim()) return 'El nombre es requerido';
        if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
        return '';
      }
    },
    email: {
      element: document.getElementById('contact-email'),
      error: document.getElementById('error-email'),
      validate: (value) => {
        if (!value.trim()) return 'El email es requerido';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Ingrese un email valido';
        return '';
      }
    },
    asunto: {
      element: document.getElementById('contact-asunto'),
      error: document.getElementById('error-asunto'),
      validate: (value) => {
        if (!value.trim()) return 'El asunto es requerido';
        if (value.length < 3) return 'El asunto debe tener al menos 3 caracteres';
        return '';
      }
    },
    mensaje: {
      element: document.getElementById('contact-mensaje'),
      error: document.getElementById('error-mensaje'),
      charCount: document.getElementById('char-count'),
      validate: (value) => {
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        if (value.length > 500) return 'El mensaje no puede exceder 500 caracteres';
        return '';
      }
    }
  };

  const touched = {};

  // Add blur event listeners
  Object.keys(fields).forEach(fieldName => {
    const field = fields[fieldName];
    if (field.element) {
      field.element.addEventListener('blur', function() {
        touched[fieldName] = true;
        validateField(fieldName);
      });

      field.element.addEventListener('input', function() {
        if (touched[fieldName]) {
          validateField(fieldName);
        }
        // Character count for mensaje
        if (fieldName === 'mensaje' && field.charCount) {
          field.charCount.textContent = `${this.value.length}/500`;
        }
      });
    }
  });

  function validateField(fieldName) {
    const field = fields[fieldName];
    if (!field.element) return true;

    const value = field.element.value;
    const errorMsg = field.validate(value);

    if (errorMsg) {
      field.element.classList.add('is-invalid');
      field.element.classList.remove('is-valid');
      if (field.error) {
        field.error.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${errorMsg}`;
        field.error.classList.add('show');
      }
      return false;
    } else {
      field.element.classList.remove('is-invalid');
      field.element.classList.add('is-valid');
      if (field.error) {
        field.error.classList.remove('show');
      }
      return true;
    }
  }

  // Form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Mark all as touched
    Object.keys(fields).forEach(fieldName => {
      touched[fieldName] = true;
    });

    // Validate all fields
    let isValid = true;
    Object.keys(fields).forEach(fieldName => {
      if (!validateField(fieldName)) {
        isValid = false;
      }
    });

    if (!isValid) return;

    // Show loading state
    const submitBtn = document.getElementById('contact-submit');
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Enviando...';

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success
    submitBtn.innerHTML = originalContent;
    submitBtn.disabled = false;

    const formContainer = document.getElementById('contact-form-container');
    const successMessage = document.getElementById('contact-success');

    if (formContainer && successMessage) {
      formContainer.style.display = 'none';
      successMessage.classList.add('show');
    }
  });
}

/* ===========================================
   Reset Contact Form
   =========================================== */
function resetContactForm() {
  const form = document.getElementById('contact-form');
  const formContainer = document.getElementById('contact-form-container');
  const successMessage = document.getElementById('contact-success');

  if (form) {
    form.reset();
    // Remove validation classes
    form.querySelectorAll('.form-control').forEach(el => {
      el.classList.remove('is-valid', 'is-invalid');
    });
    // Hide errors
    form.querySelectorAll('.error-message').forEach(el => {
      el.classList.remove('show');
    });
    // Reset char count
    const charCount = document.getElementById('char-count');
    if (charCount) charCount.textContent = '0/500';
  }

  if (formContainer) formContainer.style.display = 'block';
  if (successMessage) successMessage.classList.remove('show');
}

/* ===========================================
   Libro de Reclamaciones Form Validation
   =========================================== */
function initLibroForm() {
  const form = document.getElementById('libro-form');
  if (!form) return;

  const fields = {
    nombre: {
      element: document.getElementById('libro-nombre'),
      error: document.getElementById('libro-error-nombre'),
      validate: (value) => {
        if (!value.trim()) return 'El nombre es requerido';
        if (value.length < 2) return 'El nombre debe tener al menos 2 caracteres';
        return '';
      }
    },
    email: {
      element: document.getElementById('libro-email'),
      error: document.getElementById('libro-error-email'),
      validate: (value) => {
        if (!value.trim()) return 'El email es requerido';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Ingrese un email valido';
        return '';
      }
    },
    mensaje: {
      element: document.getElementById('libro-mensaje'),
      error: document.getElementById('libro-error-mensaje'),
      validate: (value) => {
        if (!value.trim()) return 'El mensaje es requerido';
        if (value.length < 10) return 'El mensaje debe tener al menos 10 caracteres';
        return '';
      }
    }
  };

  const touched = {};

  // Add blur event listeners
  Object.keys(fields).forEach(fieldName => {
    const field = fields[fieldName];
    if (field.element) {
      field.element.addEventListener('blur', function() {
        touched[fieldName] = true;
        validateLibroField(fieldName);
      });

      field.element.addEventListener('input', function() {
        if (touched[fieldName]) {
          validateLibroField(fieldName);
        }
      });
    }
  });

  function validateLibroField(fieldName) {
    const field = fields[fieldName];
    if (!field.element) return true;

    const value = field.element.value;
    const errorMsg = field.validate(value);

    if (errorMsg) {
      field.element.classList.add('is-invalid');
      field.element.classList.remove('is-valid');
      if (field.error) {
        field.error.innerHTML = `<i class="bi bi-exclamation-circle"></i> ${errorMsg}`;
        field.error.classList.add('show');
      }
      return false;
    } else {
      field.element.classList.remove('is-invalid');
      field.element.classList.add('is-valid');
      if (field.error) {
        field.error.classList.remove('show');
      }
      return true;
    }
  }

  // Form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Mark all as touched
    Object.keys(fields).forEach(fieldName => {
      touched[fieldName] = true;
    });

    // Validate all fields
    let isValid = true;
    Object.keys(fields).forEach(fieldName => {
      if (!validateLibroField(fieldName)) {
        isValid = false;
      }
    });

    if (!isValid) return;

    // Show loading state
    const submitBtn = document.getElementById('libro-submit');
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Registrando...';

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success
    submitBtn.innerHTML = originalContent;
    submitBtn.disabled = false;

    const formContainer = document.getElementById('libro-form-container');
    const successMessage = document.getElementById('libro-success');

    if (formContainer && successMessage) {
      formContainer.style.display = 'none';
      successMessage.classList.add('show');
    }
  });
}

/* ===========================================
   Reset Libro Form
   =========================================== */
function resetLibroForm() {
  const form = document.getElementById('libro-form');
  const formContainer = document.getElementById('libro-form-container');
  const successMessage = document.getElementById('libro-success');

  if (form) {
    form.reset();
    // Remove validation classes
    form.querySelectorAll('input, textarea').forEach(el => {
      el.classList.remove('is-valid', 'is-invalid');
    });
    // Hide errors
    form.querySelectorAll('.error-text').forEach(el => {
      el.classList.remove('show');
    });
  }

  if (formContainer) formContainer.style.display = 'block';
  if (successMessage) successMessage.classList.remove('show');
}

/* ===========================================
   Initialize on DOM Ready
   =========================================== */
document.addEventListener('DOMContentLoaded', function() {
  initContactForm();
  initLibroForm();
});

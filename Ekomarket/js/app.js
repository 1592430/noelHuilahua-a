/* ===========================================
   EcoMarket - Main Application JavaScript
   HTML5 + CSS3 + Bootstrap 5 + Vanilla JS
   =========================================== */

/* ===========================================
   Products Data
   =========================================== */
const categories = [
  { id: "todos", label: "Todos", icon: "bi-grid" },
  { id: "frutas", label: "Frutas", icon: "bi-apple" },
  { id: "verduras", label: "Verduras", icon: "bi-flower1" },
  { id: "granos", label: "Granos", icon: "bi-egg" },
  { id: "legumbres", label: "Legumbres", icon: "bi-heart" },
];

const products = [
  // FRUTAS (6 productos)
  {
    id: 1,
    name: "Manzanas Organicas",
    price: 8.50,
    rating: 5,
    category: "frutas",
    description: "Manzanas cultivadas sin pesticidas ni quimicos. Crujientes, jugosas y perfectas para consumir frescas o en tus recetas favoritas. Cosechadas en huertos certificados organicos.",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Aguacates Frescos",
    price: 12.00,
    rating: 4,
    category: "frutas",
    description: "Aguacates Hass de pulpa cremosa y sabor intenso. Perfectos para guacamole, ensaladas o tostadas. Madurados naturalmente para garantizar su textura perfecta.",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Naranjas de Huerto",
    price: 6.00,
    rating: 4,
    category: "frutas",
    description: "Naranjas dulces y jugosas cultivadas en huertos tradicionales. Ideales para jugos frescos o consumir directamente. Ricas en vitamina C y antioxidantes naturales.",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Fresas Selectas",
    price: 10.00,
    rating: 5,
    category: "frutas",
    description: "Fresas rojas y aromaticas seleccionadas a mano. Perfectas para postres, batidos o comerlas solas. Cultivadas con tecnicas sostenibles que preservan su dulzura natural.",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Platanos Organicos",
    price: 4.50,
    rating: 5,
    category: "frutas",
    description: "Platanos de isla cultivados organicamente. Dulces, nutritivos y llenos de potasio. Perfectos para el desayuno, batidos o snacks saludables.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Mangos Premium",
    price: 9.00,
    rating: 4,
    category: "frutas",
    description: "Mangos tropicales de pulpa suave y aromatica. Cosechados en su punto optimo de madurez para garantizar el mejor sabor y textura.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop",
  },

  // VERDURAS (6 productos)
  {
    id: 7,
    name: "Zanahorias Premium",
    price: 5.00,
    rating: 5,
    category: "verduras",
    description: "Zanahorias frescas y crujientes cultivadas en tierras fertiles. Ricas en betacaroteno y perfectas para ensaladas, jugos o cocinar.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Tomates Cherry",
    price: 7.50,
    rating: 4,
    category: "verduras",
    description: "Tomates cherry dulces y jugosos. Ideales para ensaladas, pastas o como snack saludable. Cultivados con amor y sin quimicos.",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Espinacas Frescas",
    price: 4.50,
    rating: 5,
    category: "verduras",
    description: "Espinacas tiernas y nutritivas cosechadas diariamente. Ricas en hierro y vitaminas, perfectas para ensaladas, smoothies o salteados.",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Brocoli Organico",
    price: 5.50,
    rating: 5,
    category: "verduras",
    description: "Brocoli fresco y verde cultivado sin pesticidas. Super alimento rico en nutrientes, ideal para vapor, salteados o cremas.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Lechuga Hidroponica",
    price: 3.50,
    rating: 4,
    category: "verduras",
    description: "Lechuga cultivada hidroponicamente, libre de tierra y pesticidas. Hojas crujientes y frescas perfectas para tus ensaladas.",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Pimientos Coloridos",
    price: 6.00,
    rating: 5,
    category: "verduras",
    description: "Pimientos rojos, amarillos y verdes frescos y crujientes. Perfectos para ensaladas, rellenos o salteados con todo su sabor natural.",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop",
  },

  // GRANOS (4 productos)
  {
    id: 13,
    name: "Quinua Premium",
    price: 15.00,
    rating: 5,
    category: "granos",
    description: "Quinua peruana de alta calidad, el superalimento andino. Rica en proteinas completas, fibra y minerales. Versatil para cualquier receta.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop",
  },
  {
    id: 14,
    name: "Arroz Integral",
    price: 7.00,
    rating: 4,
    category: "granos",
    description: "Arroz integral nutritivo y de grano largo. Conserva todos sus nutrientes naturales. Ideal para una alimentacion saludable y balanceada.",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=300&fit=crop",
  },
  {
    id: 15,
    name: "Avena Organica",
    price: 8.50,
    rating: 5,
    category: "granos",
    description: "Avena organica en hojuelas perfecta para desayunos nutritivos. Rica en fibra soluble que ayuda a mantener niveles saludables de colesterol.",
    image: "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?w=400&h=300&fit=crop",
  },
  {
    id: 16,
    name: "Cebada Perlada",
    price: 6.00,
    rating: 4,
    category: "granos",
    description: "Cebada perlada de grano entero, ideal para sopas, guisos y ensaladas. Fuente natural de fibra y nutrientes esenciales.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop",
  },

  // LEGUMBRES (4 productos)
  {
    id: 17,
    name: "Lentejas Organicas",
    price: 9.00,
    rating: 5,
    category: "legumbres",
    description: "Lentejas organicas ricas en proteina vegetal y hierro. Coccion rapida y sabor suave, perfectas para guisos, sopas y ensaladas.",
    image: "https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=400&h=300&fit=crop",
  },
  {
    id: 18,
    name: "Frijoles Negros",
    price: 6.50,
    rating: 5,
    category: "legumbres",
    description: "Frijoles negros de primera calidad. Versatiles y nutritivos, ideales para tacos, sopas, ensaladas o como acompanamiento proteico.",
    image: "https://images.unsplash.com/photo-1551462147-37885acc36f1?w=400&h=300&fit=crop",
  },
  {
    id: 19,
    name: "Garbanzos Premium",
    price: 7.50,
    rating: 4,
    category: "legumbres",
    description: "Garbanzos de grano grande y textura cremosa. Perfectos para hummus, guisos, ensaladas o cualquier receta mediterranea.",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&h=300&fit=crop",
  },
  {
    id: 20,
    name: "Pallares Secos",
    price: 8.00,
    rating: 5,
    category: "legumbres",
    description: "Pallares peruanos de textura mantecosa y sabor delicado. Tradicionales en la cocina peruana, ideales para guisos y potajes caseros.",
    image: "https://images.unsplash.com/photo-1506807803488-8eafc15316c7?w=400&h=300&fit=crop",
  },
];

/* ===========================================
   Cart State
   =========================================== */
let cart = [];
let addedProductId = null;

/* ===========================================
   DOM Ready
   =========================================== */
document.addEventListener('DOMContentLoaded', function() {
  // Initialize cart from localStorage
  const savedCart = localStorage.getItem('ecomarket_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }

  // Initialize page-specific functionality
  initializeStore();
  initializeSearch();
  initializeCart();
});

/* ===========================================
   Store Functions (index.html)
   =========================================== */
function initializeStore() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;

  // Render initial products
  renderProducts('todos');

  // Setup filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter products
      const category = this.dataset.category;
      renderProducts(category);
    });
  });
}

function renderProducts(category) {
  const productsGrid = document.getElementById('products-grid');
  const noResults = document.getElementById('no-results');
  const searchQuery = document.getElementById('search-input')?.value?.toLowerCase() || '';

  if (!productsGrid) return;

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'todos' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  // Show/hide no results message
  if (noResults) {
    if (filteredProducts.length === 0) {
      noResults.classList.add('show');
      productsGrid.innerHTML = '';
    } else {
      noResults.classList.remove('show');
    }
  }

  if (filteredProducts.length === 0) return;

  // Get category label
  const getCategoryLabel = (catId) => {
    const cat = categories.find(c => c.id === catId);
    return cat ? cat.label : catId;
  };

  // Generate HTML
  productsGrid.innerHTML = filteredProducts.map(product => `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3 product-col">
      <div class="product-card">
        <div class="product-image-wrapper">
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <span class="product-badge">${getCategoryLabel(product.category)}</span>
        </div>
        <div class="product-body">
          <h5 class="product-name">${product.name}</h5>
          <div class="product-price">
            <span class="product-price-currency">S/</span>
            ${product.price.toFixed(2)}
          </div>
          <div class="product-rating">
            ${generateStars(product.rating)}
          </div>
          <button class="btn-view" onclick="openProductModal(${product.id})">
            <i class="bi bi-eye"></i> Ver producto
          </button>
          <button class="btn-add ${addedProductId === product.id ? 'added' : ''}" 
                  onclick="addToCart(${product.id})"
                  id="btn-add-${product.id}">
            <i class="bi ${addedProductId === product.id ? 'bi-check-lg' : 'bi-cart-plus'}"></i>
            ${addedProductId === product.id ? 'Agregado' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function generateStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="bi ${i <= rating ? 'bi-star-fill' : 'bi-star'}"></i>`;
  }
  return stars;
}

/* ===========================================
   Product Modal
   =========================================== */
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const getCategoryLabel = (catId) => {
    const cat = categories.find(c => c.id === catId);
    return cat ? cat.label : catId;
  };

  // Create modal HTML
  const modalHTML = `
    <div class="modal-overlay show" id="product-modal" onclick="closeModalOnOverlay(event)">
      <div class="modal-content-custom">
        <button class="modal-close" onclick="closeProductModal()">
          <i class="bi bi-x-lg"></i>
        </button>
        <div class="modal-body-custom">
          <div class="modal-image-section">
            <img src="${product.image}" alt="${product.name}" class="modal-image">
            <span class="modal-badge">${getCategoryLabel(product.category)}</span>
          </div>
          <div class="modal-details">
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-rating">
              ${generateStars(product.rating)}
              <span>(${product.rating} de 5)</span>
            </div>
            <div class="modal-price">
              <span class="modal-price-currency">S/</span>
              ${product.price.toFixed(2)}
            </div>
            <p class="modal-description">${product.description}</p>
            <div class="modal-features">
              <div class="modal-feature">
                <i class="bi bi-check-circle-fill"></i>
                100% Organico
              </div>
              <div class="modal-feature">
                <i class="bi bi-truck"></i>
                Envio rapido
              </div>
              <div class="modal-feature">
                <i class="bi bi-shield-check"></i>
                Calidad garantizada
              </div>
            </div>
            <div class="modal-actions">
              <button class="modal-btn-add ${addedProductId === product.id ? 'added' : ''}" 
                      onclick="addToCartFromModal(${product.id})"
                      id="modal-btn-add">
                <i class="bi ${addedProductId === product.id ? 'bi-check-lg' : 'bi-cart-plus'}"></i>
                ${addedProductId === product.id ? 'Agregado al carrito' : 'Agregar al carrito'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Add modal to body
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) {
    modal.remove();
    document.body.style.overflow = '';
  }
}

function closeModalOnOverlay(event) {
  if (event.target.classList.contains('modal-overlay')) {
    closeProductModal();
  }
}

function addToCartFromModal(productId) {
  addToCart(productId);
  
  // Update modal button
  const modalBtn = document.getElementById('modal-btn-add');
  if (modalBtn) {
    modalBtn.classList.add('added');
    modalBtn.innerHTML = '<i class="bi bi-check-lg"></i> Agregado al carrito';
  }
}

/* ===========================================
   Search Functions
   =========================================== */
function initializeSearch() {
  const searchInput = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');

  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    const activeFilter = document.querySelector('.filter-btn.active');
    const category = activeFilter ? activeFilter.dataset.category : 'todos';
    renderProducts(category);

    // Show/hide clear button
    if (clearBtn) {
      if (this.value.length > 0) {
        clearBtn.classList.add('show');
      } else {
        clearBtn.classList.remove('show');
      }
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      searchInput.value = '';
      this.classList.remove('show');
      const activeFilter = document.querySelector('.filter-btn.active');
      const category = activeFilter ? activeFilter.dataset.category : 'todos';
      renderProducts(category);
    });
  }
}

/* ===========================================
   Cart Functions
   =========================================== */
function initializeCart() {
  updateCartUI();

  // Cart toggle
  const cartBtn = document.getElementById('cart-btn');
  const cartDropdown = document.getElementById('cart-dropdown');
  const cartClose = document.getElementById('cart-close');

  if (cartBtn && cartDropdown) {
    cartBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      cartDropdown.classList.toggle('show');
    });

    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
      if (!cartDropdown.contains(e.target) && !cartBtn.contains(e.target)) {
        cartDropdown.classList.remove('show');
      }
    });
  }

  if (cartClose) {
    cartClose.addEventListener('click', function() {
      cartDropdown.classList.remove('show');
    });
  }
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Check if already in cart
  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  // Save to localStorage
  localStorage.setItem('ecomarket_cart', JSON.stringify(cart));

  // Visual feedback
  addedProductId = productId;
  updateCartUI();
  updateAddButton(productId);

  // Pulse animation on badge
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.classList.add('pulse');
    setTimeout(() => badge.classList.remove('pulse'), 300);
  }

  // Reset added state after 2 seconds
  setTimeout(() => {
    addedProductId = null;
    updateAddButton(productId, true);
  }, 2000);
}

function updateAddButton(productId, reset = false) {
  const btn = document.getElementById(`btn-add-${productId}`);
  if (btn) {
    if (reset) {
      btn.classList.remove('added');
      btn.innerHTML = '<i class="bi bi-cart-plus"></i> Agregar al carrito';
    } else {
      btn.classList.add('added');
      btn.innerHTML = '<i class="bi bi-check-lg"></i> Agregado';
    }
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('ecomarket_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      localStorage.setItem('ecomarket_cart', JSON.stringify(cart));
      updateCartUI();
    }
  }
}

function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartBadge = document.getElementById('cart-badge');
  const cartItems = document.getElementById('cart-items');
  const cartTotalAmount = document.getElementById('cart-total-amount');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Update badge
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
  if (cartBadge) {
    cartBadge.textContent = totalItems;
  }

  // Update total
  if (cartTotalAmount) {
    cartTotalAmount.textContent = `S/ ${totalAmount.toFixed(2)}`;
  }

  // Update items list
  if (cartItems) {
    if (cart.length === 0) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <i class="bi bi-cart-x"></i>
          <p>Tu carrito esta vacio</p>
        </div>
      `;
    } else {
      cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">S/ ${(item.price * item.quantity).toFixed(2)}</div>
          </div>
          <div class="cart-item-controls">
            <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, -1)">
              <i class="bi bi-dash"></i>
            </button>
            <span class="cart-qty">${item.quantity}</span>
            <button class="cart-qty-btn" onclick="updateQuantity(${item.id}, 1)">
              <i class="bi bi-plus"></i>
            </button>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      `).join('');
    }
  }
}

/* ===========================================
   Close modal with Escape key
   =========================================== */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeProductModal();
  }
});

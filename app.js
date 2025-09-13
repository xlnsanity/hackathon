document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById('login-form');
  const loginContainer = document.getElementById('login-container');
  const chooseContainer = document.getElementById('choose-container');
  const homeFamilies = document.getElementById('home-families');
  const homeFarmers = document.getElementById('home-farmers');
  
  // Family elements
  const familiesHomeContent = document.getElementById('families-home-content');
  const checkoutSection = document.getElementById('checkout-section');
  const profileSection = document.getElementById('profile-section');

  // Family navigation
  const homeNav = document.getElementById('home-nav');
  const cartNav = document.getElementById('cart-nav');
  const profileNav = document.getElementById('profile-nav');
  const checkoutBackBtn = document.getElementById('checkout-back-btn');
  const profileBackBtn = document.getElementById('profile-back-btn');

  // Farmer elements
  const farmerHomeContent = document.getElementById('farmer-home-content');
  const farmerInventoryContent = document.getElementById('farmer-inventory-content');
  const farmerOrdersContent = document.getElementById('farmer-orders-content');
  const farmerAnalyticsContent = document.getElementById('farmer-analytics-content');
  const farmerProfileContent = document.getElementById('farmer-profile-content');

  // Farmer navigation
  const farmerHomeNav = document.getElementById('farmer-home-nav');
  const farmerInventoryNav = document.getElementById('farmer-inventory-nav');
  const farmerOrdersNav = document.getElementById('farmer-orders-nav');
  const farmerAnalyticsNav = document.getElementById('farmer-analytics-nav');
  const farmerProfileNav = document.getElementById('farmer-profile-nav');

  // Farmer back buttons
  const inventoryBackBtn = document.getElementById('inventory-back-btn');
  const ordersBackBtn = document.getElementById('orders-back-btn');
  const analyticsBackBtn = document.getElementById('analytics-back-btn');
  const farmerProfileBackBtn = document.getElementById('farmer-profile-back-btn');

  // Current user type
  let currentUserType = null;

  // Login form submission
  loginForm.onsubmit = function (e) {
    e.preventDefault();
    loginContainer.style.display = "none";
    chooseContainer.style.display = "flex";
  };

  // User type selection
  window.chooseUser = function(role) {
    currentUserType = role;
    chooseContainer.style.display = "none";
    
    if (role === 'family') {
      homeFamilies.style.display = "block";
      homeFarmers.style.display = "none";
      window.scrollTo(0, 0);
      showFamilyHome();
    } else if (role === 'farmer') {
      homeFarmers.style.display = "block";
      homeFamilies.style.display = "none";
      window.scrollTo(0, 0);
      showFarmerHome();
    }
  };

  // FAMILY FUNCTIONS
  function showFamilyHome() {
    familiesHomeContent.style.display = "block";
    checkoutSection.style.display = "none";
    profileSection.style.display = "none";
    clearFamilyActiveNav();
    homeNav.classList.add('active');
  }

  function showFamilyCheckout() {
    familiesHomeContent.style.display = "none";
    checkoutSection.style.display = "block";
    profileSection.style.display = "none";
    clearFamilyActiveNav();
    cartNav.classList.add('active');
  }

  function showFamilyProfile() {
    familiesHomeContent.style.display = "none";
    checkoutSection.style.display = "none";
    profileSection.style.display = "block";
    clearFamilyActiveNav();
    profileNav.classList.add('active');
  }

  function clearFamilyActiveNav() {
    if (homeNav) homeNav.classList.remove('active');
    if (cartNav) cartNav.classList.remove('active');
    if (profileNav) profileNav.classList.remove('active');
  }

  // FARMER FUNCTIONS
  function showFarmerHome() {
    hideAllFarmerSections();
    farmerHomeContent.style.display = "block";
    clearFarmerActiveNav();
    farmerHomeNav.classList.add('active');
  }

  function showFarmerInventory() {
    hideAllFarmerSections();
    farmerInventoryContent.style.display = "block";
    clearFarmerActiveNav();
    farmerInventoryNav.classList.add('active');
  }

  function showFarmerOrders() {
    hideAllFarmerSections();
    farmerOrdersContent.style.display = "block";
    clearFarmerActiveNav();
    farmerOrdersNav.classList.add('active');
  }

  function showFarmerAnalytics() {
    hideAllFarmerSections();
    farmerAnalyticsContent.style.display = "block";
    clearFarmerActiveNav();
    farmerAnalyticsNav.classList.add('active');
  }

  function showFarmerProfile() {
    hideAllFarmerSections();
    farmerProfileContent.style.display = "block";
    clearFarmerActiveNav();
    farmerProfileNav.classList.add('active');
  }

  function hideAllFarmerSections() {
    farmerHomeContent.style.display = "none";
    farmerInventoryContent.style.display = "none";
    farmerOrdersContent.style.display = "none";
    farmerAnalyticsContent.style.display = "none";
    farmerProfileContent.style.display = "none";
  }

  function clearFarmerActiveNav() {
    farmerHomeNav.classList.remove('active');
    farmerInventoryNav.classList.remove('active');
    farmerOrdersNav.classList.remove('active');
    farmerAnalyticsNav.classList.remove('active');
    farmerProfileNav.classList.remove('active');
  }

  // FAMILY EVENT LISTENERS
  if (homeNav) {
    homeNav.onclick = function(e) {
      e.preventDefault();
      showFamilyHome();
    };
  }

  if (cartNav) {
    cartNav.onclick = function(e) {
      e.preventDefault();
      showFamilyCheckout();
    };
  }

  if (profileNav) {
    profileNav.onclick = function(e) {
      e.preventDefault();
      showFamilyProfile();
    };
  }

  if (checkoutBackBtn) {
    checkoutBackBtn.onclick = function(e) {
      e.preventDefault();
      showFamilyHome();
    };
  }

  if (profileBackBtn) {
    profileBackBtn.onclick = function(e) {
      e.preventDefault();
      showFamilyHome();
    };
  }

  // FARMER EVENT LISTENERS
  if (farmerHomeNav) {
    farmerHomeNav.onclick = function(e) {
      e.preventDefault();
      showFarmerHome();
    };
  }

  if (farmerInventoryNav) {
    farmerInventoryNav.onclick = function(e) {
      e.preventDefault();
      showFarmerInventory();
    };
  }

  if (farmerOrdersNav) {
    farmerOrdersNav.onclick = function(e) {
      e.preventDefault();
      showFarmerOrders();
    };
  }

  if (farmerAnalyticsNav) {
    farmerAnalyticsNav.onclick = function(e) {
      e.preventDefault();
      showFarmerAnalytics();
    };
  }

  if (farmerProfileNav) {
    farmerProfileNav.onclick = function(e) {
      e.preventDefault();
      showFarmerProfile();
    };
  }

  // Farmer back button event listeners
  if (inventoryBackBtn) {
    inventoryBackBtn.onclick = function(e) {
      e.preventDefault();
      showFarmerHome();
    };
  }

  if (ordersBackBtn) {
    ordersBackBtn.onclick = function(e) {
      e.preventDefault();
      showFarmerHome();
    };
  }

  if (analyticsBackBtn) {
    analyticsBackBtn.onclick = function(e) {
      e.preventDefault();
      showFarmerHome();
    };
  }

  if (farmerProfileBackBtn) {
    farmerProfileBackBtn.onclick = function(e) {
      e.preventDefault();
      showFarmerHome();
    };
  }

  // FARMER SPECIFIC FUNCTIONS (Global functions for onclick handlers)

  // Product management
  window.editProduct = function(productId) {
    alert(`Editing product: ${productId}\nThis would open a product edit form.`);
    console.log(`Edit product: ${productId}`);
  };

  window.updateStock = function(productId) {
    const newStock = prompt(`Enter new stock quantity for ${productId}:`);
    if (newStock !== null && newStock !== '') {
      alert(`Stock updated for ${productId}: ${newStock} units`);
      console.log(`Stock updated: ${productId} - ${newStock}`);
    }
  };

  window.addNewProduct = function() {
    alert('Opening Add New Product form...\nThis would open a modal or new page to add products.');
    console.log('Add new product clicked');
  };

  // Order management
  window.viewOrder = function(orderId) {
    alert(`Viewing order details for: ${orderId}\nThis would show full order information.`);
    console.log(`View order: ${orderId}`);
  };

  window.acceptOrder = function(orderId) {
    if (confirm(`Accept order ${orderId}?`)) {
      alert(`Order ${orderId} has been accepted!`);
      console.log(`Order accepted: ${orderId}`);
      // Update UI to show accepted status
    }
  };

  window.rejectOrder = function(orderId) {
    const reason = prompt(`Why are you declining order ${orderId}?`);
    if (reason !== null) {
      alert(`Order ${orderId} has been declined.\nReason: ${reason}`);
      console.log(`Order rejected: ${orderId} - ${reason}`);
    }
  };

  window.filterOrders = function(status) {
    // Update active filter button
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    alert(`Filtering orders by: ${status}`);
    console.log(`Filter orders: ${status}`);
  };

  // Inventory management
  window.bulkUpdate = function() {
    alert('Opening bulk inventory update...\nThis would allow updating multiple products at once.');
    console.log('Bulk update clicked');
  };

  window.updateInventory = function() {
    showFarmerInventory();
  };

  // Analytics
  window.viewAnalytics = function() {
    showFarmerAnalytics();
  };

  window.setPeriod = function(period) {
    // Update active period button
    const periodBtns = document.querySelectorAll('.period-btn');
    periodBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    alert(`Analytics period set to: ${period}`);
    console.log(`Analytics period: ${period}`);
  };

  // Quick actions
  window.manageOrders = function() {
    showFarmerOrders();
  };

  // Form submissions
  const familyProfileForm = document.querySelector('#profile-section form');
  if (familyProfileForm) {
    familyProfileForm.onsubmit = function(e) {
      e.preventDefault();
      alert("Family profile changes saved!");
    };
  }

  const farmerProfileForm = document.querySelector('.farmer-profile-form');
  if (farmerProfileForm) {
    farmerProfileForm.onsubmit = function(e) {
      e.preventDefault();
      alert("Farmer profile changes saved!");
    };
  }

  // Add click handlers for product cards to add items to cart (family side)
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('product-add')) {
      e.stopPropagation();
      const productCard = e.target.closest('.product-card');
      const productTitle = productCard.querySelector('.product-title').textContent;
      alert(`${productTitle} added to cart!`);
      console.log(`Added to cart: ${productTitle}`);
    }
  });

  // Add hover effects and interactive features
  document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('product-card') || 
        e.target.classList.contains('groceries-card') || 
        e.target.classList.contains('order-card')) {
      e.target.style.cursor = 'pointer';
    }
  });

  // Initialize with some sample data logging
  console.log('Farms to Families app initialized');
  console.log('Available user types: Family, Farmer');
});

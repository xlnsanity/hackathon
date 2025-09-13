document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById('login-form');
  const loginContainer = document.getElementById('login-container');
  const chooseContainer = document.getElementById('choose-container');
  const homeFamilies = document.getElementById('home-families');
  const familiesHomeContent = document.getElementById('families-home-content');
  const checkoutSection = document.getElementById('checkout-section');
  const profileSection = document.getElementById('profile-section');

  const homeNav = document.getElementById('home-nav');
  const cartNav = document.getElementById('cart-nav');
  const profileNav = document.getElementById('profile-nav');
  const checkoutBackBtn = document.getElementById('checkout-back-btn');
  const profileBackBtn = document.getElementById('profile-back-btn');

  loginForm.onsubmit = function (e) {
    e.preventDefault();
    loginContainer.style.display = "none";
    chooseContainer.style.display = "flex";
  };

  window.chooseUser = function(role) {
    chooseContainer.style.display = "none";
    if (role === 'family') {
      homeFamilies.style.display = "block";
      window.scrollTo(0, 0);
      showHome();
    }
  };

  function showHome() {
    familiesHomeContent.style.display = "block";
    checkoutSection.style.display = "none";
    profileSection.style.display = "none";

    clearActiveNav();
    homeNav.classList.add('active');
  }

  function showCheckout() {
    familiesHomeContent.style.display = "none";
    checkoutSection.style.display = "block";
    profileSection.style.display = "none";

    clearActiveNav();
    cartNav.classList.add('active');
  }

  function showProfile() {
    familiesHomeContent.style.display = "none";
    checkoutSection.style.display = "none";
    profileSection.style.display = "block";

    clearActiveNav();
    profileNav.classList.add('active');
  }

  function clearActiveNav() {
    homeNav.classList.remove('active');
    cartNav.classList.remove('active');
    profileNav.classList.remove('active');
  }

  homeNav.onclick = function(e) {
    e.preventDefault();
    showHome();
  };

  cartNav.onclick = function(e) {
    e.preventDefault();
    showCheckout();
  };

  profileNav.onclick = function(e) {
    e.preventDefault();
    showProfile();
  };

  checkoutBackBtn.onclick = function(e) {
    e.preventDefault();
    showHome();
  };

  profileBackBtn.onclick = function(e) {
    e.preventDefault();
    showHome();
  };

  // Demo form save alert
  const profileForm = profileSection.querySelector('form');
  profileForm.onsubmit = function(e) {
    e.preventDefault();
    alert("Profile changes saved!");
  }
});

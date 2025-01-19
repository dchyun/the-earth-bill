<link href="./components/top-nav/top-nav.css" rel="stylesheet">
<div class="w-100 sticky-top header-wrapper">
  <div class="row header bg-navy text-white m-0 py-3 px-4">
    <div class="col-10 col-md-12 col-lg-9 d-flex align-items-center justify-content-between">
      <div class="header__icon">
        <a href="https://earthbill.org">
          <picture>
            <source srcset="../../assets/logo-transparent.png" media="(min-width: 576px)">
            <img src="../../assets/logo-transparent.png" alt=""/>
          </picture>
          <span class="sr-only">The Earth Bill</span>
        </a>
      </div>
      <a class="header__nav-item d-md-flex d-none link-no-underline" href="./index.php">home</a>
      <a class="header__nav-item d-md-flex d-none link-no-underline" href="./learn.php">get informed</a>
      <a class="header__nav-item d-md-flex d-none link-no-underline" href="./network.php">join the network</a>
      <a class="header__nav-item d-md-flex d-none link-no-underline" href="./resources.php">resources</a>
      <a class="header__nav-item d-md-flex d-none link-no-underline" href="./events.php">Actions</a>
    </div>
    <div class="col-2 d-flex align-items-center justify-content-end d-md-none d-block">
      <button class="btn btn-hamburger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-bars fa-2x"></i>
      </button>
    </div>
  </div>
  <div class="hamburger-menu flex-column align-items-start ml-auto p-4" aria-labelledby="dropdownMenuButton">
    <a class="menu-item mb-4 link-white link-no-underline" href="./index.php">Home</a>
    <a class="menu-item mb-4 link-white link-no-underline" href="./learn.php">Get Informed</a>
    <a class="menu-item mb-4 link-white link-no-underline" href="./network.php">Join the Network</a>
    <a class="menu-item mb-4 link-white link-no-underline" href="./resources.php">Resources</a>
    <a class="menu-item mb-4 link-white link-no-underline" href="./events.php">Actions</a>
  </div>
</div>
<script src="./components/top-nav/top-nav.js"></script>
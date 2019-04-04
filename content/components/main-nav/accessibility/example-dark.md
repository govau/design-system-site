<nav class="au-main-nav au-main-nav--dark" aria-label="main">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div id="main-nav-default--dark" class="au-main-nav__content">
          <button
            aria-controls="main-nav-default"
            class="au-main-nav__toggle au-main-nav__toggle--open js-focus-me"
            onClick="return AU.mainNav.Toggle( this )">
            Menu
          </button>
          <div class="au-main-nav__menu">
            <div class="au-main-nav__menu-inner">
              <div class="au-main-nav__focus-trap-top"></div>
              <button
                aria-controls="main-nav-default"
                class="au-main-nav__toggle au-main-nav__toggle--close js-focus-me"
                onClick="return AU.mainNav.Toggle( this )">
                Close
              </button>
              <ul class="au-link-list">
                <li><a class="js-focus-me" href="#">About</a></li>
                <li><a class="js-focus-me" href="#">Get started</a></li>
                <li class="active"><a class="js-focus-me" href="#" aria-current="page">Components</a></li>
                <li><a class="js-focus-me" href="#">Templates</a></li>
                <li><a class="js-focus-me" href="#">Community</a></li>
                <li><a class="js-focus-me" href="#">Support</a></li>
              </ul>
              <div class="au-main-nav__focus-trap-bottom"></div>
            </div>
          </div>
          <div
            class="au-main-nav__overlay"
            aria-controls="main-nav-default"
            onClick="return AU.mainNav.Toggle( this )">
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

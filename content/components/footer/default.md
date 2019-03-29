---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <footer class="au-footer au-body">
        Dark:   <footer class="au-footer au-footer--dark au-body au-body--dark">
      -->


      <footer class="au-footer au-body" role="contentinfo">
        <div class="container">
          <nav class="au-footer__navigation row" aria-label="footer navigation">
            <div class="col-md-3 col-sm-6">
              <h3 class="au-display-lg">Section</h3>
              <ul class="au-link-list">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6">
              <h3 class="au-display-lg">Section</h3>
              <ul class="au-link-list">
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
              </ul>
            </div>
          </nav>
          <div class="row">
            <div class="col-sm-12">
              <div class="au-footer__end">
                <p>Footer text</p>
                <img class="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/157x80.png" alt="Brand image">
                <p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/design-system-components/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
              </div>
            </div>
          </div>
        </div>
      </footer>

  - React: |
      /*
        Light:  <AUfooter>
        Dark:   <AUfooter dark>
      */

      import AUfooter, { AUfooterNav, AUfooterEnd } from '@gov.au/footer';

      <div className="au-grid au-body">
        <AUfooter>
          <div className="container">
            <AUfooterNav>
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <h3 className="au-display-lg">Section</h3>
                  <ul className="au-link-list">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                  </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                  <h3 className="au-display-lg">Section</h3>
                  <ul className="au-link-list">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                  </ul>
                </div>
              </div>
            </AUfooterNav>
            <div className="row">
              <div className="col-sm-12">
                <AUfooterEnd>
                  <p>Footer text</p>
                  <img className="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/157x80.png" alt="Brand image" />
                  <p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/design-system-components/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
                </AUfooterEnd>
              </div>
            </div>
          </div>
        </AUfooter>
      </div>
---
## Default

The footer at the bottom of a page. Usually contains copyright information and links to other sections of the site.

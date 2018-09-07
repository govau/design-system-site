---
layout: component/code-demo
example: examples/example-default
exampleFullwidth: true
headline: Default
code:
  - HTML: |
      <!--
        Light:  <footer class="au-footer">
        Dark:   <footer class="au-footer au-footer--dark">
      -->

      <div class="au-grid au-body">
        <footer class="au-footer" role="contentinfo">
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
            <section class="au-footer__end row">
              <div class="col-sm-12">
                <p>Footer text</p>
                <img class="au-responsive-media-img" src="http://placehold.it/157x80" alt="Brand image">
                <p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/uikit/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
              </div>
            </section>
          </footer>
          </div>
      </div>

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
            <AUfooterEnd>
              <div className="row">
                <div className="col-sm-12">
                  <p>Footer text</p>
                  <img className="au-responsive-media-img" src="http://placehold.it/157x80" alt="Brand image" />
                  <p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/uikit/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
                </div>
              </div>
            </AUfooterEnd>
          </div>
        </AUfooter>
      </div>
---

The footer at the bottom of a page. Usually contains copyright information and links to other sections of the site.

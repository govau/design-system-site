---
layout: component/code-demo
example: examples/example-default
headline: Default
code:
  - HTML: |
      <div class="au-body">
        <footer class="au-footer" role="contentinfo">
          <nav class="au-footer__navigation">
            <p><a href="#>Link</a></p>
          </nav>

          <section class="au-footer__end">
            <p>Some copyright information</p>
          </section>
        </footer>
      </div>
  - React: |
      import AUfooter, { AUfooterNav, AUfooterEnd } from '@gov.au/footer';

      <AUfooter>
        <AUfooterNav>
          <a href="#">Navigation item</a>
        </AUfooterNav>
        <AUfooterEnd>
          Some copyright information
        </AUfooterEnd>
      </AUfooter>
---

The footer at the bottom of a page. Usually contains copyright information and links to other sections of the site.

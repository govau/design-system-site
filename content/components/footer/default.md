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
      import AUfooter, { AUfooterNav, AUfooterEnd } from './footer';

      <AUfooter>
        <AUfooterNav>
          <a href="#">Navigation item</a>
        </AUfooterNav>
        <AUfooterEnd>
          Some copyright information
        </AUfooterEnd>
      </AUfooter>
---

A singular method of expanding and collapsing a peice of content with a title. These are best used for transcripts of videos.

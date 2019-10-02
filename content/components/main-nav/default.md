---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
height: 300
code:
  - HTML: |
      <!--
        Light:  <nav class="au-main-nav">
        Dark:   <nav class="au-main-nav au-main-nav--dark">

        Note: Main nav requires feature detection to see if a user has javascript.
              Please add a `no-js` class on html and replace it with `js` if enabled
              https://www.paulirish.com/2009/avoiding-the-fouc-v3/
      -->

      <nav class="au-main-nav" aria-label="main">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div id="main-nav-default" class="au-main-nav__content">
                <button
                  aria-controls="main-nav-default"
                  aria-expanded="false"
                  class="au-main-nav__toggle au-main-nav__toggle--open"
                  onClick="return AU.mainNav.Toggle( this )">
                  Menu
                </button>
                <div class="au-main-nav__menu">
                  <div class="au-main-nav__menu-inner">
                    <div class="au-main-nav__focus-trap-top"></div>
                    <button
                      aria-controls="main-nav-default"
                      class="au-main-nav__toggle au-main-nav__toggle--close"
                      onClick="return AU.mainNav.Toggle( this )">
                      Close
                    </button>
                    <ul class="au-link-list">
                      <li><a href="#">About</a></li>
                      <li><a href="#">Get started</a></li>
                      <li class="active"><a href="#" aria-current="page">Components</a></li>
                      <li><a href="#">Templates</a></li>
                      <li><a href="#">Community</a></li>
                      <li><a href="#">Support</a></li>
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
  - React: |
      /*
        Light:  <AUmainNav>
        Dark:   <AUmainNav dark>

        Note: Main nav requires feature detection to see if a user has javascript.
              Please add a `no-js` class on html and replace it with `js` if enabled
              https://www.paulirish.com/2009/avoiding-the-fouc-v3/
      */

      import AUmainNav, { AUmainNavContent } from '@gov.au/main-nav';

      <AUmainNav dark alt>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <AUmainNavContent items={[
                {
                  link: 'about',
                  text: 'About',
                },
                {
                  link: 'get-started',
                  text: 'Get started',
                },
                {
                  link: 'components',
                  text: 'Components',
                  active: 'true'
                },
                {
                  link: 'templates',
                  text: 'Templates',
                },
                {
                  link: 'community',
                  text: 'Community',
                },
                {
                  link: 'support',
                  text: 'Support',
                }
              ]} />
            </div>
          </div>
        </div>
      </AUmainNav>
---
## Default

The main navigation component is intended to be used as the primary means of navigation around the website. It typically accommodates the top level of the information architecture.

Most sites will require some form of navigation to help users find the information they’re looking for. While a horizontal navigation bar is just one option for navigation design, it is one of the most visible and familiar ways of helping users navigate a site.

The main navigation component is designed to work closely with the [header](/components/header/) component and collapses down to a conventional open/close menu button on smaller devices.

**Note:** Because the main navigation component is a horizontal list, it doesn’t accommodate a large amount of items. If you need more space, consider another navigation component such as the [side nav](/components/side-nav/).

### Tips

- Avoid using hover to expand dropdown lists. Hover is difficult for some users and won’t work on touch screens.

- Model your navigation according to the tasks and information your users most frequently need to access.

- Use descriptive, recognisable link labels. Don’t label links with jargon or unfamiliar terms.

- Present links in priority order: Higher-demand links should appear farther to the left, and lower-demand links should appear farther to the right.

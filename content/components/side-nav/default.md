---
layout: component/code-demo
example: examples/example-default
headline: Default
exampleFullwidth: true
code:
  - HTML: |
      <!--
        Light:  <aside class="au-side-nav">
        Dark:   <aside class="au-side-nav au-side-nav--dark">

        Note: Side nav requires feature detection to see if a user has javascript.
              Please add a `no-js` class on html and replace it with `js` if enabled
              https://www.paulirish.com/2009/avoiding-the-fouc-v3/
      -->
      <aside class="au-side-nav au-accordion" aria-label="side navigation">
        <a 
          href="#nav-default" class="au-side-nav__toggle au-accordion__title au-accordion--closed" 
          aria-controls="nav-default"
          aria-expanded="false" 
          aria-selected="false" 
          role="tab" 
          onclick="return AU.accordion.Toggle( this )"
        >
          In this section
        </a>
        <div id="nav-default" class="au-side-nav__content au-accordion--closed au-accordion__body">
          <h2 class="au-sidenav__title">
            <a href="#">Lodging your tax return</a>
          </h2>
          <ul class="au-link-list">
            <li><a href="#">Do you need to lodge a tax return?</a></li>
            <li><a href="#">Lodge online</a>
              <ul class="au-link-list">
                <li><a href="#">Pre-filling your online tax return</a></li>
              </ul>
            </li>
            <li><a href="#">What's new for individuals</a></li>
            <li><a href="#">Why you may receive a tax bill</a></li>
            <li><a href="#">In detail</a>
              <ul class="au-link-list">
                <li><a href="#">Record keeping</a>
                  <ul class="au-link-list">
                    <li class="active"><a href="#">Keeping your tax records</a></li>
                    <li><a href="#">Incorrect amounts</a></li>
                  </ul>
                </li>
                <li><a href="#">Tax receipt</a></li>
                <li><a href="#">Pre-fill availability</a></li>
              </ul>
            </li>
            </ul>
        </div>
      </aside>
  - React: |
      /*
        Light:  <AUsideNav>
        Dark:   <AUsideNav dark>

        Note: Main nav requires feature detection to see if a user has javascript.
              Please add a `no-js` class on html and replace it with `js` if enabled
              https://www.paulirish.com/2009/avoiding-the-fouc-v3/
      */
      <AUsideNav
        dark
        alt
        linkComponent={ Link }
        accordionHeader="In this section"
        menuHeaderLink="#"
        menuHeader="Lodging your tax return"
        items={[
          {
            link: 'one',
            text: 'Change to route one',
            children: [
              {
                link: 'two',
                text: 'Change to route two',
              },
              {
                link: 'three',
                text: 'Change to route three',
              },
            ],
          },
          {
            link: 'four',
            text: 'Change to route four',
          },
        ]}
      />
---

The side navigation allows users users to find other pages which share a similar topic or section. By default it supports three levels of nesting along with an accompanying heading.

On mobile and smaller viewports, the side navigation uses functionality from the accordion component to collapse down to an expandable element.


### Tips

- Only expand active subsections to help emphasise which section the user is in and to reduce visual complexity.

- Keep the navigation link text short. They can be shorter versions of pages titles.

- If the side navigation is too long, users may miss items at the bottom. If there are too many levels, users may miss items that require too many clicks. Conduct usability testing to find the right balance between breadth and depth.

- Consider [Web Content Accessibility Guidelines 2.1 Success Criterion 3.2.3 Consistent Navigation](https://www.w3.org/TR/WCAG21/#consistent-navigation).

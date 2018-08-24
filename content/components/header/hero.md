---
layout: component/code-demo
example: examples/example-hero
exampleFullwidth: true
headline: Hero
code:
  - HTML: |
      <!--
        Light:  <header class="au-header au-header--hero" role="banner">
        Dark:   <header class="au-header au-header--hero au-header--dark" role="banner">
      -->

      <header class="au-grid au-header au-header--hero au-header--dark" role="banner">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="au-header__brand">
                <img class="au-header__brand-image" alt="Insert alternate text here" src="http://placehold.it/256x80">
                <div class="au-header__text">
                  <h1 class="au-header__heading">Site title</h1>
                  <div class="au-header__subline">
                    Service description that could be a little longer
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="col-md-3">Extras</div> -->
          </div>
        </div>
      </header>
  - React: |
      /*
        Light:  <AUheader hero>
        Dark:   <AUheader hero dark>
      */

      import AUheader, { AUheaderBrand } from '@gov.au/header';

      <AUheader hero>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <AUheaderBrand
                title="Page title" 
                subline="Service sub-title that could be a little longer"
                link="#"
                brandImage="http://placehold.it/256x80"
                brandImageAlt="Insert alternate text here"
              />
            </div>
          </div>
        </div>
      </AUheader>
---

A ‘hero’ version of the header. This version has larger spacing for more visual prominence. Examples of use might be a home page, or promotional page.

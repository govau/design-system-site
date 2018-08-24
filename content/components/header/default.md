---
layout: component/code-demo
example: examples/example-default
exampleFullwidth: true
headline: Default
code:
  - HTML: |
      <!--
        Light:  <header class="au-header" role="banner">
        Dark:   <header class="au-header au-header--dark" role="banner">
      -->

      <header class="au-grid au-header" role="banner">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-9">
              <a class="au-header__brand" href="#">
                <img class="au-header__brand-image" alt="Insert alternate text here" src="http://placehold.it/256x80">
                <div class="au-header__text">
                  <h1 class="au-header__heading">Site title</h1>
                  <div class="au-header__subline">
                    Service description that could be a little longer
                  </div>
                </div>
              </a>
            </div>
            <!-- <div class="col-md-3">Extras</div> -->
          </div>
        </div>
      </header>
  - React: |
      /*
        Light:  <AUheader>
        Dark:   <AUheader dark>
      */

      import AUheader, { AUheaderBrand } from '@gov.au/header';

      <AUheader>
        <div className="container">
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

The header at the top of the page. Usually contains a Commonwealth Coat of Arms, branding and navigation.

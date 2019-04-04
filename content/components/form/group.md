---
layout: component/code-demo
iframe: examples/example-group
code:
  - HTML: |
        <!--
            invalid:  <div class="au-label au-form-group--invalid">
        -->

        <div class="au-form-group">
            <label class="au-label" for="name">First Name</label>
            <input type="text" class="au-text-input au-text-input--block" id="name"/>
        </div>
        <div class="au-form-group au-form-group--invalid">
            <label class="au-label" for="surname">Surname</label>
            <input type="surname" class="au-text-input au-text-input--block au-text-input--invalid" id="surname" />
        </div>


  - React: |
        /*
            status:  <AUformGroup status="invalid" />
        */
        import { AUlabel, AUformGroup } from '@gov.au/form';
        import { AUtextInput } from '@gov.au/text-inputs';

        <AUformGroup>
            <AUlabel text="First Name" htmlFor="firstname" />
            <AUtextInput type="email" id="firstname"/>
        </AUformGroup>
        <AUformGroup>
            <AUlabel text="Surname" htmlFor="surname" />
            <AUtextInput type="surname" id="surname"/>
        </AUformGroup>
---
## Form groups

Used to group form controls and provide structure and consistent spacing within a form.

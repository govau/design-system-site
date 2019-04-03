---
layout: component/code-demo
iframe: examples/example-group
iframeFullwidth: true
code:
  - HTML: |
        <!--
            invalid:  <div class="au-label au-form-group--invalid">
        -->
        <div class="au-form-group">
            <label class="au-label" for="text-input-form-group-2">Username</label>
            <input type="text" class="au-text-input" id="text-input-form-group-2" name="text-input-form-group-2" />
        </div>

  - React: |
        /*
            status:  <AUformGroup status="invalid" />
        */
        import { AUlabel, AUformGroup } from '@gov.au/form';

        <AUformGroup>
            <AUlabel text="Username" htmlFor="fg-username" />
            <AUtextInput type="email" id="fg-username"/>
        </AUformGroup>
---
## Form Groups

Used to group form controls with a form. These also add consistent spacing between controls in a form.


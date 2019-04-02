---
layout: section
---

## React Usage

```jsx
import { AUform, AUfieldset, AUlegend } from '@gov.au/form';
import { AUcheckbox } from '@gov.au/control-input';

<AUform>
    <AUfieldset>
        <AUlegend>
            <h1>Which devices do you use?</h1>
            <span className="au-hint-text">You may select more than one</span>
        </AUlegend>
        <AUcheckbox label="Phone" name="checkbox-ex-err" id="cb-phone-err" block checked/>
        <AUcheckbox label="Tablet" name="checkbox-ex-err" id="cb-tablet-err" block/>
        <AUcheckbox label="Laptop" name="checkbox-ex-err" id="cb-laptop-err" block checked/>
    </AUfieldset>
</AUform>
```

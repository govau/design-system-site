---
layout: section
---

## React Usage

```jsx
import AUTODO from '@gov.au/TODO';

<AUcard className="au-body">
    <AUcardImage src="http://placehold.it/1200x500" />
    <AUcardInner>
            <span>Image caption or description</span>
        <AUcardFooter>
            <a href="#">Call to action</a>
        </AUcardFooter>
    </AUcardInner>
</AUcard>

//Entire card clickable and single anchor:
<AUcard class="au-body">
    <AUcardImage src="http://placehold.it/1200x500" />
    <AUcardInner>
            <h3 className="au-card__title"><AUcardLink link="#" text="Some link" /></h3>
    </AUcardInner>
</AUcard>
```

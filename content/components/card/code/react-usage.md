---
layout: section
---

## React Usage

```jsx
import AUcard, { AUcardInner, AUcardImage, AUcardDivider, AUcardLink, AUcardBody, AUcardFooter } from '@gov.au/card';

<AUcard className="au-body">
    <AUcardImage src="https://designsystem.gov.au/assets/img/placeholder/600X260.png"  alt/>
    <AUcardInner>
            <span>Image caption or description</span>
        <AUcardFooter>
            <a href="#">Call to action</a>
        </AUcardFooter>
    </AUcardInner>
</AUcard>

//Entire card clickable and single anchor:
<AUcard class="au-body">
    <AUcardImage src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt />
    <AUcardInner>
            <h3 className="au-card__title"><AUcardLink link="#" text="Some link" /></h3>
    </AUcardInner>
</AUcard>
```

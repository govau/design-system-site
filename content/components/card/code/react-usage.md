---
layout: section
---

## React Usage

```jsx
import AUcard, { AUcardInner, AUcardDivider, AUcardLink, AUcardHeader, AUcardTitle, AUcardFooter } from '@gov.au/card';

<AUcard className="au-body">
    <img className="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png"  alt=""/>
    <AUcardInner>
            <span>Image caption or description</span>
        <AUcardFooter>
            <a href="#">Call to action</a>
        </AUcardFooter>
    </AUcardInner>
</AUcard>

//Entire card clickable and single anchor:
<AUcard class="au-body">
    <img className="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/600X260.png" alt="" />
    <AUcardInner>
    <AUcardTitle level="2">
        <AUcardLink link="#" text="Some link" />
    </AUcardTitle>
    </AUcardInner>
</AUcard>
```

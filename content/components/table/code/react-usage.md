---
layout: section
---

## React Usage

```jsx
import { AUtable } from '@gov.au/table';

<AUtable 
    caption="Population of Australian states and territories, December 2015"
    headers={[
        {
            text: "Location"
        },
        {
            text: "Population"
        }
    ]}
    rows={[
        [
            {
                text: "New South Wales"
            },
            {
                text: "7,670,700"
            }
        ],
        [
            {
                text: "Victoria"
            },
            {
                text: "5,996,400"
            }
        ],
        [
            {
                text: "Queensland"
            },
            {
                text: "4,808,8000"
            }
        ],
        [
            {
                text: "Western Australia"
            },
            {
                text: "2,603,900"
            }
        ],
        [
            {
                text: "South Australia"
            },
            {
                text: "1,702,800"
            }
        ],
        [
            {
                text: "Tasmania"
            },
            {
                text: "517,400"
            }
        ],
        [
            {
                text: "Northern Territory"
            },
            {
                text: "244,000"
            }
        ],
        [
            {
                text: "Australian Capital Territory"
            },
            {
                text: "393,000"
            }
        ]
    ]}
/>
```

---
layout: section
---

## React Usage

```jsx
import AUmainNav, { AUmainNavContent } from './main-nav.js';

<AUmainNav>
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<AUmainNavContent items={[
					{
						link: '#',
						text: 'About',
					},
					{
						link: '#',
						text: 'Documentation',
					},
					{
						link: '#',
						text: 'Components',
						active: true
					},
					{
						link: '#',
						text: 'Templates',
					},
				]} />
			</div>
		</div>
	</div>
</AUmainNav>
```

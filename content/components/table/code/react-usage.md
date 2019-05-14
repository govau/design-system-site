---
layout: section
---

## React Usage

```jsx
import AUtable, {AUtableResponsiveWrapper, AUtableCaption, AUtableCell, AUtableHead, AUtableHeader, AUtableBody, AUtableRow} from './table.js';


//simple example
<AUtable 
    caption="Population of Australian states and territories, December 2015"
    headers={[
        {title: "Location",   key: "location"},
        {title: "Population", key: "population", type: 'numeric'}
    ]}
    data={[
        {population: "7,670,700",     location: "New South Wales"},
        {location: "Victoria",        population: "5,996,400"},
        {location: "Tasmania",        population: "514,400"}
    ]}
/>
 
//complex example, using custom rendering for rows
const complexHeaders = [
            {
                title: "Name",
                width: '50',
                key: "name" 
            },
            {
                title: "Interests", 
                width: '20',
                key: "interests",
                render: ( data, row ) => (
                    <ul> {data.map(( data ) => (
                        <li key={data}>{ data }</li>
                        )
                    )}
                    </ul>
                )
            },
            {
                title: "Actions",
                width: '20',
                render: ( data, row ) => (
                    <span>
                        <a href="#">Remove {row.name}</a> | <a href="#"> Update {row.name}</a>
                    </span>
                )
            },
            {
                title: "Age",
                width: '10',
                key: "age",
                type: "numeric"
            },
            ];

            const complexData = [
                {name: "Bob Davidson",   age: "48", interests: ["photography", "reading"]},
                {name: "Jane Williamson",  age: "25", interests: ["basketball", "exercise", "hockey"]},
                {name: "Sally Robertson", age: "35", interests: ["Road trips", "Painting"]}
            ];

<AUtable
    caption="Example table in a col-md-6"
    headers={complexHeaders}
    data = {complexData}
/>


//Using individual components
<table className="au-table">
    <AUtableHead>
        <AUtableRow>
            <AUtableHeader type="text" title="Location"/>
            <AUtableHeader type="numeric" title="Population"/>
            <AUtableHeader type="numeric" title="Change over previous year %"/>
        </AUtableRow>
    </AUtableHead>
    <AUtableBody>
        <AUtableRow>
            <AUtableCell data="New South Wales" type="text" />
            <AUtableCell data="7,670,700" type="numeric"/>
            <AUtableCell data="3.1%" type="numeric"/>
        </AUtableRow>
        <AUtableRow>
            <AUtableCell data="Victoria" type="text" />
            <AUtableCell data="5,996,400" type="numeric" className="bold-cell" />
            <AUtableCell data="2.5%" type="numeric"/>
        </AUtableRow>
    </AUtableBody>
</table>
```

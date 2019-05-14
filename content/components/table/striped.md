---
layout: component/code-demo
iframe: examples/example-striped
iframeFullwidth: true
code:
  - HTML: |
        <table class="au-table">
            <caption class="au-table__caption">Population of Australian states and territories, December 2015</caption>
            <thead class="au-table__head">
                <tr class="au-table__row">
                    <th scope="col" class="au-table__header">Location</th>
                    <th scope="col" class="au-table__header">Population</th>
                </tr>
            </thead>
            <tbody class="au-table__body">
                <tr class="au-table__row">
                    <td class="au-table__cell">New South Wales</td>
                    <td class="au-table__cell">7,670,700</td>
                </tr>
                <tr class="au-table__row">
                    <td class="au-table__cell">Victoria</td>
                    <td class="au-table__cell">5,996,400</td>
                </tr>
                <tr class="au-table__row">
                    <td class="au-table__cell">Tasmania</td>
                    <td class="au-table__cell">517,400</td>
                </tr>
            </tbody>
        </table>
  - React: |
        import AUtable, {AUtableResponsiveWrapper} from "@gov.au/table";

        const simpleData = [
            {population: "7,670,700",     location: "New South Wales"},
            {location: "Victoria",        population: "5,996,400"},
            {location: "Tasmania",        population: "514,400"}
        ];

        const simpleHeaders = [
            {title: "Location",   key: "location"},
            {title: "Population", key: "population", type: 'numeric'}
        ];

        <AUtableResponsiveWrapper>
            <AUtable
                caption="Population of Australian states and territories, December 2015"
                headers={simpleHeaders}
                data={simpleData}
            />
        </AUtableResponsiveWrapper>

---
## Striped table

For data tables with more rows, use the `striped` alternative.



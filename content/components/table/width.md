---
layout: component/code-demo
iframe: examples/example-width
iframeFullwidth: true
code:
  - HTML: |
        <table class="au-table">
            <caption class="au-table__caption">Population of Australian states and territories, December 2015</caption>
            <thead class="au-table__head">
                <tr class="au-table__row">
                    <th scope="col" class="au-table__header au-table__header--width-50">Location</th>
                    <th scope="col" class="au-table__header au-table__header--numeric au-table__header--width-25">Population</th>
                    <th scope="col" class="au-table__header au-table__header--numeric au-table__header--width-25">Change over previous year %</th>
                </tr>
            </thead>
            <tbody class="au-table__body">
                <tr class="au-table__row">
                    <td class="au-table__cell">New South Wales</td>
                    <td class="au-table__cell au-table__cell--numeric">7,670,700</td>
                    <td class="au-table__cell au-table__cell--numeric">3.1%</td>
                </tr>
                <tr class="au-table__row">
                    <td class="au-table__cell">Victoria</td>
                    <td class="au-table__cell au-table__cell--numeric">5,996,400</td>
                    <td class="au-table__cell au-table__cell--numeric">2.5%</td>
                </tr>
                <tr class="au-table__row">
                    <td class="au-table__cell">Tasmania</td>
                    <td class="au-table__cell au-table__cell--numeric">517,400</td>
                    <td class="au-table__cell au-table__cell--numeric">4%</td>
                </tr>
            </tbody>
        </table>
  - React: |
        import AUtable, {AUtableResponsiveWrapper} from "@gov.au/table";

        const simpleData = [
                {location: "New South Wales",              population: "7,670,700", changeYear: "3.1%"},
                {location: "Victoria",                     population: "5,996,400", changeYear: "2.5%"},
                {location: "Tasmania",                     population: "517,400",   changeYear: "4%"}
        ];

        const simpleHeaders = [
            {title: "Location",                    key: "location",   width: '50'},
            {title: "Population",                  key: "population", width: '25', type: 'numeric'}
            {title: "Change over previous year %", key: "changeYear", width: '25', type: 'numeric'},

        ];

        <AUtableResponsiveWrapper>
            <AUtable
                caption="Population of Australian states and territories, December 2015"
                headers={simpleHeaders}
                data={simpleData}
            />
        </AUtableResponsiveWrapper>

---
## Custom widths

Use custom widths based on the length of the data under each corresponding cell.



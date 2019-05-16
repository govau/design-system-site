---
layout: component/code-demo
iframe: examples/example-width
iframeFullwidth: true
code:
  - HTML: |
        <!--
        Width 10%:  <th class="au-table__header au-table__header--width-10">
        Width 20%:  <th class="au-table__header au-table__header--width-20">
        Width 25%:  <th class="au-table__header au-table__header--width-25">
        Width 33%:  <th class="au-table__header au-table__header--width-33">
        Width 50%:  <th class="au-table__header au-table__header--width-50">
        Width 75%:  <th class="au-table__header au-table__header--width-75">
        -->

        <div class="au-table__wrapper">
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
                        <td class="au-table__cell au-table__cell--numeric">4.0%</td>
                    </tr>
                </tbody>
            </table>
        </div>
  - React: |
        import AUtable, {AUtableResponsiveWrapper} from "@gov.au/table";

        const simpleHeaders = [
            {title: "Location",                    key: "location",   width: '50'},
            {title: "Population",                  key: "population", width: '25', type: 'numeric'},
            {title: "Change over previous year %", key: "changeYear", width: '25', type: 'numeric'}

        ];

        const simpleData = [
                {location: "New South Wales", population: "7,670,700", changeYear: "3.1%"},
                {location: "Victoria",        population: "5,996,400", changeYear: "2.5%"},
                {location: "Tasmania",        population: "517,400",   changeYear: "4.0%"}
        ];


        <AUtableResponsiveWrapper>
            <AUtable
                caption="Population of Australian states and territories, December 2015"
                headers={simpleHeaders}
                data={simpleData}
            />
        </AUtableResponsiveWrapper>

---
## Custom header widths

Use custom widths based on the expected length of the data under each corresponding column. By default the table is full width, however the table can be used with the grid to take up a desired amount of horizontal space on the page. Wrapping the `table` element in a `<div class="au-table__wrapper">` allows for horizontal scrolling on smaller devices. This is especially useful for tables with a larger number of columns.



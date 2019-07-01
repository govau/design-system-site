---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
code:
  - HTML: |
        <!--
        Row header:  <th class="au-table__header" scope="row">
        Column header:  <th class="au-table__header" scope="col">
        -->

        <table class="au-table">
            <caption class="au-table__caption">Population of Australian states and territories, December 2015</caption>
            <thead class="au-table__head">
                <tr class="au-table__row">
                    <th scope="col" class="au-table__header">Location</th>
                    <th scope="col" class="au-table__header au-table__header--numeric">Population</th>
                    <th scope="col" class="au-table__header au-table__header--numeric">Change over previous year %</th>
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
  - React: |
        import AUtable, {AUtableResponsiveWrapper, AUtableHead, AUtableRow, AUtableBody, AUtableHeader, AUtableCell } from "@gov.au/table";
        
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


        /*
            Row header:  <AUtableHeader scope="row" />
            Column header:  <AUtableHeader scope="col" />
        */

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
---
## Default table

For data tables with a small amount of rows use the default table. Align text columns and corresponding data cells to the left. When comparing numbers in a column, align data cells and column headers to the right.

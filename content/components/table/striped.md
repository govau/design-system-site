---
layout: component/code-demo
iframe: examples/example-striped
iframeFullwidth: true
code:
  - HTML: |
        <div class="au-table__wrapper">
            <table class="au-table au-table--striped">
                <caption class="au-table__caption">Population of Australian states and territories, December 2015</caption>
                <thead class="au-table__head">
                    <tr class="au-table__row">
                        <th scope="col" class="au-table__header au-table__header--width-25">Location</th>
                        <th scope="col" class="au-table__header au-table__header--numeric au-table__header--width-25">Population</th>
                        <th scope="col" class="au-table__header au-table__header--numeric au-table__header--width-25">Change over previous year %</th>
                        <th scope="col" class="au-table__header au-table__header--numeric au-table__header--width-25">Change over previous decade %</th>
                    </tr>
                </thead>
                <tbody class="au-table__body">
                    <tr class="au-table__row">
                        <td class="au-table__cell">New South Wales</td>
                        <td class="au-table__cell au-table__cell--numeric">7,670,700</td>
                        <td class="au-table__cell au-table__cell--numeric">3.1%</td>
                        <td class="au-table__cell au-table__cell--numeric">12.9%</td>
                    </tr>
                    <tr class="au-table__row">
                        <td class="au-table__cell">Victoria</td>
                        <td class="au-table__cell au-table__cell--numeric">5,996,400</td>
                        <td class="au-table__cell au-table__cell--numeric">2.5%</td>
                        <td class="au-table__cell au-table__cell--numeric">9.3%</td>
                    </tr>
                    <tr class="au-table__row">
                        <td class="au-table__cell">Queensland</td>
                        <td class="au-table__cell au-table__cell--numeric">4,808,800</td>
                        <td class="au-table__cell au-table__cell--numeric">1.7%</td>
                        <td class="au-table__cell au-table__cell--numeric">13.3%</td>
                    </tr>
                    <tr class="au-table__row">
                        <td class="au-table__cell">Western Australia</d>
                        <td class="au-table__cell au-table__cell--numeric">2,603,900</td>
                        <td class="au-table__cell au-table__cell--numeric">2.3%</td>
                        <td class="au-table__cell au-table__cell--numeric">11.6%</td>
                    </tr>
                    <tr class="au-table__row">
                        <td class="au-table__cell">South Australia</td>
                        <td class="au-table__cell au-table__cell--numeric">1,702,800</td>
                        <td class="au-table__cell au-table__cell--numeric">2.0%</td>
                        <td class="au-table__cell au-table__cell--numeric">6.8%</td>
                    </tr>
                    <tr class="au-table__row">
                        <td class="au-table__cell">Tasmania</td>
                        <td class="au-table__cell au-table__cell--numeric">517,400</td>
                        <td class="au-table__cell au-table__cell--numeric">4.0%</td>
                        <td class="au-table__cell au-table__cell--numeric">5.3%</td>
                    </tr>
                    <tr class="au-table__row">
                        <td class="au-table__cell">Northern Territory</td>
                        <td class="au-table__cell au-table__cell--numeric">244,000</td>
                        <td class="au-table__cell au-table__cell--numeric">1.2%</td>
                        <td class="au-table__cell au-table__cell--numeric">4.5%</td>
                    </tr>
                    <tr class="au-table__row">
                        <td class="au-table__cell">Australian Capital Territory</td>
                        <td class="au-table__cell au-table__cell--numeric">393,000</td>
                        <td class="au-table__cell au-table__cell--numeric">2.4%</td>
                        <td class="au-table__cell au-table__cell--numeric">9.6%</td>
                    </tr>
                </tbody>
            </table>
        </div>
  - React: |
        import AUtable, {AUtableResponsiveWrapper} from "@gov.au/table";

        const detailedPopulationData = [
            {location: "New South Wales",              population: "7,670,700", changeYear: "3.1%", changeDecade: "12.9%" },
            {location: "Victoria",                     population: "5,996,400", changeYear: "2.5%", changeDecade: "9.3%"},
            {location: "Queensland",                   population: "4,808,800", changeYear: "1.7%", changeDecade: "13.3%"},
            {location: "Western Australia",            population: "2,603,900", changeYear: "2.3%", changeDecade: "11.6%"},
            {location: "South Australia",              population: "1,702,800", changeYear: "2.0%", changeDecade: "6.8%"},
            {location: "Tasmania",                     population: "517,400",   changeYear: "4%",   changeDecade: "5.3%"},
            {location: "Nothern Territory",            population: "244,400",   changeYear: "1.2%", changeDecade: "4.5%"},
            {location: "Australian Capital Territory", population: "393,000",   changeYear: "2.4%", changeDecade: "9.6%"},

        ];

        const detailedPopulationDataHeaders = [
            {title: "Location",                     key: "location"},
            {title: "Population",                   key: "population",    type: 'numeric',},
            {title: "Change over previous year %",  key: "changeYear",    type: 'numeric',},
            {title: "Change over previous decade %", key: "changeDecade", type: 'numeric',},
        ];


        <AUtableResponsiveWrapper>
            <AUtable
                caption="Population of Australian states and territories, December 2015"
                headers={detailedPopulationDataHeaders}
                data={detailedPopulationData}
                striped={true}
            />
        </AUtableResponsiveWrapper>

---
## Striped table

For data tables with more rows, use the `striped` alternative.



---
layout: component/code-demo
iframe: examples/example-responsive
iframeFullwidth: true
code:
  - HTML: |
        <div class="au-table__wrapper au-body">
            <table class="au-table">
                <caption class="au-table__caption">Population of Australian states and territories, December 2015</caption>
                <thead class="au-table__head">
                    <tr class="au-table__row">
                        <th scope="col" class="au-table__header au-table__header--width-25">Name</th>
                        <th scope="col" class="au-table__header au-table__header--width-33">Tags</th>
                        <th scope="col" class="au-table__header au-table__header--width-25">Actions</th>
                    </tr>
                </thead>
                <tbody class="au-table__body">
                    <tr class="au-table__row">
                        <td class="au-table__cell">Alexander Davidson</td>
                        <td class="au-table__cell">
                            <ul class="au-tags">
                                <li><a href="">Reading</a></li>
                                <li><a href="">Photography</a></li>
                            </ul>
                        </td>
                        <td class="au-table__cell"><a href="#">Remove Alexander</a></td>
                    </tr>
                    <tr class="au-table__row">
                        <td class="au-table__cell">Sally Green</td>
                        <td class="au-table__cell">
                            <ul class="au-tags">
                                <li><a href="#">Basketball</a></li>
                                <li><a href="#">Swimming</a></li>
                            </ul>
                        </td>
                        <td class="au-table__cell"><a href="#">Remove Sally</a></td>
                    </tr>
                    <tr class="au-table__row">
                        <td class="au-table__cell">Russell Smith</td>
                        <td class="au-table__cell">
                            <ul class="au-tags">
                                <li><a href="#">Coding</a></li>
                                <li><a href="#">Gaming</a></li>
                            </ul>
                        </td>
                        <td class="au-table__cell"><a href="#">Remove Russell</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
  - React: |
        const simpleData = [
            {population: "7,670,700",     location: "New South Wales"},
            {location: "Victoria",        population: "5,996,400"},
            {location: "Tasmania",        population: "514,400"}
        ];

        const simpleHeaders = [
            {title: "Location",   key: "location"},
            {title: "Population", key: "population", type: 'numeric'}
        ];

        <AUtable
            caption="Population of Australian states and territories, December 2015"
            headers={simpleHeaders}
            data={simpleData}
        />
---
## Responsive

Add a containing `div` element to allow for horizontal scrolling on smaller devices



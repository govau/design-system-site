---
layout: component/code-demo
iframe: examples/example-default
iframeFullwidth: true
code:
  - HTML: |
        <table class="au-table" tabindex="0" aria-describedby="table_desc">
            <caption id="table_desc">Population of Australian states and territories, December 2015</caption>
            <thead>
                <tr>
                    <th scope="col">Location</th>
                    <th scope="col">Population</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>New South Wales</td>
                    <td>7,670,700</td>
                </tr>
                <tr>
                    <td>Victoria</td>
                    <td>5,996,400</td>
                </tr>
                <tr>
                    <td>Queensland</td>
                    <td>4,808,800</td>
                </tr>
                <tr>
                    <td>Western Australia</td>
                    <td>2,603,900</td>
                </tr>
                <tr>
                    <td>South Australia</td>
                    <td>1,702,800</td>
                </tr>
                <tr>
                    <td>Tasmania</td>
                    <td>517,400</td>
                </tr>
                <tr>
                    <td>Northern Territory</td>
                    <td>244,000</td>
                </tr>
                <tr>
                    <td>Australian Capital Territory</td>
                    <td>393,000</td>
                </tr>
            </tbody>
        </table>
  - React: |
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
---

### Table

Table is used to associate 
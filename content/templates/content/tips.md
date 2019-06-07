## Tips

### Structure

- Use headings `<h1> - <h6>` to add structure to the page. The main title should be a `<h1>` and should communicate the main focus of the page. Subsequent headings should be used to give titles to subsections. 
- Breadcrumbs are useful on pages with multiple levels of nesting. They help make users aware of their current location with respect to the website and provide a quick point of reference in case they get lost.
- For longer pages, it can be appropriate to use the [inpage navigation](../../components/inpage-nav/) component at the top of the page, to give users an indication of the contents of the page, and allow them to share anchors to certain sections.
- Avoid using `<div>` tags for everything. Use semantic HTML elements when possible, such as `<section>`, `<article>`, etc. This helps screen reader users identify each type of content and allows for quick navigation via assistive technology landmark menus.

### Content

- Avoid using accordions to hold content that is primary to the page. It is not a replacement for well structured headings and plain text.
- Content pages are frequently printed out or saved as a PDF. By default the design system components are styled with print styles in mind. Viewing your page in [print preview mode](https://developers.google.com/web/tools/chrome-devtools/css/print-preview) can give a good indication to how the page will look printed. 
- For more guidance on content, please see the information on the [content guide](https://guides.service.gov.au/content-guide/) website.

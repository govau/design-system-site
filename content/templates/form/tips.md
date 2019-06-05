## Tips

### Validation

- Do not rely on client side validation. Make sure server side validation is implemented, in case javascript does not load.
- If any part of the form is incomplete when submitted, make sure to provide a list of all invalid fields. This should include anchor links to each of the fields that require attention.
- Don't rely on HTML5 validation. HTML5 validation is often incompatible for users of assistive technologies. Furthermore each browser handles it differently.


### Structure

- Align form labels and hint text above text fields. This approach will allow for best readability and scannability.
- Make the width of text inputs proportionate to the width of text expected to be entered in it. This can be achieved using the [width selectors](https://designsystem.gov.au/components/text-inputs/#different-width-sizes-for-inputs).
- Add consistent spacing between each form control. This can be achieved using the [`.au-form-group` wrapper](https://designsystem.gov.au/components/form/#form-groups).

### Design

- Avoid using placeholder text as a replacement to labels or hint text. There are many reasons for this:
    - placeholder text is often faint and does not meet contrast requirements.
    - browsers handle placeholder text differently.
    - placeholder text relies on users short term memory; as they begin typing into a text field the placeholder text disappears.
- Distinguish primary actions from secondary actions. This can be done using variations of the button classes.


### Content

- Make sure any error messages are specific. The users should be able to determine what is wrong, and how to fix it. Avoid error messages such as "Password invalid". Instead say "Password must be 8 characters long".
- Label the form actions specifically. Instead of using naming such as "Submit" or "Search". Instead use "Leave feedback" or "Check availability".

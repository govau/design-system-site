## Tips

### Validation

- Do not rely on client-side validation alone. Make sure server-side validation is implemented, in case Javascript does not load.
- If any part of the form is incomplete when submitted, make sure to provide a list of all invalid fields. This should include anchor links to each of the fields that require attention.

### Structure

- Align form labels and hint text above text fields. This approach will allow for best [readability and scannability](../../components/form/rationale/#label-positioning).
- Make the width of text inputs proportionate to the width of text expected to be entered in it. This can be achieved using the [width selectors](../../components/text-inputs/#different-width-sizes-for-inputs).
- Add consistent spacing between each form control. This can be achieved using the [`.au-form-group` wrapper](../../components/form/#form-groups).

### Design

- Don't use placeholder text on form inputs, as they disappear when a user focuses on the input box. Use [labels](../../components/form/#label) or [hint text](../../components/form/#hint-text) instead.
- Distinguish primary actions from secondary actions. This can be done using variations of the button classes. For example in a multi page form, a primary action could be "Next page", whereas the secondary action could be "Save progress".

### Content

- Make sure any error messages are specific. The users should be able to determine what is wrong, and how to fix it. Avoid error messages such as "Password invalid". Instead say "Password must be 8 characters long".
- Label the form actions specifically. Instead of using naming such as "Submit" or "Search". Instead use "Send feedback" or "Check availability".

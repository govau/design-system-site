<!-- SKIP-LINKS -->
<nav class="au-skip-link">
    <a class="au-skip-link__link" href="#content">Skip to main content</a>
</nav>


<!-- MAIN BODY -->
<main id="content">
    <!--CONTENT-->
    <section class="au-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-7">
                    <h1>Form example (h1)</h1>
                    <p>The page heading communicates the main focus of the page. Make your page heading descriptive and keep it succinct.</p>
                    <p>These headings introduce, respectively, sections and subsections within your body copy. As you create these headings, follow the same guidelines that you use when writing section headings: Be succinct, descriptive, and precise.</p>
                    <form>
                        <div class="form-item">
                            <label for="email" class="label--block">Email <span class="form-required">(Required)</span></label>
                            <input class="au-text-input empty-required" name="email" id="email" type="email" required>
                        </div>
    <div class="form-item">
        <label for="fullname" class="label--block">Full name</label>
        <input class="au-text-input" name="fullname" id="fullname" type="text">
    </div>
    <!--RADIO OPTIONS-->
    <div class="form-item">
            Preferred contact method <span class="form-required">(Required)</span>
        <label class="au-control-input au-control-input--block">
            <input class="au-control-input__input empty-required" type="radio" name="contact-method" value="do-not-contact" required>
            <span class="au-control-input__text">Don't contact me</span>
        </label>
        <label class="au-control-input au-control-input--block">
            <input class="au-control-input__input empty-required" type="radio" name="contact-method" value="raven" required>
            <span class="au-control-input__text">Raven</span>
        </label>
    </div>
    <!--CHECK OPTIONS-->
    <div class="form-item">
        How did you hear about us?
        <label class="au-control-input au-control-input--block">
            <input class="au-control-input__input" type="checkbox" name="referral" value="google">
            <span class="au-control-input__text">Google</span>
        </label>
        <label class="au-control-input au-control-input--block">
            <input class="au-control-input__input" type="checkbox" name="referral" value="website">
            <span class="au-control-input__text">Website</span>
        </label>
    </div>
    <div class="form-item">
        <label for="help-comment"> How can we help you? <span class="form-required">(Required)</span></label>
        <textarea class="au-text-input au-text-input--block empty-required" name="help-comment" id="help-comment" required></textarea>
    </div>
    <!--CHECK OPTIONS-->
    <div class="form-item">
        Are you sure about this? <span class="form-required">(Required)</span>
        <label class="au-control-input au-control-input--block">
            <input class="au-control-input__input empty-required" type="checkbox" name="agreement" value="agreement" required>
            <span class="au-control-input__text">I agree</span>
        </label>
    </div>
    <!--FORM SUBMIT BUTTON-->
    <div class="form-item">
        <button class="au-btn">Submit</button>
    </div>
</form>
</div>
</div>
</div>
</section>
    <!--END CONTENT-->
</main>
<!-- END MAIN BODY -->


<!-- The javascript from pancake to open and close side nav on desktop -->
<script type="text/javascript" src="../js/script.min.js"></script>
<script>
    // Change EventListener to attachEvent for legacy browsers
    function AddEvent( elements, event, onEvent ) {
        if( elements ) {
            // Create an array of elements if a singular or array of elements is passed in
            if( elements.length === undefined ) {
                elements = [ elements ];
            }
            // For each element add the correct event listener
            for( var i = 0; i < elements.length; i++ ) {
                if( typeof Element.prototype.addEventListener === "undefined" ) {
                    // Make sure that we pass this
                    ( function( element, event ) {
                        element.attachEvent( "on" + event, function( actualEvent ) {
                            onEvent( actualEvent, element );
                        });
                    })( elements[ i ], event );
                }
                else {
                    ( function( element, event ) {
                        element.addEventListener( event, function( actualEvent ) {
                            onEvent( actualEvent, element );
                        });
                    })( elements[ i ], event );
                }
            }
        }
    }
    // Required form fields appear as errors on page load
    //
    // If you want a required group of checkboxes you will need to modify this script:
    // https://stackoverflow.com/questions/6218494/using-the-html5-required-attribute-for-a-group-of-checkboxes
    function ResetEmptyRequired( tagNames ){
        for( var i = 0; i < tagNames.length; i++ ){
            var elements = document.getElementsByTagName( tagNames[ i ] );
            for( var j = 0; j < elements.length; j++ ){
                if( elements[ j ].required ){
                    AddEvent( elements[ j ], "blur", function( event, $this )	{
                        $this.className = $this.className.replace( " empty-required", "" );
                    });
                }
            }
        }
    }
    ResetEmptyRequired( [ 'input', 'textarea' ] );
</script>

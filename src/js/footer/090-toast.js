var supportsTransitionEnd = !HasClass( document.documentElement, 'ie8' ) && !HasClass( document.documentElement, 'ie9' );

/**
 * ShowToast - Show the toast, its hot 🔥
 *
 * @param {node} toastElement - The DOM element for the toast
 */
function ShowToast( toastElement ){
	var toastAnimating = HasClass( toastElement, 'au-toast--animating' );
	var toastHidden = HasClass( toastElement, 'au-toast--hidden' );

	// Check if we are currently animating the toast
	if( !toastAnimating && toastHidden ){
		// Remove display none
		RemoveClass( toastElement, 'au-toast--hidden' );
		// Hide with opacity
		AddClass( toastElement, 'au-toast--animating' );

		// Run animation for toast on the next interval
		setTimeout(function(){
			RemoveClass( toastElement, 'au-toast--animating' );
		}, 1 );
	}
}


/**
 * ToastTransitionEnd - Run this when animation is done
 *
 * @param {object} event - The DOM event
 */
function ToastTransitionEnd( event ){
	// Check only one of the transition properties has completed
	// transform and opacity both complete with the same duration
	if( event.propertyName === 'opacity' ) {
		// Remove transition animating
		RemoveClass( event.target, 'au-toast--animating' );
		// Hide with display none
		AddClass( event.target, 'au-toast--hidden' );

		event.target.removeEventListener( 'transitionend', ToastTransitionEnd );
	};
}


/**
 * HideToast - Hide the toast, it needs more time
 *
 * @param {node} toastElement - The DOM element for the toast
 */
function HideToast( toastElement ){
	var toastAnimating = HasClass( toastElement, 'au-toast--animating' );
	var toastHidden = HasClass( toastElement, 'au-toast--hidden' );

	if( !toastAnimating && !toastHidden ){
		if( supportsTransitionEnd ){
			toastElement.addEventListener( 'transitionend', ToastTransitionEnd, false );
			// Hide with opacity
			AddClass( toastElement, 'au-toast--animating' );
		}
		else {
			AddClass( toastElement, 'au-toast--hidden' );
		}
	}
}

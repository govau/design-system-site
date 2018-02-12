/* PANCAKE v1.1.0 PANCAKE-JS v1.0.9 */

/*! @gov.au/accordion v1.0.0-next.7 */

/*! @gov.au/accordion v1.0.0-next.7 */
/***************************************************************************************************************************************************************
 *
 * Accordion function
 *
 * A component to allow users to show or hide page elements.
 *
 **************************************************************************************************************************************************************/

var AU = AU || {};

( function( AU ) {

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// NAMESPACE MODULE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	var accordion = {}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVATE FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * PRIVATE
	 * Set the correct Aria roles for given element on the accordion title and body
	 *
	 * @param  {object} element - The DOM element we want to set attributes for
	 * @param  {object} target  - The DOM element we want to set attributes for
	 * @param  {string} state   - The DOM element we want to set attributes for
	 */
	function setAriaRoles( element, target, state ) {

		if( state === 'closing' ) {
			target.setAttribute( 'aria-hidden', true );
			element.setAttribute( 'aria-expanded', false );
			element.setAttribute( 'aria-selected', false );
		}
		else {
			target.setAttribute( 'aria-hidden', false );
			element.setAttribute( 'aria-expanded', true );
			element.setAttribute( 'aria-selected', true );
		}
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for replacing classes on a DOM node
	 *
	 * @param  {object} element      - The DOM element we want to toggle classes on
	 * @param  {object} target       - The DOM element we want to toggle classes on
	 * @param  {object} state        - The current state of the animation on the element
	 * @param  {string} openingClass - The firstClass you want to toggle on the DOM node
	 * @param  {string} closingClass - The secondClass you want to toggle on the DOM node
	 */
	function toggleClasses( element, state, openingClass, closingClass ) {

		if( state === 'opening' || state === 'open' ) {
			var oldClass = openingClass || 'au-accordion--closed';
			var newClass = closingClass || 'au-accordion--open';
		}
		else {
			var oldClass = closingClass || 'au-accordion--open';
			var newClass = openingClass || 'au-accordion--closed';
		}

		removeClass( element, oldClass );
		addClass( element, newClass );
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for removing a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be removed
	 */
	function removeClass( element, className ) {
		if( element.classList ) {
			element.classList.remove( className );
		}
		else {
			element.className = element.className.replace( new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " " );
		}
	}


	/**
	 * PRIVATE
	 * IE8 compatible function for adding a class
	 *
	 * @param  {object} element   - The DOM element we want to manipulate
	 * @param  {object} className - The name of the class to be added
	 */
	function addClass( element, className ) {
		if( element.classList ) {
			element.classList.add( className );
		}
		else {
			element.className = element.className + " " + className;
		}
	}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Toggle an accordion element
	 *
	 * @param  {string}  elements  - The DOM node/s to toggle
	 * @param  {integer} speed     - The speed in ms for the animation
	 * @param  {object}  callbacks - An object of four optional callbacks: { onOpen, afterOpen, onClose, afterClose }
	 *
	 */
	accordion.Toggle = function( elements, speed, callbacks ) {

		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		// making sure we can iterate over just one DOM element
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// check this once
		if( typeof callbacks != 'object' ) {
			callbacks = {};
		}

		for( var i = 0; i < elements.length; i++ ) {

			var element = elements[ i ];
			var targetId = element.getAttribute('aria-controls');
			var target = document.getElementById( targetId );

			if( target == null ) {
				throw new Error(
					'AU.accordion.Toggle cannot find the target to be toggled from inside aria-controls.\n' +
					'Make sure the first argument you give AU.accordion.Toggle is the DOM element (a button or a link) that has an aria-controls attribute that points ' +
					'to a div that you want to toggle.'
				);
			}

			target.style.display = 'block';

			(function( element ) {
				AU.animate.Toggle({
					element: target,
					property: 'height',
					speed: speed || 250,
					prefunction: function( target, state ) {
						if( state === 'opening' ) {
							target.style.display = 'block';

							// run when opening
							if( typeof callbacks.onOpen === 'function' ) {
								callbacks.onOpen();
							}
						}
						else {
							// run when closing
							if( typeof callbacks.onClose === 'function' ) {
								callbacks.onClose();
							}
						}

						setAriaRoles( element, target, state );
						toggleClasses( element, state );
					},
					postfunction: function( target, state ) {
						if( state === 'closed' ) {
							// run after closing
							target.style.display = '';
							target.style.height = '';

							if( typeof callbacks.afterClose === 'function' ) {
								callbacks.afterClose();
							}
						}
						else {
							// run after opening
							target.style.display = '';
							target.style.height = '';

							if( typeof callbacks.afterOpen === 'function' ) {
								callbacks.afterOpen();
							}
						}

						toggleClasses( target, state );
					},
				});
			})( element );

		}

		return false;

	}


	/**
	 * Open a group of accordion elements
	 *
	 * @param  {string}  elements - The DOM node/s to toggle
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	accordion.Open = function( elements, speed ) {

		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		for( var i = 0; i < elements.length; i++ ) {

			var element = elements[ i ];
			var targetId = element.getAttribute('aria-controls');
			var target = document.getElementById( targetId );

			// let’s find out if this accordion is still closed
			var height = 0;
			if( typeof getComputedStyle !== 'undefined' ) {
				height = window.getComputedStyle( target ).height;
			}
			else {
				height = target.currentStyle.height;
			}

			if( parseInt( height ) === 0 ) {
				target.style.height = '0px';
			}

			target.style.display = '';
			toggleClasses( target, 'opening' );
			toggleClasses( element, 'opening' );
			setAriaRoles( element, target, 'opening' );

			(function( target, speed, element ) {
				AU.animate.Run({
					element: target,
					property: 'height',
					endSize: 'auto',
					speed: speed || 250,
					callback: function() {
						toggleClasses( element, 'opening' );
					},
				});
			})( target, speed, element );
		}

	}


	/**
	 * Close a group of accordion elements
	 *
	 * @param  {string}  elements - The DOM node/s to toggle
	 * @param  {integer} speed    - The speed in ms for the animation
	 *
	 */
	accordion.Close = function( elements, speed ) {

		// stop event propagation
		try {
			window.event.cancelBubble = true;
			event.stopPropagation();
		}
		catch( error ) {}

		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		for( var i = 0; i < elements.length; i++ ) {

			var element = elements[ i ];
			var targetId = element.getAttribute('aria-controls');
			var target = document.getElementById( targetId );

			toggleClasses( element, 'closing' );
			setAriaRoles( element, target, 'closing' );

			(function( target, speed ) {
				AU.animate.Run({
					element: target,
					property: 'height',
					endSize: 0,
					speed: speed || 250,
					callback: function() {
						target.style.display = 'none';
						toggleClasses( target, 'close' );
					},
				});
			})( target, speed );
		}

	}


	AU.accordion = accordion;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}


/*! @gov.au/animate v1.0.0-next.4 */

/*! @gov.au/animate v1.0.0-next.4 */
/***************************************************************************************************************************************************************
 *
 * Animate function
 *
 * A function to open, close and toggle the display of page elements.
 *
 **************************************************************************************************************************************************************/

var AU = AU || {};

( function( AU ) {

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// NAMESPACE MODULE
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	var animate = {}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PRIVATE FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * PRIVATE
	 * Calculate the requirements for the desired animation
	 *
	 * @param  {integer} initialSize - The initial size of the element to animate
	 * @param  {integer} endSize     - The size the element after the animation completes
	 * @param  {string}  speed       - The speed of the animation in ms
	 *
	 * @return {object}              - Required steps, stepSize and intervalTime for the animation
	 */
	function CalculateAnimationSpecs( initialSize, endSize, speed ) {

		if( initialSize === endSize ) {
			return {
				stepSize: 0,
				steps: 0,
				intervalTime: 0,
			};
		}

		var distance = endSize - initialSize;        // the overall distance the animation needs to travel
		var intervalTime = ( speed / distance );     // the time each setInterval iteration will take
		var stepSize = distance < 0 ? -1 : 1;        // if distance is negative then we set stepSize to -1
		var steps = Math.abs( distance / stepSize ); // the amount of steps required to get to endSize
		intervalTime = speed / steps;

		// we need to adjust our animation specs if interval time exceeds 60FPS eg intervalTime < 16.67ms
		if( Math.abs( intervalTime ) < ( 1000 / 60 ) ) {
			intervalTime = ( 1000 / 60 );                          // let’s not get lower that 60FPS
			steps = Math.ceil( Math.abs( speed / intervalTime ) ); // we now need the steps and make sure we ceil them so -1 won't make them negative
			stepSize = distance / steps;                           // last thing is step sizes which are derived from all of the above
		}

		return {
			stepSize: stepSize,
			steps: ( steps - 1 ),
			intervalTime: intervalTime,
		};
	}

	// export for node and babel environments
	if( typeof module !== 'undefined' ) {
		animate.CalculateAnimationSpecs = CalculateAnimationSpecs;
	}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// PUBLIC FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
	/**
	 * Getting computed CSS styles from normal browsers and IE
	 *
	 * @param {object} element  - The DOM element we want to get the computed style from
	 * @param {string} property - The CSS property
	 *
	 * @return {string|integer} - The CSS value for the property
	 */
	animate.GetCSSPropertyBecauseIE = function( element, property ) {
		if( typeof getComputedStyle !== 'undefined' ) {
			return window.getComputedStyle( element )[ property ];
		}
		else {
			var space = element.currentStyle[ property ];

			if( space === 'auto' ) {
				space = AU.animate.CalculateAuto( element, property );
			}

			return space;
		}
	};


	/**
	 * Calculate the size of the element when it’s dimension(height or width) is set to auto
	 *
	 * @param  {object} element   - The element to read auto height from
	 * @param  {string} dimension - The dimension to measure
	 *
	 * @return {integer}          - The size of the element when at dimension(height or width) is set to 'auto'
	 */
	animate.CalculateAuto = function( element, dimension ) {
		var initialSize;
		var endSize;

		if( dimension === 'height' ) {
			initialSize = element.clientHeight;              // get current height
			element.style[ dimension ] = 'auto';             // set height to auto
			endSize = element.clientHeight;                  // get height again
			element.style[ dimension ] = initialSize + 'px'; // set back to initial height
		}
		else {
			initialSize = element.clientWidth;
			element.style[ dimension ] = 'auto';
			endSize = element.clientWidth;
			element.style[ dimension ] = initialSize + 'px';
		}

		return parseInt( endSize );
	};


	/**
	 * Stop any au animation on a DOM element
	 *
	 * @param  {object} element - The element to stop animating
	 */
	animate.Stop = function ( element ) {
		clearInterval( element.AUanimation );
	};


	/**
	 * The magical animation function
	 *
	 * @param  {object}         options          - The options for the animation
	 * @param  {object}         options.element  - Element/s we are animating (DOM nodes)
	 * @param  {string}         options.property - The CSS property to animate
	 * @param  {integer|string} options.endSize  - The size the element should animate to. Can be 'auto' or pixel value
	 * @param  {integer}        options.speed    - The speed of the animation in milliseconds [optional] [default: 250]
	 * @param  {function}       options.callback - A function to be executed after the animation ends [optional]
	 *
	 * @return {unknown}                         - The return value passed on from our options.callback function [optional]
	 */
	animate.Run = function( options ) {
		// defaults
		var elements = options.element;
		var speed = options.speed || 250;

		// making a single DOM element iteratable
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// making a callback if none was provided
		if( typeof options.callback !== 'function' ) {
			options.callback = function() {};
		}

		// adding iteration counts
		elements[ 0 ].AUinteration = 0;
		elements[ 0 ].AUinterations = elements.length;

		// iterate over all DOM nodes
		for( var i = 0; i < elements.length; i++ ) {
			var element = elements[ i ];                                                                   // this element
			AU.animate.Stop( element );                                                                    // stop any previous animations
			var initialSize = parseInt( AU.animate.GetCSSPropertyBecauseIE( element, options.property ) ); // the elements current size
			var endSize = options.endSize;                                                                 // the element end size

			if( options.endSize === 'auto' ) {                                                             // calculate what 'auto' means in pixel
				endSize = AU.animate.CalculateAuto( element, options.property );
			}

			// calculate our animation specs
			var animationSpecs = CalculateAnimationSpecs( initialSize, endSize, speed );
			var iterateCounter = initialSize;

			// set state
			if( animationSpecs.stepSize < 0 ) {
				element.AUtoggleState = 'closing';
			}
			else if( animationSpecs.stepSize > 0 ) {
				element.AUtoggleState = 'opening';
			}

			// scoping variable
			(function( element, initialSize, iterateCounter, animationSpecs, endSize ) {
				// keep track of animation by adding it to the DOM element
				element.AUanimation = setInterval( function() {

					// when we are at the end
					if( initialSize === endSize || animationSpecs.steps === 0 ) {
						AU.animate.Stop( element );

						element.style[ options.property ] = endSize + 'px'; // set to endSize
						element.AUtoggleState = '';

						elements[ 0 ].AUinteration ++;

						// removing auto so CSS can take over
						if( options.endSize === 'auto' ) {
							element.style[ options.property ] = '';
						}

						// when all iterations have finished, run the callback
						if( elements[ 0 ].AUinteration >= elements[ 0 ].AUinterations ) {
							return options.callback();
						}
					}

					// if we are still animating
					else {
						iterateCounter += animationSpecs.stepSize;
						element.style[ options.property ] = iterateCounter + 'px';

						animationSpecs.steps --;
					}

				}, Math.abs( animationSpecs.intervalTime ) );
			})( element, initialSize, iterateCounter, animationSpecs, endSize );
		}
	};


	/**
	 * Toggle animation
	 *
	 * @param  {object}         options              - The options for the animation
	 * @param  {object}         options.element      - Element/s we are animating (DOM nodes)
	 * @param  {string}         options.property     - The CSS property to animate [optional] [default: 'height']
	 * @param  {integer|string} options.closeSize    - The size the element should close to. Can be 'auto' or pixel value [optional] [default: 0]
	 * @param  {integer|string} options.openSize     - The size the element should open to. Can be 'auto' or pixel value [optional] [default: 'auto']
	 * @param  {integer}        options.speed        - The speed of the animation in milliseconds [optional] [default: 250]
	 * @param  {function}       options.prefunction  - A function to be executed before each animation starts, passes {object} element, {string} state [optional]
	 * @param  {function}       options.postfunction - A function to be executed after each animation ends, passes {object} element, {string} state [optional]
	 * @param  {function}       options.callback     - A function to be executed after the animation ends, passes {object} element, {string} state [optional]
	 *
	 * @return {unknown}                             - The return value passed on from our options.callback function [optional]
	 */
	animate.Toggle = function( options ) {

		var elements = options.element;
		var property = options.property || 'height';
		var speed = options.speed || 250;
		var closeSize = options.closeSize || 0;
		var openSize = options.openSize || 'auto'

		// making a single DOM element iteratable
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// making a prefunction if none was provided
		if( typeof options.prefunction !== 'function' ) {
			options.prefunction = function() {};
		}

		// making a postfunction if none was provided
		if( typeof options.postfunction !== 'function' ) {
			options.postfunction = function() {};
		}

		// making a callback if none was provided
		if( typeof options.callback !== 'function' ) {
			options.callback = function() {};
		}

		// adding iteration counts
		elements[ 0 ].AUtoggleInteration = 0;
		elements[ 0 ].AUtoggleInterations = elements.length;

		// iterate over all DOM nodes
		for( var i = 0; i < elements.length; i++ ) {
			var element = elements[ i ];

			AU.animate.Stop( element );

			var targetSize;     // the size the element should open/close to after toggle is clicked
			var preState = '';  // the state we animate to for the prefunction and callback functions
			var postState = ''; // the state we animate to for the prefunction and callback functions
			var currentSize = parseInt( AU.animate.GetCSSPropertyBecauseIE( element, options.property ) ); // the current size of the element

			if( currentSize === closeSize || element.AUtoggleState === 'closing' ) {
				targetSize = openSize;
				preState = 'opening';
				postState = 'open';
			}
			else if( currentSize !== closeSize || element.AUtoggleState === 'opening' ) {
				targetSize = closeSize;
				preState = 'closing';
				postState = 'closed';
			}
			else {
				throw new Error('AU.animate.Toggle cannot determine state of element');
			}

			// run prefunction once per element
			options.prefunction( element, preState );

			// shoot off animation
			AU.animate.Run({
				element: element,
				endSize: targetSize,
				property: property,
				speed: speed,
				callback: function() { // making sure we fire the callback only once
					elements[ 0 ].AUtoggleInteration ++;

					if( elements[ 0 ].AUtoggleInteration === elements[ 0 ].AUinterations ) {
						var returnParam = options.callback( element, postState );

						// run postfunction once per element
						options.postfunction( element, postState );

						return returnParam;
					}

					// run postfunction once per element
					options.postfunction( element, postState );
				},
			});

		}
	};


	AU.animate = animate;

}( AU ));


if( typeof module !== 'undefined' ) {
	module.exports = AU;
}


if( typeof exports !== 'undefined' ) {
	Object.defineProperty( exports, "__esModule", { value: true } );

	eval('exports.default = AU');
}


/**
 * Gets the relevant module
 *
 * @param  {array}  _parents - The _parents array
 * @param  {object} _pages   - The _pages object
 * @param  {string} _ID      - ID of the current page
 *
 * @return {string}          - The module ID for this section
 *
 * @disable-docs
 */
const GetModule = ( _parents, _pages, _ID ) => {
	let ID = _ID;

	if( _parents.length > 2 ) {
		ID = _parents[ 2 ];
	}

	return _pages[ ID ].module;
}

export default GetModule;

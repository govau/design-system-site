// https://github.com/chjj/marked

module.exports = exports = function renderer({ Marked, _ID, _relativeURL }) {

	/**
	 * Heading level classes
	 *
	 * @type {Object}
	 */
	const headingLevels = {
		'xs': 'au-display-xs',
		'sm': 'au-display-sm',
		'md': 'au-display-md',
		'lg': 'au-display-lg',
		'xl': 'au-display-xl',
		'xxl': 'au-display-xxl',
		'xxxl': 'au-display-xxxl',
	};


	/**
	 * Heading overwrite
	 *
	 * @param  {string}  text  - The text of the heading
	 * @param  {integer} level - The level of the heading
	 *
	 * @return {string}        - The rendered HTML
	 */
	Marked.heading = ( text, level ) => {
		let display;

		if( text.startsWith('[') ) {
			const displayText = text.split(']');
			display = displayText[ 0 ].substring( 1 );

			text = displayText.splice( 1 ).join(']');
		}
		else {
			display = Object.keys( headingLevels ).reverse()[ level ];
		}

		return `<h${ level }${ headingLevels[ display ] ? ` class="${ headingLevels[ display ] }"` : `` }>${ text }</h${ level }>`;
	};


	/**
	 * Link overwrite
	 *
	 * @param  {string} href  - The href attribute
	 * @param  {string} title - The title attribute
	 * @param  {string} text  - The text string
	 *
	 * @return {string}       - The rendered HTML
	 */
	Marked.link = ( href, title, text ) => {
		let attr = '';
		if( href.startsWith('http://') || href.startsWith('https://') ) {
			attr = ` rel="external"`;
		}
		else if( !href.startsWith('#') && !href.startsWith('mailto:') && typeof _relativeURL === 'function' ) {
			href = _relativeURL( href, _ID );
		}

		return `<a href="${ href }"${ title ? ` title="${ title }"` : '' }${ attr }>${ text }</a>`;
	};


	/**
	 * Pre-parse function
	 *
	 * @param  {string} markdown - The markdown coming from our partials
	 *
	 * @return {string}          - The markdown after we’re finished with it
	 */
	Marked.preparse = ( markdown ) => {
		return markdown
			.replace(/\™/g, '<span class="markdown-trademark">&trade;</span>')
			.replace(/\’/g, '<span class="markdown-quote">&rsquo;</span>')
			.replace(/\—/g, '<span class="markdown-mdash">&mdash;</span>')
			.replace(/\–/g, '<span class="markdown-ndash">&ndash;</span>')
			.replace(/\.\.\./g, '<span class="markdown-ellipsis">&hellip;</span>');
	};


	/**
	 * Table overwrite
	 *
	 * @param {string} header - The title of the table
	 * @param {string} body   - The body of the table
	 *
	 * @return {string}       - The table element
	 */
	Marked.table = ( header, body ) => {
		return `<div class="au-table au-table--responsive">\n<table>\n<thead>\n${ header }</thead>\n<tbody>\n${ body }</tbody>\n</table>\n</div>\n`;
	};


	/**
	 * Convert all applicable characters to HTML entities
	 *
	 * @param   {string} rawCode  - Unencoded code
	 *
	 * @returns {string}          - Encoded code
	 */
	function EncodeCode( rawCode ) {
		if( !rawCode ) {
			return "";
		}

		var html = rawCode.replace( /[^a-z0-9A-Z ]/g, function( character ) {
			return "&#" + character.charCodeAt() + ";";
		});

		return html;
	}


	/**
	 * Code overwrite
	 *
	 * @param {string} code - Code to be formatted
	 * @param {string} language   - The language of the code
	 *
	 * @return {string}       - The code element
	 */
	Marked.code = ( code, language ) => {
		const encodedCode = EncodeCode(code);
		if( !language ) {
			return `<div class="codebox"><pre><code>${ encodedCode }</code></pre></div>`;
		}

		const languageClass = language === 'nocopy' ? 'js-nocopy' : `language-${ language }`;
		return `<div class="codebox"><pre class="${ languageClass }"><code>${ encodedCode }</code></pre></div>`;
	}


	return Marked;
};

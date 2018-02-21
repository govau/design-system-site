import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The example component
 *
 * @disable-docs
 */
const Example = ({ _ID, _relativeURL, pagetitle, example, alignment, fullwidth }) => {
	const headContent = `
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<title>${ pagetitle } - Australian Government Open Language for Design</title>

	<link rel="shortcut icon" type="image/x-icon" href=${ _relativeURL( '/assets/img/favicon.ico', _ID ) }>
	<link rel="stylesheet" href=${ _relativeURL( '/assets/css/example.css', _ID ) } />

	<!--[if lte IE 9]>
		<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
		<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
	<![endif]-->

	<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />
		<body className="au-body">

			<div className="example__wrapper">
				<h2 className='example__title'>Example</h2>
				<main className={ `example${ alignment === 'center' ? ' example--center' : '' }${ fullwidth === true ? ' example--fullwidth' : '' }` }>
					<div className='content'>
						{ example }
					</div>
				</main>
			</div>

			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
			<script src={ _relativeURL( '/assets/js/iframe-resizer-contentWindow.js', _ID ) } />
		</body>
		</html>
	)
};

Example.propTypes = {
};

Example.defaultProps = {
	alignment: 'left',
	fullwidth: false
};

export default Example;

import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The example component
 *
 * @disable-docs
 */
const Example = ({ _ID, _relativeURL, pagetitle, modules, filter, tabbing, example }) => {

	const headContent = `
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<title>${ pagetitle } - Australian Government Open Language for Design</title>

	<link rel="shortcut icon" type="image/x-icon" href=${ _relativeURL( '/assets/img/favicon.ico', _ID ) }>
	<link rel="stylesheet" href=${ _relativeURL( '/assets/css/iframe/iframe.css', _ID ) } />
	<link rel="stylesheet" href=${ _relativeURL( '/assets/css/_uikit/uikit.min.css', _ID ) } />
	<link rel="stylesheet" href=${ _relativeURL( `/assets/css/a11y/a11y.css`, _ID ) } />

	${
		filter !== undefined
			?
				`<link id="filter-stylesheet" rel="stylesheet" ` +
					`data-deuteranopia=${ _relativeURL( `/assets/css/a11y/deuteranopia.css`, _ID ) } ` +
					`data-tritanopia=${ _relativeURL( `/assets/css/a11y/tritanopia.css`, _ID ) } ` +
					`href=${ _relativeURL( `/assets/css/a11y/${ filter }.css`, _ID ) }` +
				` />`
			: ''
	}

	<!--[if lte IE 9]>
		<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
		<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
	<![endif]-->

	<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }}  />
		<body className="au-grid">

			<main className="main au-body container-fluid">
				<div className="row">
					<div className="grids col-md-12">
						<div className={`${ tabbing ? 'js-tabbing' : '' }${ filter === 'protanopia' || filter === 'deuteranopia' ? 'js-filter' : '' }`}>
							<div className={`filter${ tabbing ? ' js-tabbing-area' : '' }`}>
								{ example }
							</div>
						</div>
					</div>
				</div>
			</main>

			<script src={ _relativeURL( '/assets/js/iframe-resizer-contentWindow.js', _ID ) } />
			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
			<script src={ _relativeURL( '/assets/js/a11y.js', _ID ) } />
		</body>
		</html>
		)
};

Example.propTypes = {
};

Example.defaultProps = {};

export default Example;

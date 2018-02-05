import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The example component
 *
 * @disable-docs
 */
const Example = ({ _ID, _relativeURL, pagetitle, modules, filter, tabbing, example }) => (
	<html>
	<head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />

		<title>{ pagetitle } - Australian Government Open Language for Design</title>

		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/assets/img/favicon.ico', _ID ) } />
		{
			modules.map( ( module, i ) => {
				if( Fs.existsSync( Path.normalize(`${ __dirname }/../../assets/css/${ module }.css`) ) ) {
					return (
						<link key={ i } rel="stylesheet" href={ _relativeURL( `/assets/css/${ module }.css`, _ID ) } />
					);
				}
			})
		}
		{
			filter && <link id="filter-stylesheet" rel="stylesheet"
				data-protanopia={ _relativeURL( `/assets/css/a11y/protanopia.css`, _ID ) }
				data-deuteranopia={ _relativeURL( `/assets/css/a11y/deuteranopia.css`, _ID ) }
				href={ _relativeURL( `/assets/css/a11y/${ filter }.css`, _ID ) }
			/>
		}

		<script src={ _relativeURL( '/assets/js/header.js', _ID ) } />
	</head>
	<body className="au-grid">

		<main className="main au-body container-fluid">
			<div className="row">
				<div className="grids col-md-12">
					<div className={`${ tabbing ? 'js-tabbing' : '' }${ filter === 'protanopia' || filter === 'deuteranopia' ? 'js-filter' : '' }`}>
						{ example }
					</div>
				</div>
			</div>
		</main>

		<script src={ _relativeURL( '/assets/js/iframe-resizer-contentWindow.js', _ID ) } />
		<script src={ _relativeURL( '/assets/js/a11y.js', _ID ) } />
	</body>
	</html>
);

Example.propTypes = {
};

Example.defaultProps = {};

export default Example;

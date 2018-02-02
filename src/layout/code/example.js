import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The example component
 *
 * @disable-docs
 */
const Example = ({ _ID, _relativeURL, pagetitle, modules, example, fullwidth }) => (
	<html>
	<head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />

		<title>{ pagetitle }</title>

		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/assets/img/favicon.ico', _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( `/assets/css/iframe.css`, _ID ) } />
		{
			modules.map( ( module, i ) => {
				if( Fs.existsSync( Path.normalize(`${ __dirname }/../../assets/css/${ module }.css`) ) ) {
					return (
						<link key={ i } rel="stylesheet" href={ _relativeURL( `/assets/css/${ module }.css`, _ID ) } />
					);
				}
			})
		}

		<script src={ _relativeURL( '/assets/js/header.js', _ID ) } />
	</head>
	<body className={ `au-body${ fullwidth ? '' : ' center'}` }>
		<div className='container'>
			{ example }
		</div>

		<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
		<script src={ _relativeURL( '/assets/js/iframe-resizer-contentWindow.js', _ID ) } />
	</body>
	</html>
);

Example.propTypes = {
};

Example.defaultProps = {};

export default Example;

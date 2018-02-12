import GetModule             from '../getModule';
import { GetComponentValue } from   '../getData';

import PropTypes from 'prop-types';
import React from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The example component
 *
 * @disable-docs
 */
const Live = ({ _ID, _parents, _pages, _relativeURL, _parseYaml, pagetitle, example, alignment }) => {
	const headContent = `
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width">
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<title>${ pagetitle } - Australian Government Open Language for Design</title>

	<link rel="shortcut icon" type="image/x-icon" href=${ _relativeURL( '/assets/img/favicon.ico', _ID ) }>
	<link rel="stylesheet" href=${ _relativeURL( '/assets/css/example/example.css', _ID ) } />
	<link rel="stylesheet" href=${ _relativeURL( '/assets/css/_uikit/uikit.min.css', _ID ) } />

	<!--[if lte IE 9]>
		<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
		<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
	<![endif]-->

	<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	const module = GetModule( _parents, _pages, _ID );

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />
		<body className="live-demo au-body au-grid">
			<header className="au-header">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<a className="au-direction-link au-direction-link--left" href={ `/components/${ module }` }>
								View { GetComponentValue( module, 'name', _parseYaml ) } overview
							</a>
						</div>
					</div>
				</div>
			</header>

			<div className={ `example${ alignment === 'center' ? ' example--center' : '' }` }>
				<div className='content'>
					{ example }
				</div>
			</div>

			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
			<script src={ _relativeURL( '/assets/js/iframe-resizer-contentWindow.js', _ID ) } />
		</body>
		</html>
	)
};

Live.propTypes = {
};

Live.defaultProps = {
	alignment: 'left'
};

export default Live;

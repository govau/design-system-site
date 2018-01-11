import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Component component
 */
const Component = ({ _ID, _relativeURL, pagetitle, header, sections, footer }) => (
	<html>
	<head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />

		<title>{ pagetitle }</title>

		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/assets/img/favicon.ico', _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( '/assets/css/style.css', _ID ) } />

		<script src={ _relativeURL( '/assets/js/header.js', _ID ) } />
	</head>
	<body className="au-grid mainmenu-is-closed">
		{ header }
		<div className="content-wrapper">
			<main className="main au-body container-fluid">
				<div className="row">
					<div className="grids col-md-12">
						{ sections }
					</div>
				</div>
			</main>
			{ footer }
		</div>
		<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
	</body>
	</html>
);

Component.propTypes = {
	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * sections: (partials)(4)
	 */
	sections: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

Component.defaultProps = {};

export default Component;

import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page component
 */
const Page = ({ _ID, _relativeURL, title, header, main, footer }) => (
	<html>
	<head>
		<meta charSet="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />

		<title>{ title }</title>

		<link rel="shortcut icon" type="image/x-icon" href={ _relativeURL( '/assets/img/favicon.ico', _ID ) } />
		<link rel="stylesheet" href={ _relativeURL( '/assets/css/style.css', _ID ) } />

		<script src={ _relativeURL( '/assets/js/header.js', _ID ) } />
	</head>
	<body className="au-grid">
		<div className="content-wrapper">
			{ header }

			<main className="main au-body container">
				<div className="row">
					<div className="grids col-md-12">
						{ main }
					</div>
				</div>
			</main>
		</div>

		{ footer }

		<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
	</body>
	</html>
);

Page.propTypes = {
	/**
	 * title: Homepage
	 */
	title: PropTypes.string.isRequired,

	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * main: (partials)(4)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;

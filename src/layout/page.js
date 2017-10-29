import PropTypes from "prop-types";
import React from "react";

/**
 * The page component
 */
const Page = ( page ) => (
 <html>
	<head>
		<title>GovUI - { page.title }</title>
		<link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico" />
		<link rel="stylesheet" href="assets/css/styles.css" />
		<script src="/assets/js/script.js" />
	</head>
	<body>
		<div className="uikit-body uikit-grid">
			{ page.header }
			<main>
				<div className="container">
					<div className="row">
						<div className="grids col-md-12">
							{ page.main }
						</div>
					</div>
				</div>
			</main>
			{ page.footer }
		</div>
	</body>
 </html>
);

Page.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired,
};


Page.defaultProps = {};


export default Page;

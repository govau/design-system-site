import PropTypes from "prop-types";
import React from "react";

/**
 * The page component
 */
const Page = ( props ) => (
 <html>
	<head>
		<title>{ props.title }</title>
		<link rel="shortcut icon" type="image/x-icon" href={ props._relativeURL( '/src/assets/img/favicon.ico', props._ID ) } />
		<link rel="stylesheet" href={ props._relativeURL( '/src/assets/css/style.css', props._ID ) } />
		<script src={ props._relativeURL( '/src/assets/js/header.js', props._ID ) } />
	</head>
	<body>

		<div className="uikit-body uikit-grid">
			{ props.header }
			<main>
				<div className="container">
					<div className="row">
						<div className="grids col-md-12">
							{ props.main }
						</div>
					</div>
				</div>
			</main>
			{ props.footer }
		</div>

		<script src={ props._relativeURL( '/src/assets/js/footer.js', props._ID ) } />
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

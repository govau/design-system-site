import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page component
 */
const Page = ({ _ID, _relativeURL, pagetitle, header, main, footer }) => {

	const headContent = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<title>${ pagetitle }</title>

<link rel="shortcut icon" type="image/x-icon" href=${ _relativeURL( '/assets/img/favicon.ico', _ID ) }>
<link rel="stylesheet" href=${ _relativeURL( '/assets/css/style.css', _ID ) }>

<!--[if lte IE 9]>
	<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
	<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
<![endif]-->

<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />
		<body className="au-grid mainmenu-is-closed">
			<div className="content-wrapper">
				{ header }

				<main className="main au-body container-fluid">
					<div className="row">
						<div className="grids col-md-12">
							{ main }
						</div>
					</div>
				</main>
			</div>

			{ footer }

			<div id="overlay" className="overlay"></div>

			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
		</body>
		</html>
	)
}


Page.propTypes = {
	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

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

import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page component
 */
const Page = ({
	_ID,
	_relativeURL,
	header,
	pagetitle,
	main,
	footer
}) => {

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

<!--[if gt IE 8]>
	<script src="${ _relativeURL( '/assets/js/prism.js', _ID ) }"></script>
<![endif]-->

<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />

		<body className="au-grid">

			{ header }
			<div className="page-wrapper">
				<div className="content-wrapper">
					<main id="content" className="main au-body container-fluid">
						<div className="row">
							<div className="col-md-12">
								<h1 className={ pagetitle === 'Homepage' ? 'sronly' : '' }>{ pagetitle }</h1>
								{ main }
							</div>
						</div>
					</main>
				</div>
				{ footer }
			</div>
			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
		</body>
		</html>
	);
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

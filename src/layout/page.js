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

<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
<link rel="manifest" href="/assets/favicons/site.webmanifest">
<link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#06262d">
<link rel="shortcut icon" href="/assets/favicons/favicon.ico">
<meta name="msapplication-config" content="/assets/favicons/browserconfig.xml">
<meta name="msapplication-TileColor" content="#000000">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow">
<meta name="author" content="GOLD team">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="GOLD">
<meta name="twitter:description" content="Government open language for design design system">
<meta name="twitter:name" content="GOLD">
<meta name="twitter:image" content="https://gold.service.gov.au/assets/favicons/img/gold.png">
<meta property="og:type" content="website">
<meta property="og:title" content="GOLD">
<meta property="og:site_name" content="GOLD">
<meta property="og:description" content="Government open language for design design system">
<meta property="og:image" content="https://gold.service.gov.au/assets/favicons/gold.jpg">
<meta property="og:url" content="https://gold.service.gov.au">

<title>${ pagetitle } - Australian Government Open Language for Design</title>

<link rel="stylesheet" href=${ _relativeURL( '/assets/css/style.css', _ID ) }>

<!--[if lte IE 9]>
	<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
	<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
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
								<h1 className={
									_ID === 'index' || _ID === '404'
										? 'sronly'
										: '' }>{ pagetitle }</h1>
								{ main }
							</div>
						</div>
					</main>
				</div>
				{ footer }
			</div>
			{
				_ID === 'download' ? <script src={ _relativeURL( '/assets/js/prism.js', _ID ) } /> : null
			}
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

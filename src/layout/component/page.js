import Navigation      from './../navigation';
import ComponentHeader from './header';
import ComponentFooter from './footer';
import AUskipLink      from '../../_uikit/layout/skip-link';
import GetData         from './../../helper/getData';


import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Path from 'path';
import Fs from 'fs';


/**
 * The page component for components
 */
const ComponentPage = ({
	_ID,
	_relativeURL,
	_parseYaml,
	_parseMD,
	_pages,
	_parents,
	_isDocs,
	header,
	showheader = true,
	component_nav,
	sidebar,
	pagetitle,
	main,
	footer,
	module = ''
}) => {

	const MODULE = GetData({
		filter: ( key, COMPONENTS ) => key === module,
		yaml: _parseYaml
	})[ 0 ];

	const headContent = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<link rel="apple-touch-icon" sizes="180x180" href=${ _relativeURL('/assets/favicons/apple-touch-icon.png', _ID ) }>
<link rel="icon" type="image/png" sizes="32x32" href=${ _relativeURL('/assets/favicons/favicon-32x32.png', _ID ) }>
<link rel="icon" type="image/png" sizes="16x16" href=${ _relativeURL('/assets/favicons/favicon-16x16.png', _ID ) }>
<link rel="manifest" href=${ _relativeURL('/assets/favicons/site.webmanifest', _ID ) }>
<link rel="mask-icon" href=${ _relativeURL('/assets/favicons/safari-pinned-tab.svg', _ID ) } color="#06262d">
<link rel="shortcut icon" href=${ _relativeURL('/assets/favicons/favicon.ico', _ID ) }>
<meta name="msapplication-config" content=${ _relativeURL('/assets/favicons/browserconfig.xml', _ID ) }>
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff">
<meta name="robots" content="index, follow">
<meta name="author" content="Digital Transformation Agency">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Australian Government Design System">
<meta name="twitter:description" content="${ module !== '' ? `${ MODULE.description } - ` : '' }Australian Government Design System">
<meta name="twitter:name" content="Australian Government Design System">
<meta name="twitter:image" content="https://designsystem.gov.au/assets/favicons/designsystem.jpg">
<meta property="og:type" content="website">
<meta property="og:title" content="${ pagetitle } - Australian Government Design System">
<meta property="og:site_name" content="Australian Government Design System">
<meta property="og:description" content="${ module !== '' ? `${ MODULE.description } - ` : '' }Australian Government Design System">
<meta property="og:image" content="https://designsystem.gov.au/assets/favicons/designsystem.jpg">
<meta property="og:url" content="https://designsystem.gov.au">

<title>${ pagetitle } - Australian Government Design System</title>

<link rel="stylesheet" href=${ _relativeURL( '/assets/css/style.css', _ID ) }>

<!--[if lte IE 9]>
	<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
	<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
<![endif]-->
<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />

		<body className="au-grid is-components">
			<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5Z7S8GB" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>

			{ header }
			<div className="page-wrapper">
				<div className="content-wrapper">
					<main className="au-body container-fluid">
						<div className="row content-matchheight">
							<div className="col-md-3 sidebar">
								{ sidebar }
							</div>
							<div id="content" tabIndex="-1" className="col-md-9 content">
								{
									showheader &&
									<Fragment>
										<AUskipLink links={[
											{
												link: '#component-documentation',
												text: `Skip to ${ pagetitle }`,
											},
										]} />
										<ComponentHeader
											_relativeURL={ _relativeURL }
											_parseYaml={ _parseYaml }
											_parseMD={ _parseMD }
											_parents={ _parents }
											_pages={ _pages }
											_ID={ _ID }
											_isDocs={ _isDocs }
										/>
										{ component_nav }
									</Fragment>
								}
								<div tabIndex="-1" className="componentdocumentation" id="component-documentation">
									{ main }
								</div>
								{
									showheader && <ComponentFooter _ID={ _ID } _parseYaml={ _parseYaml } _relativeURL={ _relativeURL } _pages={ _pages } _parents= { _parents } />
								}
							</div>
						</div>
					</main>
				</div>

				{ footer }
			</div>
			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
			{
				_ID !== 'components'
				?
					<Fragment>
						<script src={ _relativeURL( '/assets/js/prism.js', _ID ) } />
						<script src={ _relativeURL( '/assets/js/iframe-resizer.js', _ID ) } />
					</Fragment>
				: null
			}
		</body>
		</html>
	);
}

ComponentPage.propTypes = {
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

ComponentPage.defaultProps = {};

export default ComponentPage;

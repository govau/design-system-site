import React from 'react';

import GetModule             from '../../helper/getModule';
import { GetComponentValue } from '../../helper/getData';


/**
 * The example component
 *
 * @disable-docs
 */
const Example = ({
	pagetitle,
	tabbing,
	examples,
	fullwidth,
	livedemo,
	alignment,
	alignContent,
	templateCSS,
	_ID,
	_relativeURL,
	_parseYaml,
	_parents,
	_pages
}) => {
	const componentID = _ID.split( '/' )[ 1 ];


	const module = GetModule( _parents, _pages, _ID );

	const componentTitle = GetComponentValue( module, 'name', _parseYaml );

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
<meta name="twitter:description" content="Inclusive design, open-source code and shared insights">
<meta name="twitter:name" content="Australian Government Design System">
<meta name="twitter:image" content="https://designsystem.gov.au/assets/favicons/designsystem.jpg">
<meta property="og:type" content="website">
<meta property="og:title" content="${ pagetitle ? pagetitle : componentTitle + ` example` } - Australian Government Design System">
<meta property="og:site_name" content="Australian Government Design System">
<meta property="og:description" content="Inclusive design, open-source code and shared insights">
<meta property="og:image" content="https://designsystem.gov.au/assets/favicons/designsystem.jpg">
<meta property="og:url" content="https://designsystem.gov.au">

<title>${ pagetitle ? pagetitle : componentTitle + ` example` } - Australian Government Design System</title>

<link rel="stylesheet" href=${ _relativeURL( '/assets/css/example.css', _ID ) } />
<link rel="stylesheet" href=${ _relativeURL( `/assets/css/${templateCSS}`, _ID ) } />

<!--[if lte IE 9]>
	<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
	<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
<![endif]-->
<script>var $html=document.documentElement;if($html.classList)$html.classList.remove("no-js"),$html.classList.add("js");else{var className="no-js";$html.className=$html.className.replace(new RegExp("(^|\\b)"+className.split(" ").join("|")+"(\\b|$)","gi")," "),$html.className+=" js"}</script>`;

	let colWidth = 'col-md-12';
	if( alignment === 'inline' && examples.length == 2 ){
		colWidth = 'col-sm-6';
	}

	let exampleLayout = Object.values( examples ).map( ( example, key ) => {
		if( example.style ){
			return (
				<div key={ key }>
					<div className={ `example example-${ componentID }` }>
						{ example.template }
					</div>
				</div>
			);
		}

		return (
			<div key={ key }>
				<div className={ `example example-${ componentID }` }>
					{ example.template }
				</div>
			</div>
		);
	});
	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }}  />
		<body className={ `au-grid${ livedemo ? ' live-demo' : '' }` }>
			{
				livedemo
					? <header className="header__example">
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-12">
										<a className="au-direction-link au-direction-link--left" href={ _relativeURL( `/templates/${ module }`, _ID ) }>
											View { componentTitle } overview
										</a>
									</div>
								</div>
							</div>
						</header>
					: ''
			}
			<main className={`${ fullwidth ? '' : ' example--align-middle' }}`}>
				<div className={`container-fluid content${ alignContent === 'center' ? ' content--center' : ''}`}>
					<div className="row">
						{ exampleLayout }
					</div>
				</div>

			</main>
			<script src={ _relativeURL( '/assets/js/iframe-resizer-contentWindow.js', _ID ) } />
			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
		</body>
		</html>
		)
};

Example.propTypes = {
};

Example.defaultProps = {};

export default Example;

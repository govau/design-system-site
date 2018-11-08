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
	filter,
	tabbing,
	examples,
	fullwidth,
	livedemo,
	alignment,
	alignContent,
	_ID,
	_relativeURL,
	_parseYaml,
	_parents,
	_pages
}) => {
	const componentID = _ID.split( '/' )[ 1 ];

	const a11yPage = tabbing || filter ? true : false;

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
<meta name="description" content="Inclusive design, open-source code and shared insights">
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
				<div className={ `${ colWidth } col-${ example.style }` } key={ key }>
					<div className={ `example example-${ componentID }` }>
						{ example.template }
					</div>
				</div>
			);
		}

		return (
			<div className={ `${ colWidth }` } key={ key }>
				<div className={ `example example-${ componentID }` }>
					{ example.template }
				</div>
			</div>
		);
	});

	const a11yFilter = <svg
		aria-hidden="true"
		className="svg-filter"
		xmlns="http://www.w3.org/2000/svg"
		version="1.1">
		<defs>
			<filter id="protanopia">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.567, 0.433, 0,     0, 0
									0.558, 0.442, 0,     0, 0
									0,     0.242, 0.758, 0, 0
									0,     0,     0,     1, 0"/>
			</filter>
			<filter id="protanomaly">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.817, 0.183, 0,     0, 0
									0.333, 0.667, 0,     0, 0
									0,     0.125, 0.875, 0, 0
									0,     0,     0,     1, 0"/>
			</filter>
			<filter id="deuteranopia">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.625, 0.375, 0,   0, 0
									0.7,   0.3,   0,   0, 0
									0,     0.3,   0.7, 0, 0
									0,     0,     0,   1, 0"/>
			</filter>
			<filter id="deuteranomaly">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.8,   0.2,   0,     0, 0
									0.258, 0.742, 0,     0, 0
									0,     0.142, 0.858, 0, 0
									0,     0,     0,     1, 0"/>
			</filter>
			<filter id="tritanopia">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.95, 0.05,  0,     0, 0
									0,    0.433, 0.567, 0, 0
									0,    0.475, 0.525, 0, 0
									0,    0,     0,     1, 0"/>
			</filter>
			<filter id="tritanomaly">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.967, 0.033, 0,     0, 0
									0,     0.733, 0.267, 0, 0
									0,     0.183, 0.817, 0, 0
									0,     0,     0,     1, 0"/>
			</filter>
			<filter id="achromatopsia">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.299, 0.587, 0.114, 0, 0
									0.299, 0.587, 0.114, 0, 0
									0.299, 0.587, 0.114, 0, 0
									0,     0,     0,     1, 0"/>
			</filter>
			<filter id="achromatomaly">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.618, 0.320, 0.062, 0, 0
									0.163, 0.775, 0.062, 0, 0
									0.163, 0.320, 0.516, 0, 0
									0,     0,     0,     1, 0"/>
			</filter>
		</defs>
	</svg>;


	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }}  />
		<body className={ `au-grid${ a11yPage ? ' a11y' : '' }${ livedemo ? ' live-demo' : '' }` }>
			{
				livedemo
					? <header className="header__example">
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-12">
										<a className="au-direction-link au-direction-link--left" href={ _relativeURL( `/components/${ module }`, _ID ) }>
											View { componentTitle } overview
										</a>
									</div>
								</div>
							</div>
						</header>
					: ''
			}
			{ filter ? a11yFilter : '' }
			<main className={`${ fullwidth ? '' : ' example--align-middle' }${ tabbing ? ' js-tabbing' : '' }${ filter === 'protanopia' || filter === 'deuteranopia' ? ' js-filter' : '' }${ filter ? ` js-filter--${ filter}` : '' }`}>
				<div className={`container-fluid content${ alignContent === 'center' ? ' content--center' : ''}${ tabbing ? ' js-tabbing-area' : '' }`}>
					<div className="row">
						{ exampleLayout }
					</div>
				</div>
				{
					filter
						? <p className="filter-fail">Unfortunately this feature is not available in this browser.</p>
						: ''
				}
			</main>
			<script src={ _relativeURL( '/assets/js/iframe-resizer-contentWindow.js', _ID ) } />
			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
			{ a11yPage ? <script src={ _relativeURL( '/assets/js/a11y.js', _ID ) } /> : '' }
		</body>
		</html>
		)
};

Example.propTypes = {
};

Example.defaultProps = {};

export default Example;

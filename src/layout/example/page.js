import AUdirectionLink from '../../_auds/layout/direction-links';

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
}) => {
	const componentID = _ID.split( '/' )[ 1 ];

	const a11yPage = tabbing || filter ? true : false;

	const module = GetModule( _parents, _ID );
	const componentTitle = GetComponentValue( module, 'name', _parseYaml );

	const description = `${ componentTitle } example on a page.`;

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
<meta name="description" content="${ description }">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Australian Government Design System">
<meta name="twitter:description" content="${ description }">
<meta name="twitter:name" content="Australian Government Design System">
<meta name="twitter:image" content="https://designsystem.gov.au/assets/favicons/designsystem.jpg">
<meta property="og:type" content="website">
<meta property="og:title" content="${ pagetitle ? pagetitle : componentTitle + ` example` } - Australian Government Design System">
<meta property="og:site_name" content="Australian Government Design System">
<meta property="og:description" content="${ description }">
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
					<div className={ `example  example-${ componentID }` }>
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
		className="svg-filter sronly"
		xmlns="http://www.w3.org/2000/svg"
		version="1.1">
		<defs>
			<filter id="filter-deuteranopia">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.625, 0.375, 0,   0, 0
									0.7,   0.3,   0,   0, 0
									0,     0.3,   0.7, 0, 0
									0,     0,     0,   1, 0"/>
			</filter>
			<filter id="filter-tritanopia">
				<feColorMatrix
					in="SourceGraphic"
					type="matrix"
					values="0.95, 0.05,  0,     0, 0
									0,    0.433, 0.567, 0, 0
									0,    0.475, 0.525, 0, 0
									0,    0,     0,     1, 0"/>
			</filter>
		</defs>
	</svg>;


	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }}  />
		<body className={ `au-grid${ a11yPage ? ' a11y' : '' }${ livedemo ? ' live-demo' : '' }${ tabbing ? ' tabbing-frame' : '' }` }>
			{
				livedemo
					? <header className="header__bar">
							<AUdirectionLink
								link={ _relativeURL( `/components/${ module }`, _ID ) }
								direction="left"
								text={`View ${ componentTitle } overview`} />
						</header>
					: ''
			}
			{ filter ? a11yFilter : '' }
			<main className={`${ fullwidth ? '' : ' example--align-middle' }${ tabbing ? ' js-tabbing' : '' }${ filter === 'protanopia' || filter === 'deuteranopia' ? ' js-filter' : '' }${ filter ? ` js-filter--${ filter}` : '' }`}>
				{ filter === 'deuteranopia'? 
					<div className=" bar tabs" role="tablist">
						<button role="tab" type="button" className="au-btn au-btn--tertiary a11y-button js-filter-btn is-active tab-item--active" aria-controls={ `iframe-code-example-${ componentID }` } data-filter="deuteranopia">
							<span className="sronly">Apply </span>Deuteranopia<span className="sronly"> color filter</span>
						</button>
						<button role="tab" type="button" className="au-btn au-btn--tertiary a11y-button js-filter-btn" aria-controls={ `iframe-code-example-${ componentID }` } data-filter="tritanopia">
							<span className="sronly">Apply </span>Tritanopia<span className="sronly"> color filter</span>
						</button>
					</div>
					: "" 
				}
				{ tabbing ? 
					<div class="bar">
						<button type="button" className="au-btn au-btn--tertiary a11y-button js-tabbing-switch">Show tabbing</button>
					</div>	
					: ""
				}
				<div id={ `iframe-code-example-${ componentID }` } className={`container-fluid content${ alignContent === 'center' ? ' content--center' : ''}${ tabbing ? ' js-tabbing-area' : '' }` } >
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

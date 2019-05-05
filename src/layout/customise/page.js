import AUtextInput from '../../_auds/layout/text-inputs';
import AUdirectionLink from '../../_auds/layout/direction-links';
import { AUradio } from '../../_auds/layout/control-input';
import AUbutton from '../../_auds/layout/buttons';


import React from "react";
import Path from "path";
import Fs from "fs";

/**
 * The example component
 *
 * @disable-docs
 */
const Customise = ({ _ID, _relativeURL, _parseYaml }) => {
	const templatesDir = Path.normalize(
		`${__dirname}/../../../content/templates/`
	);
	const templatesYaml = Fs.readFileSync(`${templatesDir}/_all.yml`, "utf-8");
	const templates = _parseYaml(templatesYaml);

	const templateID = _ID.split("/")[1];
	const template = templates[templateID];

	const pagetitle = `Customise ${ template.name } page template`;
	
	const templateNameLowerCase = template.name.toLowerCase();
	const description = `Customise ${ templateNameLowerCase } page template with different colour blindness filters, custom colour schemes and preset palettes.`;

	const isCloud = process.env.NODE_ENV === "master" || process.env.NODE_ENV === "develop";

	// What template page do we want to serve?
	const iframeSrc = isCloud
		? `/chameleon/${ templateNameLowerCase }`
		: `http://localhost:3000/chameleon/${ templateNameLowerCase }`;

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
<meta property="og:title" content="${pagetitle} - Australian Government Design System">
<meta property="og:site_name" content="Australian Government Design System">
<meta property="og:description" content="${ description }">
<meta property="og:image" content="https://designsystem.gov.au/assets/favicons/designsystem.jpg">
<meta property="og:url" content="https://designsystem.gov.au">

<title>${ pagetitle } - Australian Government Design System</title>

<link rel="stylesheet" href=${ _relativeURL( '/assets/css/customise.css', _ID ) }>

<!--[if lte IE 9]>
	<script src="${ _relativeURL( '/assets/js/html5shiv.js', _ID ) }"></script>
	<script src="${ _relativeURL( '/assets/js/respond.js', _ID ) }"></script>
<![endif]-->
<script src=${ _relativeURL( '/assets/js/header.js', _ID ) }></script>`;

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

	const colorOptions = [{
		text: "Text",
		action: "Action",
		// focus: "Focus",
		background: "Background",
	},
	{
		textDark: "Dark text",
		actionDark: "Dark action",
		// focusDark: "Dark focus",
		backgroundDark: "Dark background"
	}];

	const palette = {
		defaultPalette: "Default",
		green: "Goanna green",
		blue: "Bluetongue blue",
	}

	const colorBlindnesses = {
		none: "No colour blindness",
		grayscale: "Grayscale",
		deuteranopia: "Deuteranopia",
		tritanopia: "Tritanopia",
	};

	const CustomColorInputs = colorOptions.map( ( palette, i ) => (
		<div className="col-xs-6" key={ i }>
			{
				Object.entries( palette ).map( ([ colorID, colorName ], i ) => (
					<div className="form-item" key={ i }>
						<label htmlFor={ colorID }>{ colorName }</label>
						<AUtextInput aria-controls="chameleon" id={ colorID } name={ colorID } block></AUtextInput>
						<span className="color-square" id={ `color-square--${colorID}` }></span>
					</div>
				) )
			}
		</div>
	) );

	const ColorBlindnessRadios = Object.entries( colorBlindnesses )
		.map( ([ colorBlindnessID, colorBlindnessName ], i ) => (
			<div className="form-item" key={ i }>
				<AUradio
					aria-controls="chameleon"
					label={ colorBlindnessName }
					name="a11y"
					id={ colorBlindnessID }
					defaultChecked={ i === 0 }></AUradio>
			</div>
		) );

	const PaletteRadios = Object.entries( palette )
		.map( ([ colorID, colorName ], i ) => (
			<div className="form-item" key={ i }>
				<AUradio
					aria-controls="chameleon"
					label={ colorName }
					name="palette"
					id={ colorID }
					defaultChecked={ i === 0 }></AUradio>
			</div>
	) );

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }} />
		<body className={ `au-grid live-demo customise-page ${ isCloud ? '' : 'chameleon-staging' }` }>
			{ a11yFilter }
			<header className="header__bar">
				<AUdirectionLink
					text={ `View ${ template.name } template overview` }
					link={ `/templates/${ templateID }` }
					direction="left" />
			</header>
			<main>
				<div className="customise au-body au-card au-card--shadow">
					<h1 className="au-display-lg">Customise template</h1>
					<form className="customise__form">
						<fieldset className="au-fieldset custom-color">
							<legend className="au-display-4">Customise the colors</legend>
							<p className="fieldset__description">Customise the colours or <AUbutton className="toggle-color-input" as="tertiary">choose a palette</AUbutton>.</p>
							<div className="row">
								{ CustomColorInputs }
							</div>
						</fieldset>
						<fieldset className="au-fieldset palette">
							<legend className="au-display-4">Select a palette</legend>
							<p className="fieldset__description">Choose a palette or <AUbutton className="toggle-color-input" as="tertiary">customise the colours</AUbutton>.</p>
							{ PaletteRadios }
						</fieldset>
						<fieldset className="au-fieldset a11y">
							<legend className="au-display-4">Colour blindness</legend>
							<p className="fieldset__description">View the template with colour blindness</p>
							{ ColorBlindnessRadios }
						</fieldset>
						{/* Need to show this on older browsers */}
						<ul className="au-btn__list au-btn__list--inline customise-btn--hide">
							<li><AUbutton type="submit">Customise</AUbutton></li>
							<li><AUbutton id="btn-share" as="secondary" className="btn-copy icon icon--copy">Copy link</AUbutton></li>
							<li><AUbutton link={ "/" + _ID } as="tertiary">Reset</AUbutton></li>
						</ul>
					</form>
				</div>
				<div id="chameleon" role="region">
					<div className="au-toast au-toast--hidden">
						<div className="au-toast__content au-body au-body--dark">
							<p>Loading template with new colours.</p>
						</div>
					</div>
					<div className="au-card au-card--shadow">
						<iframe title="Custom full page template" src={ iframeSrc } />
					</div>
				</div>
			</main>
			<script src={_relativeURL("/assets/js/footer.js", _ID)} />
			<script src={_relativeURL("/assets/js/chameleon.js", _ID)} />
		</body>
		</html>
	);
};

Customise.propTypes = {};

Customise.defaultProps = {};

export default Customise;

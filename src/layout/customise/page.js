import React from 'react';

/**
 * The example component
 *
 * @disable-docs
 */
const Customise = ({
	pagetitle,
	alignContent,
	_ID,
	_relativeURL,
	_parseYaml,
	_parents,
	_pages
}) => {
	const parentId = _parents[ _parents.length - 2 ];
	const parentData = _pages[parentId];
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
<meta property="og:title" content="${ pagetitle } - Australian Government Design System">
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

const iframes = [
	{ width: '320px', device: 'mobile' },
	{ width: '768px', device: 'tablet' },
	{ width: '1024px', device: 'desktop' },
]

	return (
		<html>
		<head dangerouslySetInnerHTML={{ __html: headContent }}  />
		<body className={ `au-grid live-demo"` }>
			<header className="header__example">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<a className="au-direction-link au-direction-link--left" href={ `/${ parentId }` }>
								Go back to { parentData.pagetitle }
							</a>
						</div>
					</div>
				</div>
			</header>
			<svg
				aria-hidden="true"
				className="svg-filter"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1">
				<defs>
					<filter id="deuteranopia">
						<feColorMatrix
							in="SourceGraphic"
							type="matrix"
							values="0.625, 0.375, 0,   0, 0
									0.7,   0.3,   0,   0, 0
									0,     0.3,   0.7, 0, 0
									0,     0,     0,   1, 0"/>
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
				</defs>
			</svg>
			<main>
				<section className="container-fluid">
					<div className="chameleon-wrapper">
						{
							iframes.map( ( frame ) => {
								return (
								<iframe className={`chameleon-wrapper__iframe ${frame.device}`} width={frame.width} src={
										process.env.NODE_ENV == "production" 
										? "https://designsystem.gov.au/chameleon" 
										: 'http://localhost:3000/chameleon'}
								/> )
							})
						}
					</div>
				</section>

				<section className="container-fluid au-body">
					<div className="chameleon-toolkit">
						<div className="row">
						{/* CUSTOMISE PALLETTE (FIX THESE CLASSES)*/}
							<div className="col-md-8 chameleon-toolkit__container hidden chameleon-toolkit__container--custom">
								<h2>hello</h2>
								<div className="row">
									<div className="col-sm-6">
										<div class="form-item">
											<label class="label--block" for="text">Text</label>
											<input class="au-text-input" name="text" id="text" type="text" />
										</div>
										<div class="form-item">
											<label class="label--block" for="action">Action</label>
											<input class="au-text-input" name="action" id="action" type="text" />
										</div>
										<div class="form-item">
											<label class="label--block" for="background">Background</label>
											<input class="au-text-input" name="background" id="background" type="text" />
										</div>
										<div class="form-item">
											<button id="show-presets" class="au-btn au-btn--secondary">Back to presets</button>
										</div>
									</div>
									<div className="col-sm-6">
										<div class="form-item">
											<label class="label--block" for="textDark">Dark text</label>
											<input class="au-text-input" name="textDark" id="textDark" type="text"/>
										</div>
										<div class="form-item">
											<label class="label--block" for="actionDark">Dark action</label>
											<input class="au-text-input" name="actionDark" id="actionDark" type="text"/>
										</div>
										<div class="form-item">
											<label class="label--block" for="backgroundDark">Dark background</label>
											<input class="au-text-input" name="backgroundDark" id="backgroundDark" type="text"/>
										</div>
										<div class="form-item">
											<button id="" class="au-btn">Submit</button>
										</div>
									</div>
								</div>
							</div>
							{/* PRESET OPTIONS*/}
							<div className="col-md-4 chameleon-toolkit__container chameleon-toolkit__container--presets">
								<h2>Presets</h2>
								<label className="au-control-input au-control-input--block">
									<input className="au-control-input__input" type="radio" name="preset-theme" value="green"/>
									<span className="au-control-input__text">Green</span>
								</label>

								<label className="au-control-input au-control-input--block">
									<input className="au-control-input__input" type="radio" name="preset-theme" value="blue"/>
									<span className="au-control-input__text">Blue</span>
								</label>

								<label className="au-control-input au-control-input--block">
									<input className="au-control-input__input" type="radio" name="preset-theme" value="default"/>
									<span className="au-control-input__text">Default</span>
								</label>
								<br/> {/* FIX THIS */}
								<button id="show-color-pallette" class="au-btn">Customise</button>
							</div>
							{/* A11Y OPTIONS*/}
							<div className="col-md-4 chameleon-toolkit__container chameleon-toolkit__container--presets--a11y">
								<h2>Accessibility </h2>
								<label class="au-control-input au-control-input--block">
									<input class="au-control-input__input" type="radio" name="a11y-filter" value="deuteranopia" />
									<span class="au-control-input__text">Deuteranopia</span>
								</label>
	
								<label class="au-control-input au-control-input--block">
									<input class="au-control-input__input" type="radio" name="a11y-filter" value="tritanopia" />
									<span class="au-control-input__text">Tritanopia</span>
								</label>
		
								<label class="au-control-input au-control-input--block">
									<input class="au-control-input__input" type="radio" name="a11y-filter" value="default"/>
									<span class="au-control-input__text">Default</span>
								</label>
							</div>
						</div>
					</div>
				</section>
			</main>
			<script src={ _relativeURL( '/assets/js/footer.js', _ID ) } />
		</body>
		</html>
		)
};

Customise.propTypes = {};

Customise.defaultProps = {};

export default Customise;

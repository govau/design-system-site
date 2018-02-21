import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page component
 */
const Page = ({
	_ID,
	header,
	pagetitle,
	main,
	footer
}) => {

	const headContent = `
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<meta http-equiv="x-ua-compatible" content="ie=edge">

<title>${ pagetitle } - Australian Government Open Language for Design</title>

<base href="##url##">

<link rel="shortcut icon" type="image/x-icon" href="/assets/img/favicon.ico">
<link rel="stylesheet" href="/assets/css/style.css">

<!--[if lte IE 9]>
	<script src="/assets/js/html5shiv.js"></script>
	<script src="/assets/js/respond.js"></script>
<![endif]-->

<script src="/assets/js/header.js"></script>`;

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
				_ID === 'download' ? <script src="/assets/js/prism.js" /> : null
			}
			<script src="/assets/js/footer.js" />
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

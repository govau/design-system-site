import PropTypes from 'prop-types';
import React from 'react';


/**
 * The gov.au header
 *
 * Use for: thing thing thing
 */
const HeaderGovAU = ({ _ID, _relativeURL }) => (
	<div className="headergovau">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<a href="/" className="headergovau__logo">

						<svg className="headergovau__logo__svg" role="img" title="The Commonwealth Star">
							<title>Gov AU Star</title>
							<desc>A six pointed star representing the commonwealth star.</desc>
							<use xlinkHref={ _relativeURL( '/src/assets/svg/map.svg#star', _ID ) }/>
						</svg>

						<span className="headergovau__logo__title">GOV.AU</span>
					</a>
				</div>
			</div>
		</div>
	</div>
);


HeaderGovAU.propTypes = {
};


export default HeaderGovAU;

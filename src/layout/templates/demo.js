import React, { Fragment } from 'react';
import Path  from 'path';
import Fs    from 'fs';

import AUbutton  from '../../_uikit/layout/buttons';


/**
 * The NavigationAccordion component
 */
const TemplateDemo = ({ _ID, _body, _relativeURL }) => {
	const templateID = _ID.split( '/' )[ 1 ];

	return (
		<div className="template-demo">
			<div className="row">
				<div className="col-md-6">
					<div className="template-card__image au-card au-card--shadow">
						<a href="customise">
							<img
								alt={ `${ templateID } page template` }
								className="template-demo_img"
								src={ _relativeURL( `/assets/img/templates/${ templateID }.jpg`, _ID ) }
							/>
						</a>
					</div>
				</div>
				<div className="col-md-6 ">
					{ _body }
					<ul className="au-btn__list au-btn__list--inline">
						<li><AUbutton link="https://github.com/govau/uikit-starter/archive/master.zip">
							Download
						</AUbutton></li>
						<li><AUbutton link="/get-started/starter-kit" as='secondary'>
							Get started
						</AUbutton></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

TemplateDemo.propTypes = {};

TemplateDemo.defaultProps = {};

export default TemplateDemo;

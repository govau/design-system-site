import React, { Fragment } from 'react';
import Path  from 'path';
import Fs    from 'fs';

import AUbutton  from '../../_auds/layout/buttons';


/**
 * The NavigationAccordion component
 */
const TemplateDemo = ({ _ID, _body, _relativeURL }) => {
	const templateID = _ID.split( '/' )[ 1 ];

	return (
		<div className="template-demo">
			<div className="row">
				<div className="col-sm-6">
					<a href="customise" className="template-card__image browser-bar au-card au-card--shadow">
						<img
							alt={ `${ templateID } page template` }
							className="template-demo_img"
							src={ _relativeURL( `/assets/img/templates/${ templateID }.jpg`, _ID ) }
						/>
					</a>
				</div>
				<div className="col-sm-6">
					{ _body }
					<ul className="au-btn__list au-btn__list--inline">
						<li><AUbutton link="https://github.com/govau/design-system-components-starter/archive/master.zip">
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

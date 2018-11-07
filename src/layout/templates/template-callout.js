import AUbutton  from '../../_uikit/layout/buttons';
import GetModule from '../../helper/getModule';

import PropTypes from 'prop-types';
import React     from 'react';


/**
 * The Discussion Intro component
 */
const TemplateCallout = ({ buttons, _relativeURL, image, description, _body, _parents, _pages, _ID }) => {

	const module = GetModule( _parents, _pages, _ID );
	return (
			<div className="template-callout container-fluid">
				<div className="row">
					<div className="col-sm-4">
						<div className="row">
							<div className="template-callout__text">
								{_body}
							</div>
						</div>
						<div className="row">
						{buttons.map( (button, i) => {
							return (
								<a key={i} href={button.btnUrl} className={ `au-btn au-btn--block ${button.btnType === 'primary' ? '': 'au-btn--secondary'}`}>{button.btnText}</a>
							)
						})}
						</div>
					</div>
					<div className="col-sm-7 col-sm-offset-1">
						<img src={image} alt={description} className="au-responsive-media-img template-callout__image"/>
					</div>
				</div>
			</div>
	);
}


TemplateCallout.propTypes = {
};

TemplateCallout.defaultProps = {
	btntype: "secondary",
	btntext: "Read more",
};

export default TemplateCallout;

import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Intro component
 */
const Intro = ({ title, imgalt, imgurl, button, slackButton, _relativeURL, _ID, _body }) => (
	<div className="intro">
		<div className="row">

			<div className="col-sm-12 col-md-6 col-md-push-6">
				<div className="intro__img">
					<img className="au-responsive-media-img"
						src={ _relativeURL( imgurl , _ID ) }
						alt={ imgalt } />
				</div>
			</div>

			<div className="intro__text col-sm-12 col-md-5 col-md-pull-6">
				{ title ? <h2 className="intro__title">{ title }</h2> : '' }
				<div className="content">{ _body }</div>
				{
					button && slackButton
						?
							<div className="intro__buttons">
								<a href={ button.link } className={ `au-btn au-btn--${ button.type }${ button.icon ? ` icon icon--${ button.icon }` : '' }` }>
									{ button.text }
								</a>
								<a href={ slackButton.link } className={ `au-btn au-btn--${ slackButton.type }${ slackButton.icon ? ` icon icon--${ slackButton.icon }`: '' }` }>
									{ slackButton.text }
								</a>
							</div>
						: ''
				}
			</div>

		</div>
	</div>
);

Intro.propTypes = {
	/**
	 * title: About
	 */
	title: PropTypes.string,

	/**
	 * imgurl: /assets/img/placeholder/500x400.png
	 */
	imgurl: PropTypes.string.isRequired,

	/**
	 * imgalt: Intro Alt Tag
	 */
	imgalt: PropTypes.string.isRequired,

	/**
	 * button:
	 *   link: #
	 *   text: Button text
	 *   type: secondary
	 *   icon: github
	 */
	button: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string,
		type: PropTypes.string,
		icon: PropTypes.string,
	}),

	/**
	 * slackButton:
	 *   link: #
	 *   text: Button text
	 *   type: secondary
	 *   icon: github
	 */
	slackButton: PropTypes.shape({
		link: PropTypes.string,
		text: PropTypes.string,
		type: PropTypes.string,
		icon: PropTypes.string,
	}),

	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};

export default Intro;

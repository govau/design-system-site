import PropTypes from 'prop-types';
import React from 'react';


/**
 * The Component Status
 */
 const ComponentStatus = ({ _body }) => (
	<div className="componentStatus">

			<h2 className="componentStatus__title">Released</h2>

			<dl className="componentStatus__list">
				<dt>Changelog</dt>
				<dd><a href="https://github.com/govau/uikit/blob/master/packages/buttons/CHANGELOG.md">Version 0.5.0</a></dd>

				<dt>Get involved</dt>
				<dd><a href="https://www.npmjs.com/package/@gov.au/buttons">@gov.au/buttons</a></dd>

				<dt>Tags</dt>
				<dd>
					{ /** NOTE: <a> needs space after for wrapping, No space becomes 1 long inline-element **/}
					<a href="#">Buttons,</a> <a href="#">Component,</a> <a href="#">Forms,</a> <a href="#">CTA</a>
				</dd>

				<dt>Requires</dt>
				<dd>
					<a href="#">Core,</a>
					<a href="#">Body</a>
				</dd>

				<dt>Contributors</dt>
				<dd>
					<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
					<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
					<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
					<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
					<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
					<a href="#" className="avitar"><img src="http://via.placeholder.com/24x24" alt="Username" title="Username"/></a>
					<a href="#">20+</a>
				</dd>
			</dl>

	</div>
 );

ComponentStatus.propTypes = {
	/**
	 * tiles:
	 */
	tiles: PropTypes.arrayOf(
		PropTypes.shape({
		})
	).isRequired,
};

ComponentStatus.defaultProps = {};

export default ComponentStatus;

import { AUcardList } from '../card';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The component released listing of cards
 */
const ComponentReleased = ({ cardList, _body }) => (
	<Fragment>
		{ _body }

		<div className="row">
			<AUcardList
				cards={ cardList.cards }
				appearance={ cardList.appearance }
				columnSize={ cardList.columnSize }
				matchHeight={ cardList.matchHeight }
				centered={ cardList.centered }
				/>
		</div>
	</Fragment>
);


ComponentReleased.propTypes = {

	/**
	 * cardList:
	 *   columnSize: col-xs-6 col-sm-3
	 *   matchHeight: true
	 *   appearance: shadow
	 *   cards:
	 *   - rows:
	 *     - type: image
	 *       image: http://via.placeholder.com/300x300/f5f5f5/636363
	 *       description: A 300x300 image
	 *       fullwidth: true
	 *     - type: heading
	 *       headingSize: '3'
	 *       text: Hello world
	 *       link: #
	 *     link: #
	 *   - rows:
	 *     - type: image
	 *       image: http://via.placeholder.com/300x300/f5f5f5/636363
	 *       description: A 300x300 image
	 *       fullwidth: true
	 *     - type: heading
	 *       headingSize: '3'
	 *       text: Boop
	 *       link: #
	 */
	cardList: PropTypes.shape({
		apperance: PropTypes.string,
		centered: PropTypes.string,
		columnSize: PropTypes.string,
		matchHeight: PropTypes.bool,
		cards: PropTypes.arrayOf(
			PropTypes.shape({
				apperance: PropTypes.string,
				centered: PropTypes.string,
				link: PropTypes.string,
				rows: PropTypes.arrayOf(
					PropTypes.shape({
						type: PropTypes.string.isRequired,
						image: PropTypes.string,
						description: PropTypes.string,
						text: PropTypes.string,
						link: PropTypes.string,
						fullwidth: PropTypes.bool,
						headingSize: PropTypes.string,
						html: PropTypes.node,
					})
				)
			})
		)
	}).isRequired
};

export default ComponentReleased;

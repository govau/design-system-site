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
				columnSize={ cardList.columns }
				matchHeight={ cardList.matchHeight }
				centered={ cardList.centered }
				/>
		</div>
	</Fragment>
);


ComponentReleased.propTypes = {
	cardList: PropTypes.arrayOf(
		PropTypes.shape({
			apperance: PropTypes.string,
			columnSize: PropTypes.string,
			matchHeight: PropTypes.bool,
			centered: PropTypes.string,
			cards: PropTypes.arrayOf(
				PropTypes.shape({
					link: PropTypes.string,
					rows: PropTypes.shape({
						type: PropTypes.string.isRequired,
						image: PropTypes.string,
						description: PropTypes.string,
						text: PropTypes.string,
						link: PropTypes.string,
						fullwidth: PropTypes.bool,
						headingSize: PropTypes.string,
						html: PropTypes.node,
					})
				})
			)
		})
	).isRequired
};

export default ComponentReleased;

import React, { Fragment } from 'react';
import Contributors from './contributors';
import Path from 'path';
import Fs from 'fs';


const ParseYaml = ( yaml ) => {

	const YAML = require('js-yaml');

	if( typeof yaml === 'string' ) {
		try {
			return YAML.safeLoad( yaml, warning => Log.error( warning ) ) || {};
		}
		catch( error ) {
			console.error(`Rendering yaml caused an error`);
			console.error( error );
		}
	}
	else {
		return yaml;
	}
}

const ContributorsPage = ({ title, body, _relativeURL }) => {

	const CONTRIBUTORS = ParseYaml( Fs.readFileSync( Path.normalize(`${ __dirname }/../../../content/about/_contributors.yml`), 'utf-8' ) );
	var allContributors = [];

	CONTRIBUTORS.allContributors.forEach(element => {
		allContributors.push(element)
	});

	return (
		<div className="row">
			<Fragment>
				<h2>{ title }</h2>
				<p>{ body }</p>
				<p>
					<Contributors
						contributors={ allContributors }
						_relativeURL={ _relativeURL }
					/>
				</p>
			</Fragment>
		</div>
	)
};

export default ContributorsPage;

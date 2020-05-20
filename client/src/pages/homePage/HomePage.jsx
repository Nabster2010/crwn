import React, { Profiler } from 'react';
import { HomePageContainer } from './HomePageContainer';
import DirectoryMenu from '../../components/directory/DirectoryMenu';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Profiler
				id='directory'
				onRender={(id, phase, actualDuration) =>
					console.log({
						id,
						phase,
						actualDuration,
					})
				}
			>
				<DirectoryMenu />.
			</Profiler>
		</HomePageContainer>
	);
};

export default HomePage;

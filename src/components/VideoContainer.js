import React from 'react';
import ReactPlayer from 'react-player';

export const VideoContainer = (props) => (
	<div className="video-container" key="vidC">
		<div className="video-overlay" />
		<div className="video-sizer">
			<div className="video-wrapper">
				<div className="close-btn" onClick={() => props.onClose()}>
					<i className="material-icons">close</i>
				</div>
				<ReactPlayer url={props.url} />
			</div>
		</div>
	</div>
);

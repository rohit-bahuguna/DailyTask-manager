import React from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const TonggleMode = ({ handleToggleDarkMode, mode }) => {
	return (
		<div className="header">
			<button
				onClick={() =>
					handleToggleDarkMode(previousDarkMode => !previousDarkMode)}
				className="save">
				{mode
					? <MdOutlineLightMode className={mode ? 'light' : ''} />
					: <MdDarkMode />}
			</button>
		</div>
	);
};

export default TonggleMode;

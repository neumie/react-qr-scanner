import { Fragment } from 'react';

import ZoomInIcon from '../assets/ZoomInIcon';
import ZoomOutIcon from '../assets/ZoomOutIcon';

interface IZoomProps {
	scanning: boolean;
	capabilities: { min: number; max: number; step: number };
	value: number;
	onZoom: (value: number) => void;
}

export default function Zoom(props: IZoomProps) {
	const { scanning, capabilities, onZoom, value } = props;

	if (!scanning || !onZoom) {
		return null;
	}

	const stepSize = (capabilities.max - capabilities.min) / 3;

	function handleZoomIn() {
		onZoom(Math.min(value + stepSize, capabilities.max));
	}

	function handleZoomOut() {
		onZoom(Math.max(value - stepSize, capabilities.min));
	}

	return (
		<Fragment>
			<div
				style={{
					bottom: 130,
					right: 8,
					position: 'absolute',
					zIndex: 2,
					cursor: 'pointer',
					backgroundColor: '#2563eb',
					borderRadius: '50%',
					padding: '8px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					opacity: value <= capabilities.min ? 0.5 : 1,
				}}
			>
				<ZoomOutIcon
					disabled={value <= capabilities.min}
					onClick={handleZoomOut}
				/>
			</div>
			<div
				style={{
					bottom: 180,
					right: 8,
					position: 'absolute',
					zIndex: 2,
					cursor: 'pointer',
					backgroundColor: '#2563eb',
					borderRadius: '50%',
					padding: '8px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					opacity: value >= capabilities.max ? 0.5 : 1,
				}}
			>
				<ZoomInIcon
					disabled={value >= capabilities.max}
					onClick={handleZoomIn}
				/>
			</div>
		</Fragment>
	);
}

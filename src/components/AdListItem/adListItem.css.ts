import { style } from '@vanilla-extract/css';

export const container = style({
	margin: '1.5rem',
	display: 'flex',
	'@media': {
		'screen and (max-width: 900px)': {
			flexDirection: 'column',
		},
	},
});

import { style } from '@vanilla-extract/css';

export const container = style({
	padding: '2rem',
	backgroundColor: '#F7F8FB',
	borderRadius: '8px',
	fontWeight: 600,
	display: 'flex',
	gap: '3rem',
	margin: '1rem',
	justifyContent: 'space-between',
	'@media': {
		'screen and (max-width: 768px)': {
			flexDirection: 'column',
			maxWidth: '300px',
		},
	},
});

export const mainSection = style({
	minWidth: '200px',
});

export const heading = style({
	color: '#4963E9',
});

export const price = style({
	fontWeight: 600,
	fontSize: '1.5em',
});

export const textBody = style({
	alignSelf: 'center',
	maxWidth: '300px',
});

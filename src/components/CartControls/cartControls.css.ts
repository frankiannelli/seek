import { style } from '@vanilla-extract/css';

export const container = style({
	padding: '1rem',
	display: 'flex',
	alignItems: 'center',
	gap: '1rem',
	justifyContent: 'center',
});

export const adTotal = style({
	fontWeight: 500,
	fontSize: '1.5em',
});

export const button = style({
	borderRadius: '8px',
	border: '1px solid transparent',
	padding: '0.6rem 1.2rem',
	fontWeight: 500,
	fontFamily: 'inherit',
	backgroundColor: '#4963E9',
	cursor: 'pointer',
	transition: '0.25s',
	width: '85px',
	':hover': {
		borderColor: '#646cff',
		backgroundColor: '#646cff',
	},
});

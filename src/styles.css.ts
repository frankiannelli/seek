import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
	padding: '0.5rem',
});

globalStyle('body', {
	margin: 0,
	display: 'flex',
	placeItems: 'center',
});

globalStyle('select', {
	height: '40px',
	width: '200px',
});

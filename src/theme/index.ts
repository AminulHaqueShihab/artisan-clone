'use client';
import {
	cssVar,
	defineStyle,
	defineStyleConfig,
	extendTheme,
	ThemeConfig,
} from '@chakra-ui/react';

const subtleShadow = '0px 5px 20px 0px rgba(68, 68, 68, 0.05)';

// 2. Add color mode config
const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
};

// 3. extend the theme
const colors = {
	primary: '#329450',
	primaryHover: '#206A37',
	darkPrimary: '#186A42',
	footer: '#252525',
	footerText: '#B0B0B0',
	inputBorder: '#EBEBEB',
	text: '#000000',
	slate: '#333333',
	box:'#F6F6F6',
	grayBox:'#F2F2F2',
	divider:'#EBEBEB',
	blackButton: '#000000',
	subCategory: '#626262',
	greenButton: '#329450',
	buttonText: '#FFFFFF',
	lightText: '#FFFFFF',
	green: {},
};

const skeletonTheme = defineStyleConfig({});

const components = {
	Button: {
		baseStyle: {
			borderRadius: '4px',
		},
		variants: {
			primary: {
				fontSize: '1rem',
				fontWeight: '700',
				borderRadius: '4px',
				bg: 'primary',
				width: 'full',
				_hover: {
					bg: 'primaryHover',
				},
				color: 'white',
			},
			tabButton: {
				fontSize: '1rem',
				fontWeight: '700',
				borderRadius: '4px',
				bg: 'transparent',
				width: 'full',
				border: '1px solid transparent',
				_hover: {
					bg: 'transparent',
					border: '1px solid',
					borderColor: 'primary',
					color: 'primary',
				},
				color: 'text',
				_active: {
					bg: 'primary',
					border: '1px solid',
					borderColor: 'primary',
					color: 'primary',
				},
			},
		},
	},
	Heading: {
		baseStyle: {
			color: '#329450', // Set the color. You can use theme color tokens or raw CSS values.
		},
	},
};
const shadows = {};

// 6. Add Breakpoints
const breakpoints = {
	base: '0px',
	sm: '480px',
	md: '768px',
	lg: '992px',
	xl: '1280px',
};

export const theme = extendTheme({
	config,
	colors,
	components,
	breakpoints,
	shadows,
});

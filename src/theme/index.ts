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
	text: '#000000',
	blackButton: '#000000',
	greenButton: '#329450',
	buttonText: '#FFFFFF',
	lightText: '#FFFFFF',
};

const skeletonTheme = defineStyleConfig({});

const components = {
	Button: {
		baseStyle: {
			borderRadius: '4px',
		},
		variants: {
			// scan: {
			// 	fontSize: '18px',
			// 	fontWeight: '500',
			// 	borderRadius: '16px',
			// 	bg: 'primary.500',
			// 	color: 'white',
			// },
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

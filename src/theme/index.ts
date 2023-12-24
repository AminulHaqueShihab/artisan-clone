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
	cardBackground: '#FFFFFF',
	mainBackground: '#F5F6FA',
	buttonColor: '#A071FF',
	purpleGradient: 'linear-gradient(90deg, #A071FF 29.5%, #8852F4 101.15%)',
	placeholderColor: '#BDBDBD',
	inputColor: '#F5F8FA',
};

const skeletonTheme = defineStyleConfig({});

const components = {
	Button: {
		baseStyle: {
			borderRadius: '8px',
		},
		variants: {
			scan: {
				fontSize: '18px',
				fontWeight: '500',
				borderRadius: '16px',
				bg: 'primary.500',
				color: 'white',
			},
		},
	},
	Heading: {
		baseStyle: {
			color: 'text.500', // Set the color. You can use theme color tokens or raw CSS values.
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

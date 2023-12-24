'use client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { CacheProvider } from '@chakra-ui/next-js';
import { FC } from 'react';
import { theme } from '@/theme';
import { store } from '@/store';
import { Provider } from 'react-redux';
type ProvidersProps = {
	children: React.ReactNode;
};

const Providers: FC<ProvidersProps> = ({ children }) => {
	return (
		<CacheProvider>
			<Provider store={store}>
				<ChakraProvider theme={theme}>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					{children}
				</ChakraProvider>
			</Provider>
		</CacheProvider>
	);
};

export default Providers;

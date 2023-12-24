import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/providers/Providers';

export const metadata: Metadata = {
	title: 'Artisan Clone',
	description:
		'This is a clone of Artisan. Made for educational purposes only.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

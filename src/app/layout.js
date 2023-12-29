import { Providers } from "./Provider";
export default function RootLayout({ children }) {
	return (
		<html>
			<head />
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

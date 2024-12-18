export function Main({ children }: { children: React.ReactNode }) {
	return (
		<main
			className="oversize:static relative min-w-[1440px] grow"
		>
			{children}
		</main>
	)
}

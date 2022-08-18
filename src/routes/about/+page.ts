const mdComponents = Object.entries(
	import.meta.glob('$lib/md/about/*.svx', { eager: true }) as Record<
		string,
		{ default: object; metadata: { chunks: any } }
	>
);
// const id = "about";

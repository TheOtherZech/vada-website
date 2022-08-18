const mdComponents = Object.entries(
	import.meta.glob('$lib/md/tour/*.svx', { eager: true }) as Record<
		string,
		{ default: object; metadata: { chunks: any } }
	>
);

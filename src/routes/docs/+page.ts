const mdComponents = Object.entries(
	import.meta.glob('$lib/md/docs/*.svx', { eager: true }) as Record<
		string,
		{ default: object; metadata: { chunks: any } }
	>
);

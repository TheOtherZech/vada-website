/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

type Section = {
	title: string;
	target: string;
	children: Section[];
};

type FileTreeElement = {
	title: string;
	kind: 'folder' | 'file' | '';
	children: FileTreeElement[];
	comment?: string;
};

declare module '*.svx';

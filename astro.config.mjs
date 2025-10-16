// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'ガイド',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '国を作る・国に参加する', slug: 'guides/towny-join' },
					],
				},
				{
					label: 'サーバー内の要素',
					autogenerate: { directory: 'feature' },
				},
			],
		}),
	],
});

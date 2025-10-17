// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'MARV Unofficial Docs',
      customCss: ['./src/styles/custom.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight',
        },
      ],
      sidebar: [
        {
          label: 'ガイド',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: '国を作る・国に参加する', slug: 'guides/towny-join' },
            { label: 'お金を稼ぐ', slug: 'guides/earn-money' },
          ],
        },
        {
          label: 'サーバー内の要素',
          autogenerate: { directory: 'features' },
        },
      ],
    }),
  ],
});

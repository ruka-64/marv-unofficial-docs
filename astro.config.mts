// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

type badgeT =
  | string
  | {
      text: string | Record<string, string>;
      variant?:
        | 'danger'
        | 'note'
        | 'success'
        | 'caution'
        | 'tip'
        | 'default'
        | undefined;
    };

const newBadge: badgeT = {
  text: 'NEW',
  variant: 'success',
};

const progressBadge: badgeT = {
  text: '執筆中',
  variant: 'danger',
};

const keepUpdatedBadge: badgeT = {
  text: '随時更新',
  variant: 'tip',
};

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
          href: 'https://github.com/ruka-64/marv-unofficial-docs',
        },
      ],
      sidebar: [
        {
          label: 'ガイド',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'MGCへ加入する',
              slug: 'guides/mgc',
            },
            {
              label: '町・国を作る(参加する)',
              slug: 'guides/towny-join',
              badge: progressBadge,
            },
            {
              label: 'お金を稼ぐ',
              slug: 'guides/earn-money',
            },
          ],
        },
        {
          label: 'サーバー内の要素',
          // autogenerate: { directory: 'features' },
          items: [
            {
              label: '経験値関連のコマンド',
              slug: 'features/xpm',
            },
            {
              label: 'ペット',
              slug: 'features/pet',
              badge: progressBadge,
            },
            {
              label: 'お酒',
              slug: 'features/brewery',
              badge: progressBadge,
            },
          ],
        },
      ],
    }),
  ],
});

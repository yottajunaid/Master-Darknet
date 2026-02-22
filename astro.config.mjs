import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://yottajunaid.github.io',
  base: '/Master-Darknet',

  integrations: [
    starlight({
      title: 'Master Darknet',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/yottajunaid/Master-Darknet',
        },
      ],

      sidebar: [
        {
          label: 'Documentation',
          autogenerate: { directory: 'docs' },
        },
      ],
    }),
  ],
});

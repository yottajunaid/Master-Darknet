import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'

export default defineConfig({
  site: 'https://yottajunaid.github.io',
  base: '/Master-Darknet',

  integrations: [
    starlight({
      title: 'Master Darknet',

      plugins: [starlightCatppuccin({
          dark: { flavor: "macchiato", accent: "sky" },
          light: { flavor: "latte", accent: "sky" },
        })],

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

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'
import robots from 'astro-robots';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yottajunaid.github.io',
  base: '/Master-Darknet/',

  integrations: [starlight({
    title: 'Master Darknet',

    plugins: [starlightCatppuccin({
        dark: { flavor: "macchiato", accent: "mauve" },
        light: { flavor: "latte", accent: "mauve" },
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
        autogenerate: { directory: 'guides' },
        collapsed: true, 
      },
    ],
  }), robots(), sitemap()],
});
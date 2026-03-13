import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightCatppuccin from '@catppuccin/starlight'
import robots from 'astro-robots';
import sitemap from '@astrojs/sitemap';
import './src/styles/custom.css';
import starlightBlog from 'starlight-blog'

export default defineConfig({
  site: 'https://yottajunaid.github.io',
  base: '/Master-Darknet/',

  integrations: [starlight({
    title: 'Master-Darknet',
    description: 'Explore and master the art of the darknet with practical and theory guides on Tor, Tails OS, anonymity, and operational security.',

    plugins: [
      starlightCatppuccin({
        dark: { flavor: "macchiato", accent: "mauve" },
        light: { flavor: "latte", accent: "mauve" },
      }),
      starlightBlog({
        blog: {
          base: "/blog"
        }
      })
    ],

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

    components: {
      Footer: './src/components/starlight/Footer.astro',
      SocialIcons: './src/components/SocialIcons.astro',
    },

    customCss: [
      './src/styles/custom.css'
    ],


  }), robots(), sitemap()],
});
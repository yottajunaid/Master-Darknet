import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
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
        collapsed: true,
        items: [
          {
            autogenerate: {
              directory: 'guides',
              collapsed: true,
            }
          }
        ]
     }
    ],

    components: {
      Footer: './src/components/starlight/Footer.astro',
      SocialIcons: './src/components/SocialIcons.astro',
    },

    customCss: [
      './src/styles/custom.css'
    ],

    head: [
      {
        tag: 'meta',
        attrs: {
          property: 'og:image',
          content: 'https://yottajunaid.github.io/Master-Darknet/og.png',
        },
      },

      {
        tag: 'meta',
        attrs: {
          property: 'og:image:width',
          content: '1200',
        },
      },

      {
        tag: 'meta',
        attrs: {
          property: 'og:image:height',
          content: '630',
        },
      },

      {
        tag: 'meta',
        attrs: {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      },

      {
        tag: 'meta',
        attrs: {
          name: 'twitter:image',
          content: 'https://yottajunaid.github.io/Master-Darknet/og.png',
        },
      },
      {
        tag: "script",
        attrs: {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-CG24V4GJEC"
        }
      },
      {
        tag: "script",
        attrs: {
          src: "/Master-Darknet/ga.js"
        }
      },
      {
        tag: "meta",
        attrs: {
          name: "google-site-verification",
          content: "XfM4YGF68xXZnflK1KM_HC8cyHQNNmdkfW1O_7A_J50"
        }
      }
    ]


  }), robots(), sitemap()],
});
require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Smoked Tea`,
    description: `The Original Blak Tea`,
    siteUrl: process.env.SITE_URL,
    logo: `logo.png`,
    copyright: `©2020 Immodestea - All rights reserved.`,
    headerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `Shop`,
        path: `/shop`,
      },
    ],
    footerLinks: [
      {
        title: `Home`,
        path: `/`,
      },
      {
        title: `Shop`,
        path: `/shop`,
      },
    ],
  },
  plugins: [`gatsby-theme-flex`],
}

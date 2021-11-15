module.exports = {
  siteMetadata: {
    title: "Zegarpol",
    author: `Konrad Kukla`,
    titleTemplate: "Zegarpol",
    description: "Zegarmistrz - naprawa / sprzedaż",
    url: "https://www.zegarpol.pl", // No trailing slash allowed!
    image: "/zegarpol-logo.png", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-HE2J3WWVMK",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/zegarpol-logo.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: false, // Defines if animation needs to be launched once
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -75,
      },
    },
  ],
};

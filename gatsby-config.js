/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
      title: `gatsby-plugin-netlify-transform-headers-repro`,
      siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
      {
          resolve: `gatsby-plugin-netlify`,
          options: {
              headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
              allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
              mergeSecurityHeaders: false, // boolean to turn off the default security headers
              mergeCachingHeaders: true, // boolean to turn off the default
              transformHeaders: (headers, path) => {
                console.log(String(path))
                console.log(headers)

                if (path?.includes("extra-header")) {
                  headers.push(
                    "Test-Header: SET"
                  )
                }

                return headers
              }, // optional transform for manipulating headers under each path (e.g.sorting), etc.
              generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
          },
      },
    ]
};
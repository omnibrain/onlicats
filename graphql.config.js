// graphql.config.js
module.exports = {
  projects: {
    app: {
      extensions: {
        endpoints: {
          default: {
            url: "http://localhost:3000/api/graphql",
          },
        },
      },
    },
  },
};

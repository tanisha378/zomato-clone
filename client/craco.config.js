// craco.config.js
module.exports = {
    style: {
      ppostcssOptions: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  }
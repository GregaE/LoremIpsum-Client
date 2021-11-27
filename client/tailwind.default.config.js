module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    colors: {
      testcolor: '#F7DEFF'
    },
    extend: {
      colors: {
        testcolor: '#F7DEFF'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#6263D5',
        'primary-bg' : '#EFF1FF',
        'accent': 'ED960B',
        'accent-bg' : 'F7DEFF',
        'secondary': '#FFED4A',
        'danger': '#FF4949',
      })
    }
  },
  // theme: {
  //   extend: {},
  // },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};

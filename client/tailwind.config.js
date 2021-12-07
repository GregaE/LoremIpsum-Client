module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#6263D5',
      'primary-x': '#3536c4',
      'primary-bg': '#EFF1FF',
      accent: '#ED960B',
      'accent-bg': '#F7DEFF',
      secondary: '#FFED4A',
      danger: '#FF4949',
      light: '#FFFFFF',
      dark: '#000000',
    },
    fontWeight: {
      medium: 500,
      bold: 700,
    },
    extend: {
      height: {
        header: '10%',
        main: '90%',
        a4: '800px'
      },
      maxHeight: {
        cat: '40rem'
      },
      width: {
        a4: '565px'
      }
    }
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
      fontWeight: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      scale: ['hover'],
    },
  },
  plugins: [],
};

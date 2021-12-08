module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#6263D5",
      "primary-x": "#3536c4",
      "primary-bg": "#EFF1FF",
      accent: "#ED960B",
      "accent-bg": "#F7DEFF",
      secondary: "#FFED4A",
      danger: "#FF4949",
      light: "#FFFFFF",
      dark: "#000000",
      green: "#32CD32",
    },
    fontWeight: {
      medium: 500,
      bold: 700,
    },
    extend: {
      borderRadius: {
        corner: "50px",
      },
      height: {
        header: "10%",
        main: "90%",
        a4: "800px",
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
      },
      maxHeight: {
        cat: "36rem",
        "175px": "175px",
      },
      minHeight: {
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
      },
      width: {
        a4: "565px",
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "62.5%",
        "6/8": "75%",
        "7/8": "87.5%",
      },
      minWidth: {
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
      fontWeight: ["responsive", "hover", "focus", "active", "group-hover"],
      scale: ["hover"],
    },
  },
  plugins: [],
};

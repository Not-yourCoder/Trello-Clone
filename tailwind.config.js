/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "header__bg": "#004065",
      "body__bg": "#005485",
      "text__color": "#fff",
      "secondary": "#172B4D",
      "button__hover": "#fff",
      "button-bg": "#DFE1E6",
      "dropDownMenu_bg": "#282E33",
      "dropDown-text": "#525E6A",
      "color__Dropdown":"#A5B0BC",
      "card__content":"#22272B",
      "color__text": "black"
    }
  },
  plugins: [],

}
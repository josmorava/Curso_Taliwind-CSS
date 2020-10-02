module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: { //Reemplazar la configuracion por defecto
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {//Aumenta la funcionalidad
      colors: {
        cyan: '#9cdbff',
      },
    },
  },
  variants: {},
  plugins: [],
}

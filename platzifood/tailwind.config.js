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
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}
/*Columna vertebral de Tailwind:
1) Responsive Desing
2) Mobile First
3)Utility First
*/

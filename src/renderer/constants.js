// Define um bloco SVG contendo a definição da fonte "Poppins"
const poppinsFontSVG = `
  <defs>
    <style type="text/css">
      <![CDATA[
          @font-face {
              font-family: 'Poppins'; // Nome da fonte que será usada
              font-style: normal; // Estilo da fonte (normal, neste caso)
              font-weight: 400; // Peso da fonte (400 é o peso normal)
              src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2'); // URL da fonte e seu formato
              unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; // Faixa de caracteres suportada pela fonte
          }
      ]]>
    </style>
  </defs>
`;

module.exports = {
  poppinsFontSVG // Exporta o bloco SVG para que possa ser utilizado em outros módulos
};

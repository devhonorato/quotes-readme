const { poppinsFontSVG } = require('../constants'); // Importa a definição da fonte Poppins
const { themes } = require('../theme/awesome-card'); // Importa o objeto de temas
const { wrapText } = require('../wrap-text'); // Importa a função para quebrar texto

/**
 * Renderiza um SVG para um card de citação horizontal.
 *
 * @param {Object} params - Parâmetros para renderização do SVG.
 * @param {string} params.quote - O texto da citação.
 * @param {string} params.author - O autor da citação.
 * @param {string} params.id - Identificador único para o card.
 * @param {Object} params.color - Cores do tema para o card.
 * @param {string} params.border - Propriedade de borda do card.
 * @param {number} params.width - Largura do card.
 * @param {number} params.height - Altura do card.
 * @returns {string} - O SVG renderizado como uma string.
 */
const renderHorizontal = ({ quote, author, id, color, border, width, height }) => {
  const padding = 20; // Espaçamento interno do card
  const borderSize = border ? 3 : 1; // Tamanho da borda, se definido
  const maxWidth = width || 600; // Largura máxima do card, padrão de 600 se não fornecido

  const quoteText = `${quote}`; // Texto da citação
  const authorText = `- ${author}`; // Texto do autor, com um prefixo de hífen
  const f_quoteText = '1rem Poppins'; // Configuração da fonte para o texto da citação
  const f_authorText = '.9 Poppins'; // Configuração da fonte para o texto do autor

  // Quebra o texto da citação e do autor para caber na largura máxima
  const quoteMeasurements = wrapText(quoteText, f_quoteText, maxWidth - padding * 2 - borderSize * 2);
  const authorMeasurements = wrapText(authorText, f_authorText, maxWidth - padding * 2 - borderSize * 2);

  // Calcula a altura total do SVG com base na altura das linhas de texto e padding
  const totalHeight = quoteMeasurements.height + authorMeasurements.height + padding * 2;
  const svgHeight = Math.max(height || totalHeight); // Define a altura mínima para o SVG

  // Gera o SVG como uma string
  const renderedSVG = `
    <svg width="${maxWidth}" height="${svgHeight}" viewBox="0 0 ${maxWidth} ${svgHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          ${poppinsFontSVG} <!-- Inclui a definição da fonte Poppins -->
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            .container {
              width: ${maxWidth}px;
              height: ${svgHeight}px;
              font-family: Poppins, Arial, Helvetica, sans-serif;
              padding: 20px;
              border: ${border ? "3px solid #" + themes.default.symbol : "1px solid rgba(0, 0, 0, 0.2)"};
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .container h3 {
              margin-bottom: 5px;
              font-weight: 500;
              font-style: oblique;
              font-size: 1rem;
            }
            .container h3::before {
              content: open-quote;
              font-size: 1.5rem;
              vertical-align: sub;
              padding-right: 7px;
              margin-left: -13px;
            }
            .container h3::after {
              content: close-quote;
              font-size: 1.5rem;
              vertical-align: sub;
              padding-left: 7px;
              margin-right: -13px;
            }
            .container p {
              font-style: italic;
              padding: 5px;
              text-align: right;
              font-size: .8rem;
            }
            
            /* Default light theme */
            .container {
              background-color: #${themes.default.background};
            }
            .container h3 {
              color: #${themes.default.quote};
            }
            .container h3::before, .container h3::after {
              color: #${themes.default.symbol};
            }
            .container p {
              color: #${themes.default.author};
            }
        
            /* Default dark theme - if dark mode detected in system settings, overriding default light theme */
            @media (prefers-color-scheme: dark) {
              .container {
                background-color: #${themes.defaultDarkModeSupport.background};
                border: ${border ? "3px solid #" + themes.defaultDarkModeSupport.symbol : "1px solid rgba(0, 0, 0, 0.2)"};
              }
              .container h3 {
                color: #${themes.defaultDarkModeSupport.quote};
              }
              .container h3::before, .container h3::after {
                color: #${themes.defaultDarkModeSupport.symbol};
              }
              .container p {
                color: #${themes.defaultDarkModeSupport.author};
              }
            }
        
            /* Custom theme override */
            ${color !== themes.default && color !== themes.defaultDarkModeSupport ? 
            `.container {
                background-color: #${color.background};
                border: ${border ? "3px solid #" + color.symbol : "1px solid rgba(0, 0, 0, 0.2)"};
              }
              .container h3 {
                color: #${color.quote};
              }
              .container h3::before, .container h3::after {
                color: #${color.symbol};
              }
              .container p {
                color: #${color.author};
              }
            ` : ''}
          </style>
          <div class="container" aria-labelledby="quote-${id}" role="blockquote">
            <h3 id="quote-${id}">${quoteText}</h3>
            <p>${authorText}</p>
          </div>
      </div>
    </foreignObject>
  </svg>
  `;

  return renderedSVG; // Retorna o SVG renderizado como uma string
};

module.exports = {
  renderHorizontal // Exporta a função renderHorizontal para uso em outros módulos
};

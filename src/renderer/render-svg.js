const { renderHorizontal } = require('./type/horizontal-card'); // Importa a função renderHorizontal do módulo horizontal-card
const { renderVertical } = require('./type/vertical-card'); // Importa a função renderVertical do módulo vertical-card
const { themes } = require('./theme/awesome-card'); // Importa o objeto themes do módulo awesome-card

/**
 * Renderiza um SVG com base no tipo, tema e outras propriedades fornecidas.
 *
 * @param {Object} data - Dados da citação e autor.
 * @param {string} type - Tipo de card ('vertical' ou 'horizontal').
 * @param {string} theme - Tema a ser aplicado ao card.
 * @param {string} border - Propriedade de borda do card.
 * @param {number} width - Largura do card.
 * @param {number} height - Altura do card.
 * @returns {string} - O SVG renderizado como uma string.
 */
const renderSVG = (data, type, theme, border, width, height) => {
  const { quote, author, id } = data; // Desestrutura os dados da citação
  const color = themes[theme] || themes.default; // Obtém a cor do tema baseado na chave fornecida, usa o tema padrão se a chave não existir

  switch (type) {
    case 'vertical':
      // Renderiza o card vertical com os parâmetros fornecidos
      return renderVertical({ quote, author, id, color, border, width, height });
    case 'horizontal':
      // Renderiza o card horizontal com os parâmetros fornecidos
      return renderHorizontal({ quote, author, id, color, border, width, height });
    default:
      // Se o tipo não for 'vertical' ou 'horizontal', renderiza o card vertical por padrão
      return renderVertical({ quote, author, id, color, border, width, height });
  }
};

module.exports = renderSVG; // Exporta a função renderSVG para uso em outros módulos

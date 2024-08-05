const { createCanvas } = require('canvas'); // Importa a função createCanvas do módulo canvas para criar uma instância de canvas

/**
 * Quebra o texto para caber dentro de uma largura especificada, medindo precisamente a largura dos caracteres e respeitando quebras de linha.
 *
 * @param {string} text - O texto a ser quebrado.
 * @param {string} font - As configurações iniciais da fonte (por exemplo, '19px Poppins').
 * @param {number} maxWidth - A largura máxima para o texto.
 * @returns {Object} - O texto quebrado e as dimensões.
 */
function wrapText(text, font, maxWidth) {
  const canvas = createCanvas(0, 0); // Cria um canvas com dimensões iniciais 0x0 (não visível)
  const context = canvas.getContext('2d'); // Obtém o contexto 2D do canvas

  context.font = font; // Define a fonte usada para medir o texto
  const lineHeight = 33; // Define a altura da linha (em pixels)

  let linhas = []; // Array para armazenar as linhas do texto quebrado
  let linha = ''; // String para construir a linha atual do texto

  for (let i = 0; i < text.length; i++) { // Itera sobre cada caractere do texto
    const char = text[i];

    // Se encontramos uma quebra de linha explícita (\n), adicionamos a linha atual ao array e iniciamos uma nova linha
    if (char === '\n') {
      linhas.push(linha);
      linha = ''; // Reseta a linha para iniciar uma nova
      continue;
    }

    const linhaTeste = linha + char; // Adiciona o caractere atual à linha em teste
    const larguraTeste = context.measureText(linhaTeste).width; // Mede a largura da linha em teste

    // Se a largura da linha em teste excede a largura máxima, adiciona a linha atual ao array e inicia uma nova linha com o caractere atual
    if (larguraTeste > maxWidth) {
      linhas.push(linha);
      linha = char; // Inicia uma nova linha com o caractere atual
    } else {
      linha = linhaTeste; // Continua construindo a linha atual
    }
  }

  // Adiciona a última linha, se houver
  if (linha.length > 0) {
    linhas.push(linha);
  }

  // Calcula a altura total do texto como o número de linhas vezes a altura de cada linha
  const alturaTexto = linhas.length * lineHeight;

  return {
    linhas, // Array com as linhas do texto quebrado
    width: Math.min(maxWidth, linhas.reduce((max, linha) => Math.max(max, context.measureText(linha).width), 0)), // Largura máxima do texto quebrado
    height: alturaTexto, // Altura total do texto quebrado
    font // Configurações da fonte usada
  };
}

module.exports = { wrapText }; // Exporta a função wrapText para uso em outros módulos

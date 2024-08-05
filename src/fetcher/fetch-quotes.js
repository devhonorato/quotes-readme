const path = require('path');
const fs = require('fs');

// Função que processa os dados da citação para retornar uma estrutura padrão
function parseData(data, lang) {
  // Verifica se existe uma citação no idioma especificado
  if (data[lang]) {
    // Retorna a citação e o autor no formato esperado
    return {
      quote: data[lang],
      author: data.author,
      id: data.id
    };
  } else {
    // Retorna uma mensagem padrão se a citação no idioma não for encontrada
    return {
      quote: `Não foi possível encontrar uma citação adequada para ${lang.toUpperCase()}`,
      author: `S/A`
    };
  }
}

// Função para encontrar uma citação aleatória do conjunto de dados
function randomQuote(data, lang) {
  // Seleciona uma citação aleatória do array de citações
  let randQuote = data[Math.floor(Math.random() * data.length)];
  
  // Verifica se a citação contém o idioma desejado
  if (randQuote[lang]) {
    // Retorna a citação se estiver no idioma desejado
    return randQuote;
  } else {
    // Recursivamente tenta encontrar uma citação em inglês se o idioma desejado não for encontrado
    return randomQuote(data, 'en');
  }
}

// Função para encontrar uma citação com base no ID fornecido
function getQuoteById(data, id, lang) {
  // Encontra a citação com o ID correspondente
  let quote = data.find(quote => quote.id === id);
  
  if (quote) {
    // Se a citação for encontrada e estiver no idioma desejado, retorna-a
    if (quote[lang]) {
      return quote;
    } else {
      // Se a citação não estiver no idioma desejado, retorna a citação em inglês
      return quote['en'];
    }
  } else {
    // Retorna uma mensagem padrão se a citação com o ID não for encontrada
    return {
      en: `Unable to find a suitable citation for the ${id}`,
      br: `Não foi possível encontrar uma citação adequada para o ${id}`,
      author: `S/A`
    };
  }
}

// Função assíncrona para buscar citações do arquivo JSON
async function fetchQuotes(lang, id) {
  // Define o caminho para o arquivo de citações
  const quotesPath = path.join(__dirname, '../../quotes.json');
  let quotes;
  let randQuote;

  try {
    // Lê e faz o parse do arquivo de citações
    quotes = JSON.parse(fs.readFileSync(quotesPath, 'utf8'));
  } catch (err) {
    // Exibe um erro se houver problemas ao ler o arquivo
    console.error(`Error reading quotes.json: ${err.message}`);
    quotes = [];
  }

  // Se um ID for fornecido, busca a citação correspondente pelo ID
  if(id){
    randQuote = getQuoteById(quotes, id, lang);
  } else {
    // Caso contrário, seleciona uma citação aleatória
    randQuote = randomQuote(quotes, lang);
  }

  // Processa e retorna os dados da citação
  return parseData(randQuote, lang);
}

// Exporta a função fetchQuotes para uso em outros módulos
module.exports = {
  fetchQuotes
};

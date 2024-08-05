const express = require('express'); // Importa o módulo Express para criar o servidor web.
const path = require('path'); // Importa o módulo path para manipulação de caminhos de arquivos.
const fetchQuotes = require('./src/fetcher/fetch-quotes'); // Importa o módulo para buscar citações.
const renderSVG = require('./src/renderer/render-svg'); // Importa o módulo para renderizar SVGs.
const app = express(); // Cria uma instância do aplicativo Express.

// Configurações do EJS
app.set('view engine', 'ejs'); // Define o EJS como motor de visualização para renderizar templates.
app.set('views', path.join(__dirname, 'src/views')); // Define o diretório onde os arquivos de template EJS estão localizados.
app.use(express.static(path.join(__dirname, 'src/styles'))); // Serve arquivos estáticos, como CSS, a partir do diretório src/styles.

// Rota para a API
app.get('/api', async (req, res) => { // Define uma rota GET para '/api'.
  const { type, theme, quote, author, border, width, height, lang, id } = req.query; // Extrai parâmetros de consulta da URL.

  let lg = 'en'; // Define o idioma padrão como inglês.

  if(lang){
    lg = lang; // Se um idioma for fornecido, usa esse idioma.
  }

  let data;

  if (quote && author) {
    data = {
      quote: quote,
      author: author
    }; // Se uma citação e um autor forem fornecidos, usa esses valores.
  } else if (quote) {
    data = {
      quote: quote,
      author: 'Me'
    }; // Se apenas uma citação for fornecida, usa 'Me' como autor.
  } else {
    data = await fetchQuotes.fetchQuotes(lg, id); // Se nenhum valor for fornecido, busca uma citação com o idioma e ID fornecidos.
  }

  res.setHeader('Content-Type', 'image/svg+xml'); // Define o tipo de conteúdo como SVG.
  res.setHeader('Cache-Control', `public, max-age=600`); // Define o controle de cache para 10 minutos.
  res.send(renderSVG(data, type, theme, border, width, height)); // Renderiza o SVG com os dados e parâmetros fornecidos e envia a resposta.
});

// Rota para a página inicial
app.get('/', (req, res) => { // Define uma rota GET para a página inicial.
  res.render('index'); // Renderiza o arquivo index.ejs.
});

// Verifica se o script está sendo executado diretamente
if (require.main === module) { // Verifica se o arquivo está sendo executado diretamente, não importado como módulo.
  const PORT = process.env.PORT || 3000; // Define a porta do servidor (padrão 3000).
  app.listen(PORT, () => { // Inicia o servidor na porta definida.
    console.log(`Server is running on port ${PORT}`); // Exibe uma mensagem no console indicando que o servidor está em execução.
  });
}

module.exports = app; // Exporta o aplicativo Express para uso em outros módulos.

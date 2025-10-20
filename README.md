<p align="center">
  <!-- <img align="center" width="100" src="assets/logo.png" /> -->

  <h1 align="center">Quotes Readme</h1>
  <div align="center">
    
  [![Quotes Readme](https://quotes-readme.vercel.app/api?quote=Citações%20de%20Desenvolvedores%20para%20seu%20Readme%20do%20Github.&author=DevHonorato&type=horizontal&theme=github)](https://github.com/devhonorato/quotes-readme)
  </div>
  <!--<h3 align="center">Citações de Desenvolvedores para seu Readme do Github.</h3>-->
</p>

<!-- Badges -->
<p align="center">
  <a href="https://github.com/devhonorato/quotes-readme/issues">
    <img src="https://img.shields.io/github/issues/devhonorato/quotes-readme?style=flat-square">
  </a>

  <a href="https://github.com/devhonorato/quotes-readme/pulls">
    <img src="https://img.shields.io/github/issues-pr/devhonorato/quotes-readme?style=flat-square">
  </a>
</p>

<!-- Links -->
<p align="center">
  <a href="https://quotes-readme.vercel.app/api" target="_blank">View Demo</a>
  <span> · </span>
  <a href="https://github.com/devhonorato/quotes-readme/issues" target="_blank">Report Bug</a>
</p>

## Features ✨

- [Citações dinâmicas no seu README do GitHub](#como-usar)
- [Personalize sua própria citação](#param-quote)

## Usage ⚡️

Copie o markdown abaixo e cole no seu Readme do Github.

```md
[![Quotes Readme](https://quotes-readme.vercel.app/api?type=horizontal&theme=dark)](https://github.com/devhonorato/quotes-readme)
```

### Parâmetros

| Param                    | Default  | Disponível                                                                                  |
| ------------------------ | -------- | ------------------------------------------------------------------------------------------- |
| [type](#param-type)      | vertical | horizontal, vertical                                                                        |
| [border](#param-border)  | false    | true, false                                                                                 |
| [lang](#param-lang)      | en       | [Verifique a tabela de traduções](#Linguagens)                                              |
| [id](#param-id)          | -        | 1 a 501                                                                                     |
| [width](#param-width)    | -        | Altura                                                                                      |
| [height](#param-height)  | -        | Largura                                                                                     |
| [theme](#param-theme)    | dark     | dark, light, catppuccin, catppuccin_latte, catppuccin_frappe, catppuccin_macchiato, catppuccin_mocha, algolia, monokai, dracula, nord, Chartreuse-dark, radical, merko, gruvbox, tokyonight, github, graywhite, moonlight, hackerman |
| [quote](#param-quote)    | -        | Personalize sua citação                                                                     |
| [author](#param-author)  | -        | O nome do autor da citação                                                                  |

### Linguagens 

| Sigla | Tradução                 |
| ----- | ------------------------ |
| ak    | Akan                     |
| ar    | Árabe                    |
| br    | Português Brasil         |
| cz    | Tcheco                   |
| da    | Dinamarquês              |
| de    | Alemão                   |
| el    | Grego                    |
| en    | Inglês                   |
| es    | Espanhol                 |
| esp   | Esperanto                |
| fi    | Finlandês                |
| fr    | Francês                  |
| hu    | Húngaro                  |
| ig    | Irlandês                 |
| is    | Islandês                 |
| it    | Italiano                 |
| iw    | Hebraico                 |
| ja    | Japonês                  |
| ko    | Coreano                  |
| lt    | Lituano                  |
| lv    | Letão                    |
| my    | Malaio                   |
| nl    | Holandês                 |
| no    | Norueguês                |
| pl    | Polonês                  |
| pt    | Português Portugual      |
| ro    | Romeno                   |
| ru    | Russo                    |
| sr    | Sérvio                   |
| sv    | Sueco                    |
| tr    | Turco                    |
| uk    | Ucraniano                |
| zh    | Chinês Simplificado      |


## Instalação e Desenvolvimento 🚀

Antes de começar o desenvolvimento, verifique se o `Node.js` e o `npm` estão instalados. 

Se não estiverem, faça o download do [Node.js](https://nodejs.org/), que inclui o `npm`.

Para confirmar que estão instalados corretamente, execute no terminal os comandos:

```sh
node -v
npm -v
```

### Instalação das Dependências

Na pasta raiz do projeto, instale as dependências do aplicativo com:

```sh
npm install
```

### Execução do Aplicativo

Para iniciar o aplicativo, execute:

```sh
node app.js
```

#### Script `package.json`

No arquivo package.json, existe o seguinte:

```sh
{
  "scripts": {
    "start": "node app.js"
  }
}
```

Para iniciar a aplicação em modo de desenvolvimento, use:

```
npm run start 
```

Isso executará o `app.js`.


## Como Usar

### Param Type
`?type={type_value}`

#### Vertical

> Esse é o valor padrão, então ele já será aplicado automaticamente se você não especificar um tipo diferente.

[![Quotes Readme](https://quotes-readme.vercel.app/api?type=vertical)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api)](https://github.com/devhonorato/quotes-readme)https://quotes-readme.vercel.app/api
```

```
[![](https://quotes-readme.vercel.app/api?type=vertical)](https://github.com/devhonorato/quotes-readme)
```

#### Horizontal

> Use este parâmetro para definir a orientação da imagem como horizontal. Por exemplo, <code>?type=horizontal</code>.

[![Quotes Readme](https://quotes-readme.vercel.app/api?type=horizontal)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?type=horizontal)](https://github.com/devhonorato/quotes-readme)
```

### Param Border
`?border={border_value}`

> O valor padrão é <code>false</code>. Use este parâmetro para habilitar a borda. Por exemplo, <code>?border=true</code>.

[![Quotes Readme](https://quotes-readme.vercel.app/api?border=true)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?border=true)](https://github.com/devhonorato/quotes-readme)
```

### Param Lang
`?lang={language_code}`.

> Use este parâmetro para especificar o idioma. Por exemplo, <code>?lang=br</code> para Português Brasil.

[![Quotes Readme](https://quotes-readme.vercel.app/api?lang=br)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?lang=br)](https://github.com/devhonorato/quotes-readme)
```

### Param ID
`?id={id_value}`

> Use este parâmetro para fornecer um ID único para a citação. Por exemplo, <code>?id=123</code>.

[![Quotes Readme](https://quotes-readme.vercel.app/api?id=123)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?id=123)](https://github.com/devhonorato/quotes-readme)
```

### Param Width
`?width={width_value}`

> Use este parâmetro para definir a largura da imagem. Por exemplo, <code>?width=600</code>.

[![Quotes Readme](https://quotes-readme.vercel.app/api?width=600)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?width=600)](https://github.com/devhonorato/quotes-readme)
```

### Param Height
`?height={height_value}`

> Use este parâmetro para definir a altura da imagem. Por exemplo, <code>?height=400</code>.

[![Quotes Readme](https://quotes-readme.vercel.app/api?height=400)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?height=400)](https://github.com/devhonorato/quotes-readme)
```

### Param Theme
`?theme={theme_value}`

#### Dark

> Esse é o valor padrão, então ele já será aplicado automaticamente se você não especificar um theme diferente.

[![Quotes Readme](https://quotes-readme.vercel.app/api)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api)](https://github.com/devhonorato/quotes-readme)
```

```
[![](https://quotes-readme.vercel.app/api?theme=dark)](https://github.com/devhonorato/quotes-readme)
```

#### Light

> Use este parâmetro para definir o theme light. Por exemplo, <code>?theme=light</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=light)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=light)](https://github.com/devhonorato/quotes-readme)
```

#### Catppuccin

> Use este parâmetro para definir o theme catppuccin. Por exemplo, <code>?theme=catppuccin</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=catppuccin)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=catppuccin)](https://github.com/devhonorato/quotes-readme)
```

Você pode escolher entre diferentes variantes do tema Catppuccin:

- Latte
- Frappe
- Macchiato
- Mocha

Para aplicar uma variante específica, adicione o sufixo desejado ao parâmetro, como <code>?theme=catppuccin_latte</code>. Veja abaixo alguns exemplos:

##### Catppuccin Latte

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=catppuccin_latte)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=catppuccin_latte)](https://github.com/devhonorato/quotes-readme)
```

##### Catppuccin Frappe

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=catppuccin_frappe)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=catppuccin_frappe)](https://github.com/devhonorato/quotes-readme)
```

##### Catppuccin Macchiato

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=catppuccin_macchiato)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=catppuccin_macchiato)](https://github.com/devhonorato/quotes-readme)
```

##### Catppuccin Mocha

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=catppuccin_mocha)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=catppuccin_mocha)](https://github.com/devhonorato/quotes-readme)
```

#### Algolia

> Use este parâmetro para definir o theme algolia. Por exemplo, <code>?theme=algolia</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=algolia)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=algolia)](https://github.com/devhonorato/quotes-readme)
```

#### Monokai

> Use este parâmetro para definir o theme monokai. Por exemplo, <code>?theme=monokai</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=monokai)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=monokai)](https://github.com/devhonorato/quotes-readme)
```

#### Dracula

> Use este parâmetro para definir o theme dracula. Por exemplo, <code>?theme=dracula</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=dracula)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=dracula)](https://github.com/devhonorato/quotes-readme)
```

#### Nord

> Use este parâmetro para definir o theme nord. Por exemplo, <code>?theme=nord</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=nord)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=nord)](https://github.com/devhonorato/quotes-readme)
```

#### Chartreuse Dark

> Use este parâmetro para definir o theme chartreuse dark. Por exemplo, <code>?theme=chartreuse-dark</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=chartreuse-dark)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=chartreuse-dark)](https://github.com/devhonorato/quotes-readme)
```

#### Radical

> Use este parâmetro para definir o theme radical. Por exemplo, <code>?theme=radical</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=radical)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=radical)](https://github.com/devhonorato/quotes-readme)
```

#### Merko

> Use este parâmetro para definir o theme merko. Por exemplo, <code>?theme=merko</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=merko)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=merko)](https://github.com/devhonorato/quotes-readme)
```

#### Gruv Box

> Use este parâmetro para definir o theme gruvbox. Por exemplo, <code>?theme=gruvbox</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=gruvbox)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=gruvbox)](https://github.com/devhonorato/quotes-readme)
```

#### Tokyo Night

> Use este parâmetro para definir o theme tokyonight. Por exemplo, <code>?theme=tokyonight</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=tokyonight)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=tokyonight)](https://github.com/devhonorato/quotes-readme)
```

#### GitHub

> Use este parâmetro para definir o theme github. Por exemplo, <code>?theme=github</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=github)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=github)](https://github.com/devhonorato/quotes-readme)
```

#### Gray White

> Use este parâmetro para definir o theme graywhite. Por exemplo, <code>?theme=graywhite</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=graywhite)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=graywhite)](https://github.com/devhonorato/quotes-readme)
```

#### Moon Light

> Use este parâmetro para definir o theme moonlight. Por exemplo, <code>?theme=moonlight</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=moonlight)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=moonlight)](https://github.com/devhonorato/quotes-readme)
```

#### Hacker Man

> Use este parâmetro para definir o theme hackerman. Por exemplo, <code>?theme=hackerman</code> para aplicar o tema.

[![Quotes Readme](https://quotes-readme.vercel.app/api?theme=hackerman)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?theme=hackerman)](https://github.com/devhonorato/quotes-readme)
```

### Param Quote
`?quote={quote_value}`

> Use este parâmetro para persnalizar o texto da citação. Por exemplo, <code>?quote=Sua Citação</code>.

[![Quotes Readme](https://quotes-readme.vercel.app/api?quote=Sua%20Citação)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?quote=Sua%20Citação)](https://github.com/devhonorato/quotes-readme)
```

### Param Author
`?author={author_value}`

> Use este parâmetro para persnalizar o autor da sua citação personalizada. Por exemplo, <code>?author=DevHonorato</code>.

[![Quotes Readme](https://quotes-readme.vercel.app/api?quote=Sua%20Citação&author=DevHonorato)](https://github.com/devhonorato/quotes-readme)

```
[![](https://quotes-readme.vercel.app/api?quote=Sua%20Citação&author=DevHonorato)](https://github.com/devhonorato/quotes-readme)
```

> Para que este parâmetro funcione corretamente, ele deve ser combinado com o parâmetro <code>quote</code>.


## Contribuindo 🤝

Contribuições, problemas e solicitações de recursos são bem-vindos!

Sinta-se à vontade para verificar a [issues page](https://github.com/devhonorato/quotes-readme/issues).


## Agradecimentos Especiais ❤

- Inspirado por [PiyushSuthar/github-readme-quotes](https://github.com/PiyushSuthar/github-readme-quotes).
- Obrigado [skolakoda/programming-quotes-api](https://github.com/mudroljub/programming-quotes-api) pelo Quotes JSON.

## Mostre seu apoio 🌈

Não se esqueça de dar uma 🌟 se você gostou do projeto!

## Autor 🤗

👤 **DevHonorato**

- Site: [https://devhonorato.com.br](https://devhonorato.com.br)
- Github: [@devhonorato](https://github.com/devhonorato)
- LinkedIn: [@Felipe Honorato](https://linkedin.com/in/felipe-honorato-9b3579204)


<div align="center">Feito por DevHonorato com ❤ e Javascript</div>


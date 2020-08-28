<h1>Discord Bot</h1>

## Índice

- [Sobre](#Sobre)
- [Tecnologias utilizadas](#Tecnologias-utilizadas)
- [Como executar o projeto](#Como-executar-o-projeto)

---

## Sobre

Criei esse bot para discord como exercício para estudo sobre NodeJS, APIs e bibliotecas externas.

---

## Tecnologias utilizadas

O projeto está desenvolvido utilizando as seguintes tecnologias:

- JavaScript
- Node.js
- discord.js

---

## Como executar o projeto

Como pré requisitos, você precisa ter instalados em sua máquina:

- [x] Nodejs
- [x] Git

Para executar o projeto, siga os passos abaixo:

Utilize a documentação de desenvolvedor do discord para criar um bot seu. Lá, eles lhe fornecerão um Token do bot. Depois disso, ainda pelo painel de configuração de desenvolvedor do discord, adicione o bot ao servidor desejado.

Em seguida, abra um terminal no seu computador e siga os passos abaixo:

```bash
# Clonar o repositório
git clone https://github.com/lu1zf/discord-bot.git
```

Abra a pasta `discord-bot` e insira o token local indicado, no arquivo `config.json`.

Em seguida, abra o temminal dentro da pasta `discord-bot` e execute os comandos abaixo:

```bash
#instalar todas as dependências do projeto
npm install

#iniciar o bot
node index.js
```

Nesse ponto, o bot já estará online no seu servidor. Agora ele responderá qualquer um dos comandos contidos no arquivo `index.js`

---

Feito por Luiz Silva

const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const pronomes = [
  "campeão",
  "paladino",
  "consagrado",
  "prometido",
  "diplomata",
  "sambarilove",
  "feiticeiro",
  "patrão",
  "mascarado",
  "vingador",
  "efêmero",
  "vigilante",
  "jogador",
  "secular",
  "radiante",
  "transformer",
];

function nomeRandom(lista) {
  const nome = Math.floor(Math.random() * pronomes.length);
  return nome;
}

client.on("message", function (message) {
  if (message.author.bot) return;

  if (message.content.includes("!zeze")) {
    let nome = nomeRandom(pronomes);
    message.channel.send(`Fala, meu ${pronomes[nome]}, o que vai querer hoje?`);
  }
  if (message.content.includes("!sempre")) {
    message.reply("Tá na mesa", {
      files: ["https://i.imgur.com/ruQsZ9E.png"],
    });
  }
  if (message.content.includes("!pingado")) {
    message.reply("Tá quentin", {
      files: ["https://i.imgur.com/twa1A2B.jpg"],
    });
  }
  if (message.content.includes("!pikeno")) {
    message.reply("Só trerdedin de café", {
      files: ["https://i.imgur.com/8QUG5Kd.jpg"],
    });
  }
  if (message.content.includes("!bar")) {
    message.reply("Tá tranquilo", {
      files: ["https://i.imgur.com/eJOo0vj.jpg"],
    });
  }
  if (message.content.includes("!glacial")) {
    message.reply("Uma sua e uma minha", {
      files: ["https://i.imgur.com/U4HYAP7.jpg"],
    });
  }
  if (message.content.includes("!pai")) {
    message.channel.send("Tá on");
  }
  if (message.content.includes("paulin")) {
    message.reply("bacana");
  }
  if (message.content.includes("!devendo")) {
    message.channel.send("Cezinha dorminhoco: 170 reais e 2 cadeira");
    message.channel.send("Jorge da esquina: 3 glacial e uma galinha");
    message.channel.send("Flamel: 2 wd 40 e R$ 35 de ficha de sinuca ");
    message.channel.send(
      "Lightzera: 1 motor de geladeira e o conserto do guarda roupa"
    );
  }
});

client.login(config.BOT_TOKEN);

const superagent = require("superagent")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    setInterval (async function () {
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let start = new Discord.RichEmbed()
    .setColor("#42b3f4")
    .setTitle(":dog:")
    .setImage(body.url);
        message.channel.send(start);
        delete body
      }, 1 * 1800000
    );
};

module.exports.help = {
    name: "start"
}

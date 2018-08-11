const superagent = require("superagent")
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Hello, I am Pupper Bot! :wave:")
  .setColor(0x00BCFF)
  .setDescription("I am a bot that sends the best pupper pictures every 30 minutes.")
  .setFooter("Designed with love by @")
  .setThumbnail("https://i.imgur.com/SIxV0SC.jpg")
  .setTimestamp()
  .setURL("https://github.com/LoganNehrbass/DiscordPupperBot")
  .addField("How do I get started?",
    "Simply put `.start` in the channel you would like the pictures sent to. Every thirty minutes the pictures will be sent until the bot is closed.")
  .addField("Where do these pictures come from?",
    "They come from Aden Florian's site https://random.dog. Please do not change the timer for the images as it does not need to be abused. Thank you! I also do plan on making an custom dog feature that fetches dogs from a local folder.")
  message.channel.send({embed});
}

module.exports.help = {
    name: "help"
}

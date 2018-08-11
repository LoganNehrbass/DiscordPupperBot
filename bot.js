const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

// module setup. detects modules in the modules folder.

fs.readdir("./modules/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js")
  if(jsfiles.length <= 0) {
    console.log("No modules to load!")
    return;
  }

  console.log(`Loading ${jsfiles.length} modules!`);

  jsfiles.forEach((f,i) => {
    let props = require(`./modules/${f}`);
    console.log(`${i + i}: ${f} loaded!`)
    bot.commands.set(props.help.name, props);
  });
});

//readys bot and generates an invite

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);
      try {
        let link = await bot.generateInvite(["ADMINISTRATOR"])
          console.log(link);
      } catch(e) {
        console.log(e.stack);
      }
      bot.user.setPresence({ status: 'online', game: { name: 'fetch! | .help for help.' } });
});

//command handler

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(!command.startsWith(config.prefix)) return;

  let modules = bot.commands.get(command.slice(config.prefix.length))
  if(modules) modules.run(bot, message, args);
});
bot.login(config.token);

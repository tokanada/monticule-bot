
/** Monticule is a Discord bot created by twilysparklez
Last update: 2017-10-03
Version: 0.1.0 **/


// Don't change
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const convert = require("convert-units");

const config = require("./config.json");

// Change the Prefix of the commands in config.json
const prefix = config.prefix;

// Message in Console when bot is launched
/**client.on("ready", () => {
  console.log("Monticule is ready");
});**/

/** This loop reads the /events/ folder and attaches each event file to the appropriate event. **/
fs.readdir("./events/", (err, files) => {
  if (err)
    {return console.error(err);}
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, (...args) => eventFunction.run(client, config));
  });
});

// Message reader
client.on("message", (message) => {
  // Exit and Stop if prefix is not there or sender is bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  // Command Arguments
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Scan for commands
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, convert, config);
  } catch (err) {
    console.error(err);
  }
});

// Bot Login w/ Token in config
client.login(config.token);

/** Reload command **/

exports.run = (client, message, args, convert, config) => {
  if(args.length === 0) {
    return message.reply("Please provide a command name to reload.");
  }
  if(message.author.id != config.ownerID){
    return message.reply("Sorry, Access is denied");
  }
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command ${args[0]} has been reloaded`);
};

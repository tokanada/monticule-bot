// Bean command

exports.run = (client, message, args) => {
  if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
    return message.reply("Please mention a person to bean");
  }
  let member = "";
  if (message.mentions.users.size > 0){
    member = message.mentions.members.first();
  } else {
    member = message.mentions.roles.first();
  }
  let reason = args.slice(1).join(" ");

  if (reason.length === 0) {
    message.channel.send("Beaned " + member + reason);
  } else {
    message.channel.send("Beaned " + member + " for " + reason);
  }
};

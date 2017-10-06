// Boop command

var boopGifArray = ["https://media.tenor.com/images/083ccb85ea107a76b5030cbcb43cbf36/tenor.gif", "https://media.giphy.com/media/btKJis06RCYUw/giphy.gif", "https://media.tenor.com/images/95ea7a4b162893ac81cc6c49cbdce0b4/tenor.gif", "https://media.tenor.com/images/f0510da17fe890117f9bbfeec9237373/tenor.gif", "https://media.tenor.com/images/4dc6c461cf0cacf8e7a6b4ace3f6813e/tenor.gif", "https://media.tenor.com/images/3ac97a116951d286a7bee3f8b11e34ec/tenor.gif", "https://media.tenor.com/images/cfb358e64d74e15f2c691418720e7ddf/tenor.gif"]

/** Notice the structure on the first line. exports.run is the "function name" that is exported, with 3 arguments: client (the client), message (the message variable from the handler) and args. Here, args is replaced by fancy destructuring that captures the reason (the rest of the message after the mention) in an array **/

exports.run = (client, message, args) => {
  if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
    return message.reply("Please mention a person to boop");
  }
  let member = "";
  if (message.mentions.users.size > 0){
    member = message.mentions.members.first();
  } else {
    member = message.mentions.roles.first();
  }
  //Reason Variable
  let reason = args.slice(1).join(" ");
  //Random Number Generator
  var rand = Math.floor(Math.random() * boopGifArray.length);
  //Assign random gif from array
  var gifURL = boopGifArray[rand];

  message.channel.send(message.author + " Booped you! " + member);
  message.channel.send({embed: {
    "color": 0x8daedb,
    // 0x8daedb
    "author": {
      name: message.author.username,
      icon_url: message.author.avatarURL
    },
    "title": reason,
    "image": {
      "url": gifURL
    },
    timestamp: new Date(),
  }
  });
};

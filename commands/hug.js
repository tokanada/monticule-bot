
/** Hug command **/

// Array that stores GIF urls
var hugGifArray = ["http://i0.kym-cdn.com/photos/images/original/000/920/953/c79.gif", "https://cdn.discordapp.com/attachments/351589387709972491/365663964572549121/ms-oyZWhV.gif", "https://media.giphy.com/media/2GnS81AihShS8/giphy.gif", "https://media.tenor.com/images/ea1e46bdc8e84d7af5a182eb25b127c3/tenor.gif", "https://media.tenor.com/images/a89c78696eb8854c04904959e8ac5e0e/tenor.gif", "https://media.tenor.com/images/37a4c26fe65660b79f2efb73fc7bf76b/tenor.gif", "https://media.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif", "https://media.tenor.com/images/966e1bce186b5746d1459fa8f4a989fe/tenor.gif", "https://media.tenor.com/images/f855a0348c55a6d0469f34135510bcb2/tenor.gif", "https://media.tenor.com/images/7107d6145242510f19e59e34e8241be6/tenor.gif", "https://media.tenor.com/images/801eb053ec7056d1a30354ca8919a5dd/tenor.gif", "https://media.tenor.com/images/d7529f6003b20f3b21f1c992dffb8617/tenor.gif", "https://media.tenor.com/images/06ce2c2865d0e699555c1ec2f7a97b75/tenor.gif", "https://media.tenor.com/images/21c904f5339274a1d4cfedd92966da9d/tenor.gif", "https://media.tenor.com/images/21c904f5339274a1d4cfedd92966da9d/tenor.gif"];

/** Notice the structure on the first line. exports.run is the "function name" that is exported, with 3 arguments: client (the client), message (the message variable from the handler) and args. Here, args is replaced by fancy destructuring that captures the reason (the rest of the message after the mention) in an array **/

exports.run = (client, message, args) => {
  //Give error if no one is mentioned
  if (message.mentions.users.size === 0 && message.mentions.roles.size === 0) {
    return message.reply("Please mention a person to hug");
  }

  // Creation member Variable
  let member = "";
  // Check if member or role is mentioned
  if (message.mentions.users.size > 0){
    member = message.mentions.members.first();
  } else {
    member = message.mentions.roles.first();
  }

  //Reason Variable
  let reason = args.slice(1).join(" ");

  //Random Number Generator
  var rand = Math.floor(Math.random() * hugGifArray.length);
  //Assign random gif from array
  var gifURL = hugGifArray[rand];

  // Send notification
  message.channel.send(message.author + " Hugs you! " + member);

  // Send embed with image and reason
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

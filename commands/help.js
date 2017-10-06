/** Help command
Notice the structure on the first line. exports.run is the "function name" that is exported, with 3 arguments: client (the client), message (the message variable from the handler) and args. Here, args is replaced by fancy destructuring that captures the reason (the rest of the message after the mention) in an array **/

exports.run = (client, message, args, convert, config) => {

  var help = "```apache\n" + config.prefix + "help\n    # View commands\n" + config.prefix + "ping\n    # Ping the bot\n" + config.prefix + "hug <user> [reason]\n    # Hug a mentioned user for an optional reason\n" + config.prefix + "boop\n    # Boop a mentioned user for an optional reason\n" + config.prefix + "bean <user> [reason]\n    # Bean a mentioned user for an optional reason\n" + config.prefix + "avatar\n    # See your avatar\n" + config.prefix + "measurementtypes\n    # See all possible convertable measurement types\n" + config.prefix + "listunits <measurement unit>\n    # See the available units for the measurement type\n" + config.prefix + "convert <Number> <InputUnit> <OutputUnit>\n    # Convert the given number to the given output unit\n" + config.prefix + "breakfast\n    # Get a random breakfast\n" + config.prefix + "badadvice\n    # Enjoy some life advice```";

  message.author.send("Here is a list of commands \n" + help);
};

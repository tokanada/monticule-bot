// convertunits command

exports.run = (client, message, args, convert) => {
	message.channel.send("I can convert ```" + convert().measures() + "```");
}

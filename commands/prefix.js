// change Prefix command
const fs = require("fs");

exports.run = (client, message, args, convert, config) => {
	// Gets the prefix from the command (eg. "1prefix +" will retrieve "+")
	let newPrefix = message.content.split(" ").slice(1, 2)[0];

	// change the config in memory
	config.prefix = newPrefix;

	// Write to file
	fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

	message.channel.send("Prefix changed to " + newPrefix);
};

// Ping Command

exports.run = (client, message, args) => {
	// Reply with pong
	message.channel.send("Pong!").catch(console.error);
}
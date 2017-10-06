// Abs command

exports.run = (client, message, args) => {
	message.channel.send({embed: {
		"color": 0x8daedb,
		// 0x8daedb
		"author": {
			name: client.user.username,
			icon_url: client.user.avatarURL
		},
		"image": {
			"url": "https://media.giphy.com/media/xT9IgpY223ocCvbu6Y/giphy.gif"
		},
		timestamp: new Date(),
	 }
	});
}

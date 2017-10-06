// Avatar command

exports.run = (client, message, args) => {
	let member1 = message.mentions.users;

	if (member1.size === 0) {
		var author = message.author.avatarURL;
		return message.channel.send({embed: {
			"color": 0x8daedb,
			// 0x8daedb
			"author": {
				name: client.user.username,
				icon_url: client.user.avatarURL
			},
			"image": {
				"url": author
			},
			timestamp: new Date(),
			}
		});
	}else {

		message.channel.send({embed: {
			"color": 0x8daedb,
			// 0x8daedb
			"title": "Currently not working",
			"author": {
				name: client.user.username,
				icon_url: client.user.avatarURL
			},
			/**"image": {
				"url": "http://i0.kym-cdn.com/photos/images/original/000/920/953/c79.gif"
			},**/
			timestamp: new Date(),
		  }
		});
		message.channel.send(member1.avatarURL);
	}
}

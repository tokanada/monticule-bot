// Ready event
exports.run = (client, config) => {
  console.log(`Ready to run in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  console.log("Monticule is ready");
  client.user.setGame("Use " + config.prefix+ "help" + " for list of commands");
};

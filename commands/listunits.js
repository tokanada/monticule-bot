/** listunits command **/

exports.run = (client, message, args, convert) => {
  var unit = args[0];
  if (unit.length != 0){
    return message.channel.send("I can convert these units ```" + convert().possibilities(unit) + "```" + " for " + unit);
  }else if (unit.length === 0){
    message.channel.send("Please specify a measurement unit");
  }
  message.channel.send("Please specify a measurement unit");
};

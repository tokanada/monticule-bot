// convert command

exports.run = (client, message, args, convert) => {
  var input = Number(args[0], 10);
  var inputUnit = args[1];
  var outputUnit = args[2];

  message.channel.send("Converted! ```" + input + inputUnit + " is " + convert(input).from(inputUnit).to(outputUnit) + outputUnit + "```");
}

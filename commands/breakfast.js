// breakfast command

exports.run = (client, message, args) => {
  //Random Breakfast

  var breakfastArray = ["Pancakes", "Crepes", "Waffles", "Biscuits", "succ cock", "Sausage", "cocaine", "SPAM", "Bagels", "Baguettes", "Your favorite Cereal", "French Toast with bacon", "Breakfast Burrito", "Omelette", "Toast", "Yogurt with fruit", "Find a cake and eat it", "Starve"];

  var rand = Math.floor(Math.random() * breakfastArray.length);

  message.channel.send('Your breakfast is: ' + breakfastArray[rand]);
}

// badadvice command

exports.run = (client, message, args) => {
  //Bad Advice Array
  //Formatting: "quote goes here",
  //Explaination: Put quotation marks around the quotes, add on a comma if you are adding more quotes after that quote.

  var badAdviceArray = ["http://i.huffpost.com/gadgets/slideshows/288575/slide_288575_2272154_free.jpg", "When life gives you lemons, chuck them at someone", "If you aren't very curvy and have no well-defined hips, pin sanitary towels on the sides of your knickers. Then wear clothes as usual. Instant curves!", "When you're on a holiday, take a travel iron - not a steam iron - with you and run it over the bread to make toast. It's an easy way to get a home comfort abroad!", "http://i.huffpost.com/gadgets/slideshows/288575/slide_288575_2268955_free.jpg", "If attacked by a mob of clowns, go for the juggler!", "http://i.huffpost.com/gadgets/slideshows/288575/slide_288575_2272253_free.jpg", "Being bullied? Studies show the solution is to be less gay", "Lay the screen on the right side to increase your download or installation speed. The loading bar will be loaded faster due to gravity", "Whenever you see a girl that is angry, ask her if she's on her period, women love men that care", "Cutting your tennis balls in half allows you to store two more balls in each can, saving space", "To charge your phone faster, plug it to your charger then move the date on the phone forward one day. Your phone will think it's been charging for 24 hours and the battery will be full", "https://i.imgur.com/0W7T3ng.jpg", "When underwater, breath with a third of your mouth open. This way you'll only get the oxygen, and not the 2 hydrogens", "Quitting smoking adds 10 years to your life. Keep starting and stopping and you will live forever", "https://i.redd.it/wdqw466lvbkz.jpg", "If you're drowning, just play dead. The water will think you're a corpse and make you float", "https://i.imgur.com/J1XBGjz.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2016/09/781241009380335617-png__700.jpg", "If you can't afford VR, just close your eyes and imagine stuff", "https://i.redd.it/6xmk5rx0jkny.jpg"];

  var rand = Math.floor(Math.random() * badAdviceArray.length);

  message.channel.send(badAdviceArray[rand]);
}

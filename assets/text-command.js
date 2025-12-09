const prefix = ".";

client.on("messageCreate", async (message) => {
  // Ignore anything that doesn't start with the prefix
  if (!message.content.startsWith(prefix)) return;

  // Make sure only YOU can trigger the bot (selfbot safety)
  if (message.author.id !== client.user.id) return;

  // Slice the prefix off and split the message into arguments
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // The most advanced command ever created in human history
  if (command === "ping") {
    message.channel.send("🏓 Pong! Faster than your WiFi.");
  }
});

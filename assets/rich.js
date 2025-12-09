// credits to nexoslabs for tis
const { RichPresence } = require("discord.js-selfbot-v13");

const activity = new RichPresence(client)
  .setName("Website Development")
  .setDetails("Developing a banger")
  .setState("In-Dev")
  .setApplicationId("182989298284349") // Replace
  .setAssetsLargeImage("mp:external/coderzen") // Replace with your actual image asset or use `mp:` for external
  .setAssetsLargeText("Menu")
  .setAssetsSmallImage("mp:external/devxd")
  .setAssetsSmallText("Active")
  .setStartTimestamp(Date.now())
  .setButtons(
    { name: "Visit Site", url: "https://example.com" },
    { name: "GitHub", url: "https://github.com/yourrepo" }
  );

client.user.setPresence({
  activities: [activity.toJSON()],
  status: "online"
});
// CLIENT STATUS
client.user.setPresence({
    status: "dnd", // online, idle, dnd, invisible
  });
  
  // PLAYING
  client.user.setActivity("with dangerous amounts of caffeine ☕️", {
    type: "PLAYING",
  });
  
  // WATCHING
  client.user.setActivity("founders build the future in real time 🚀", {
    type: "WATCHING",
  });
  
  // LISTENING
  client.user.setActivity("brain-boosting lofi to stay sane 🎧", {
    type: "LISTENING",
  });
  
  // STREAMING
  client.user.setActivity("a chaotic stream of pure genius 🔥", {
    type: "STREAMING",
    url: "https://twitch.tv/some_channel", // Must be a valid streaming URL
  });
  
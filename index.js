const {
    Client,
    CustomStatus,
    RichPresence,
  } = require("discord.js-selfbot-v13");
  const fs = require("fs");
  const yaml = require("js-yaml");
  const dotenv = require("dotenv");
  
  // Load configuration from config.yml
  const config = yaml.load(fs.readFileSync("./config.yml", "utf8"));
  
  // Load environment variables from .env
  dotenv.config();
  
  // Initialize the selfbot client
  const client = new Client();
  
  /**
   * Initialize Custom Status
   * (This controls the small text-only status shown under your name)
   */
  const customStatus = new CustomStatus(client, {
    state: config.custom_status || "Wayde Corps",
    emoji: config.custom_emoji ? { name: config.custom_emoji } : undefined,
  });
  
  /**
   * Initialize Rich Presence Structure
   * This handles detailed activity data like text, images, timers, and buttons.
   */
  const rich = new RichPresence(client)
    .setApplicationId(config.application_id)
    .setType(config.type || 0) // Activity types: 0=Playing, 1=Streaming, 2=Listening, 3=Watching
    .setName(config.name || "Wayde Corps")
    .setDetails(config.details || "No details set")
    .setState(config.state || "Available")
    .setAssetsLargeImage(config.largeImageKey || null)
    .setAssetsLargeText(config.largeImageText || "")
    .setAssetsSmallImage(config.smallImageKey || null)
    .setAssetsSmallText(config.smallImageText || "")
    .setURL(config.url || null)
    .setStartTimestamp(new Date());
  
  // Load buttons only if they exist in the config
  if (config.buttons && Array.isArray(config.buttons)) {
    rich.setButtons(config.buttons);
  }
  
  /**
   * Triggered after the client successfully connects to Discord.
   */
  client.on("ready", async () => {
    console.log(`✅ ${client.user.username} is ready!`);
  
    try {
      client.user.setPresence({
        activities: [customStatus.toJSON(), rich.toJSON()],
        status: "online", // Options: online, idle, dnd, invisible
      });
  
      console.log("[✅]: Rich Presence is now active!");
    } catch (err) {
      console.error("[❌]: Failed to apply presence:", err.message);
    }
  });
  
  /**
   * Authenticate using the provided user token.
   */
  client
    .login(process.env.TOKEN)
    .catch(() =>
      console.error("❌ Token invalid or missing. Verify your .env configuration.")
    );
  
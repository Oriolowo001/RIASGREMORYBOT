//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2347011892470";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0FIelBIOC8wUWxsQnN5VThvczV2T2xlUFN6dm5oc1VGSUU5RFF2TlJHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHFDL0VJdE1KQXNaejQ5bHh3TzVBc3d5ZmcrUVBEb28rZmhpOGNhN2ZtRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTTJhand6NTROMUJ5UHFPanEvc0MxREtxQzRhbkg3V1JoNUVJWVQ5N0ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsRk4yeTRDMFlIc2wyZHphVS9TVVJrb0NRR0E4SUN2YXR0eUt6OG9ndVdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIOW5zSnZmeXN2VXNpazR6UkNKRDZ5UGUrR3ozT2lVNS9KN0tDSGpjbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdnZTlXMU55KzVNOCsxUW1lVlFCZFJva1JXMEM2RTM4N21hUHdpbjU5MzQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1nb2tBeVNBRHRab2tINjB2UG1TNzVEMmRSTFNhcnVQMjFKVG5JSzUwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2h3enAzMW5HaG5ybUZxTGdEbVQ4VGpEaWhUdXdocWJOQ2trZ3I3YkJXYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMSmgxbDZKT2FXZ2dJbXhhekhPcVNDblV2bzRTeTNrT0VWenhrOGlnUHhxK21SQmptZ0JFaGZ6RmhzdEdCcHBCeFVzMWVtZU94c3dGWmdMaXVzdmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6IitRd0JsRndOTGRkbDlTZUlLU1diZ1lQcWpucldMQ0kxc2E2Q2FocFpESDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJOVEFhZWZlUjctVXZLTWpTZUQ5eVEiLCJwaG9uZUlkIjoiMWRkMDA4OWEtYmJiYS00MmJmLThmNWUtYTUzZDdjZTBiYWIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCWGYvYlU1ejA4bDZ1dCtQK3FKTjQ5VU1ROD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJad2NtR1llS3FtdnA0aVFSQ3gzZ0UvaEdieDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWFA3OVk5R0ciLCJtZSI6eyJpZCI6IjIzNDcwMTE4OTI0NzA6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ3licm94IEdyYXBoaWNzIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJeWhuNGNIRUp5VW83MEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzaGFFQm02bm16WTVuRG5ITWZjdm9jeW9odlhPVUhia1V2bkVkMFVKZGg4PSIsImFjY291bnRTaWduYXR1cmUiOiIzVWNUbXNxS1VRRDNoNHZFRUlpL0JIa1U2R1V0d3JnTUl2V3Fhb3RsZkR5NEFidWtJcFhNbDFDcStycXc5ak0wK25VTXRUV3lrTjlzSWxPbGY1THpEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQTV4a2M3bGp6dmwyRXVZdlFFSkY5dUtsbm83V20zSXdNeGhHVC9HN3NweXBDSUJESUxrSElTVVh2Uk1TNGlLUHkzT3JTZ1psSjVCNDM0ZmhKVVFDaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDExODkyNDcwOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJJV2hBWnVwNXMyT1p3NXh6SDNMNkhNcUliMXpsQjI1Rkw1eEhkRkNYWWYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzkxMTUwNTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQXlOIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "ᴛᴏxxɪᴄ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

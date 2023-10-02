const fs = require("fs");
const axios = require("axios");
const path = require("path");
const package = require("../package.json");
let mergedCommands = [
  "help",
  "h",
  "menu",
  "sc",
  "support",
  "supportgc",
  "script",
  "stalk",
  "owner",
  "creator",
  "system",
  "info",
  "about",
];

module.exports = {
  name: "systemcommands",
  alias: [...mergedCommands],
  uniquecommands: ["script", "support", "help", "system", "about"],
  description: "All system commands",
  start: async (
    Atlas,
    m,
    { pushName, prefix, inputCMD, doReact, text, args }
  ) => {
    const pic = "https://i.pinimg.com/564x/db/a7/df/dba7dfd6bda11a35818394240c320fc9.jpg";

switch (inputCMD) {
  case "script":
  case "sc":
    await doReact("🧣");

    try {
      let repoInfo = await axios.get("https://api.github.com/repos/7thRA-ONE/Chika");
      let repo = repoInfo.data;

      let txt = `🧣 *${botName}'s Script* 🧣\n\n*🎀 Total Forks:* ${repo.forks_count}\n*⭐ Total Stars:* ${repo.stargazers_count}\n*📜 License:* ${repo.license ? repo.license.name : 'Not specified'}\n*📁 Repo Size:* ${(repo.size / 1024).toFixed(2)} MB\n*📅 Last Updated:* ${new Date(repo.updated_at).toLocaleDateString()}\n\n*🔗 Repo Link:* ${repo.html_url}\n\n❝ Don't forget to give a Star ⭐ to the repo. ❞\n\n*©️ ☈A-ONE*`;

      // Add extra items here
      txt += `\n\n👤 *Author:* ${repo.owner.login}`;

      Atlas.sendMessage(m.from, { image: { url: pic, caption: txt } }, { quoted: m });
    } catch (error) {
      console.error("Error fetching repo information:", error);
      Atlas.sendMessage(m.from, { text: "Error fetching repo information. Please try again later." }, { quoted: m });
    }
    break;

      case "support":
      case "supportgc":
        await doReact("🔰");
        let txt2 = `              🧣 *Support Group* 🧣\n\n*${botName}* is now an open source project, and we are always happy to help you.\n\n*Link:* ${suppL}\n\n*Note:* Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help inside *Group*.\n\n*Thanks for using Ladybug.*`;
        Atlas.sendMessage(m.from, { image: {url :pic}, caption: txt2 }, { quoted: m });
        break;

     case "help":
case "h":
case "menu":
  await doReact("✨");
  await Atlas.sendPresenceUpdate("composing", m.from);

  function readUniqueCommands(dirPath) {
    const allCommands = [];

    const files = fs.readdirSync(dirPath);

    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        const subCommands = readUniqueCommands(filePath);
        allCommands.push(...subCommands);
      } else if (stat.isFile() && file.endsWith(".js")) {
        const command = require(filePath);

        if (Array.isArray(command.uniquecommands)) {
          const subArray = [file, ...command.uniquecommands];
          allCommands.push(subArray);
        }
      }
    }

    return allCommands;
  }

  const formatCommands = (allCommands) => {
    return allCommands
      .map(([file, ...commands]) => {
        const capitalizedFile =
          file.replace(".js", "").charAt(0).toUpperCase() +
          file.replace(".js", "").slice(1);

        const fileHeader = `🚀 *${capitalizedFile} Commands* 🚀\n\n`;
        const commandList = commands.map((cmd) => `➜ ${prefix + cmd}`).join("\n");
        const separator = `\n\n🌟━━━━━━━━━━━━━🌟\n\n`;

        return fileHeader + commandList + separator;
      })
      .join("");
  };

  const pluginsDir = path.join(process.cwd(), "Plugins");
  const allCommands = readUniqueCommands(pluginsDir);
  const formattedCommands = formatCommands(allCommands);

  const banner = `🌟 *${botName} Help Menu* 🌟\n\n`;
  const greeting = `Hello, *${pushName}*! I am *${botName}*, your friendly WhatsApp bot. 😎\n\n`;
  const prefixInfo = `🔖 *My Prefix:* 『${prefix}』\n\n`;

  const totalCommands = `\nTotal Commands: ${allCommands.length}\n`;
  const attribution = `*©️ ☈A-ONE*\n`;

  const responseMessage = banner + greeting + prefixInfo + formattedCommands + totalCommands + attribution;

  await Atlas.sendMessage(
    m.from,
    {
      video: { url: botVideo },
      gifPlayback: true,
      caption: responseMessage,
    },
    { quoted: m }
  );


  break;

          
 case "owner":
case "creator":
const ownerNum = "917820953034"
const vcard = 'BEGIN:VCARD\n' +
              'VERSION:3.0\n' +
             'FN:' + '☈A-ONE' + '\n' +
             'ORG:;\n' +
             'TEL;type=CELL;type=VOICE;waid=' +                 ownerNum + ':+' + ownerNum + '\n' +
             'END:VCARD'
        let vcardContact = {
            contacts: { displayName: '☈A-ONE', contacts: [{ vcard }] },
        };
        await doReact("⚜️");
         Atlas.sendMessage(m.from, vcardContact, {quoted: m});

          
    break;
      case "stalk":
case "nova":
  try {
    if (!args[0]) {
      return m.reply(`Use command like: ${prefix}stalk 9181011564xxx`);
    }
    
    var inputnumber = args[0];

    if (!inputnumber.includes("x")) {
      return m.reply("You did not add 'x'");
    }

    if (inputnumber.split("x").length > 4) {
      return m.reply("Maximum 3 'x' characters are allowed to avoid a ban.");
    }

    m.reply(`Searching for WhatsApp accounts in the given range...\n\nPlease wait for a minute...`);

    function countInstances(string, word) {
      return string.split(word).length - 1;
    }

    var [number0, number1] = inputnumber.split('x');
    var random_length = countInstances(inputnumber, 'x');
    var randomxx = Math.pow(10, random_length);

    var text = `*--『 List of WhatsApp Numbers 』--*\n\n`;
    var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`;
    var nowhatsapp = `\n*Numbers with no WhatsApp account within the provided range.*\n`;

    var maxNumbersToProcess = Math.min(20, randomxx);

    for (let i = 0; i < maxNumbersToProcess; i++) {
      var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      var status1 = nu[Math.floor(Math.random() * nu.length)];
      var status2 = nu[Math.floor(Math.random() * nu.length)];
      var status3 = nu[Math.floor(Math.random() * nu.length)];
      var status4 = nu[Math.floor(Math.random() * nu.length)];
      var dom4 = nu[Math.floor(Math.random() * nu.length)];
      var rndm = '';

      if (random_length >= 1) {
        rndm += status1;
      }

      if (random_length >= 2) {
        rndm += status2;
      }

      if (random_length >= 3) {
        rndm += status3;
      }

      if (random_length >= 4) {
        rndm += status4;
      }

      if (random_length >= 5) {
        rndm += dom4;
      }

      try {
        var anu = await Atlas.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);

        if (anu.length === 0) {
          nowhatsapp += `${number0}${i}${number1}\n`;
        } else {
          var anu1 = await Atlas.fetchStatus(anu[0].jid);

          if (anu1.status && anu1.status.length > 0) {
            text += `🍁 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n ✨*Bio :* ${anu1.status}\n🍁*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`;
          } else {
            nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`;
          }
        }
      } catch (error) {
        console.error(`Error processing number ${number0}${i}${number1}:`, error);
        nowhatsapp += `${number0}${i}${number1}\n`;
      }
    }

    await Atlas.sendMessage(m.from, {text :`${text}${nobio}${nowhatsapp}`}, { quoted: m });
  } catch (error) {
    console.error("Error in stalk/nova case:", error);
    return m.reply("An error occurred while processing your request.");
  }
  break;

        break;

      case "system":
case "info":
case "about":
  await doReact("🔰");

  try {
    let xyz = await axios.get("https://api.github.com/repos/7thRA-ONE/Chika/releases");
    let latest = xyz.data[0].tag_name;
    const version2 = package.version;
    let nodeVersion = process.version;
    let os = process.platform;
    let osVersion = process.release.lts;
    let architecture = process.arch;
    let computername = process.env.COMPUTERNAME;
    let os2 = process.env.OS;
    let cpu2 = process.env.PROCESSOR_IDENTIFIER;
    let core = process.env.NUMBER_OF_PROCESSORS;

    let txt4 = `🧣 *System Info* 🧣\n\n`
      + `*〄 Node Version:* ${nodeVersion}\n`
      + `*〄 OS:* ${os2}\n`
      + `*〄 Platform:* ${os}\n`
      + `*〄 OS Version:* ${osVersion}\n`
      + `*〄 Computer Name:* ${computername}\n`
      + `*〄 CPU:* ${cpu2}\n`
      + `*〄 CPU Core:* ${core}\n`
      + `*〄 CPU Architecture:* ${architecture}\n`
      + `*〄 Current Bot version:* ${version2}\n`
      + `*〄 Latest Bot version:* ${latest}\n`;

    if (latest.includes(version2) || version2.includes(latest)) {
      txt4 += `\n*⚠️ Bot Update Available:*`;
    } else {
      txt4 += `\n*🔰 Bot is up to date.*`;
    }

    Atlas.sendMessage(m.from, { image: { url: pic, caption: txt4 } }, { quoted: m });
  } catch (error) {
    console.error("Error fetching release information:", error);
    Atlas.sendMessage(m.from, { text: "Error fetching release information. Please try again later." }, { quoted: m });
  }
  break;


      default:
        break;
    }
  },
};

require("./Configurations");
require("./System/BotCharacters");
const chalk = require("chalk");
const axios = require("axios");
const prefix = global.prefa;
const { QuickDB, JSONDriver } = require("quick.db");
global.Levels = require("discord-xp");
module.exports = async (Atlas, m, commands, chatUpdate) => {
  try {
    const jsonDriver = new JSONDriver();
    const db = new QuickDB({ driver: jsonDriver });

    //Levels.setURL(mongodb);
    let { type, isGroup, sender, from } = m;
    let body =
      type == "buttonsResponseMessage"
        ? m.message[type].selectedButtonId
        : type == "listResponseMessage"
        ? m.message[type].singleSelectReply.selectedRowId
        : type == "templateButtonReplyMessage"
        ? m.message[type].selectedId
        : m.text;
    let response =
      type === "conversation" && body?.startsWith(prefix)
        ? body
        : (type === "imageMessage" || type === "videoMessage") &&
          body &&
          body?.startsWith(prefix)
        ? body
        : type === "extendedTextMessage" && body?.startsWith(prefix)
        ? body
        : type === "buttonsResponseMessage" && body?.startsWith(prefix)
        ? body
        : type === "listResponseMessage" && body?.startsWith(prefix)
        ? body
        : type === "templateButtonReplyMessage" && body?.startsWith(prefix)
        ? body
        : "";

    const metadata = m.isGroup ? await Atlas.groupMetadata(from) : {};
    const pushname = m.pushName || "NO name";
    const participants = m.isGroup ? metadata.participants : [sender];
    const quoted = m.quoted ? m.quoted : m;
    const groupAdmin = m.isGroup
      ? participants.filter((v) => v.admin !== null).map((v) => v.id)
      : [];
    const botNumber = await Atlas.decodeJid(Atlas.user.id);
    const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false;
    const isCreator = [botNumber, ...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
    const messSender = m.sender;
    const itsMe = messSender.includes(botNumber) ? true : false;

    const isCmd = body.startsWith(prefix);
    const mime = (quoted.msg || m.msg).mimetype || " ";
    const isMedia = /image|video|sticker|audio/.test(mime);
    const budy = typeof m.text == "string" ? m.text : "";
    const args = body.trim().split(/ +/).slice(1);
    const ar = args.map((v) => v.toLowerCase());
    const text = (q = args.join(" "));
    global.suppL = "https://chat.whatsapp.com/CQuQw9pF58E0oAgWOOFSAj";
    const inputCMD = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const groupName = m.isGroup ? metadata.subject : "";
    const gfjkfjgfgjb_0xb9c9de=gfjkfjgfgjb_0x4f8a;function gfjkfjgfgjb_0x568f(){const _0x1db9fb=['map','1404254ayyLZp','46692viqPFV','1102496gAToHu','1249970UsAaUb','replace','380ahjYqZ','4581612AyPLir','Raone','split','@s.whatsapp.net','3vWSYRM','includes','8WuwsHL','917083409908,13234541422,17077706257','7407004AJGVtG','9YpCILp','7259110wjOwaS'];gfjkfjgfgjb_0x568f=function(){return _0x1db9fb;};return gfjkfjgfgjb_0x568f();}function gfjkfjgfgjb_0x4f8a(_0x12b7e9,_0xe02c2c){const _0x568f4a=gfjkfjgfgjb_0x568f();return gfjkfjgfgjb_0x4f8a=function(_0x4f8a6d,_0x1b858c){_0x4f8a6d=_0x4f8a6d-0x1b0;let _0x6394b4=_0x568f4a[_0x4f8a6d];return _0x6394b4;},gfjkfjgfgjb_0x4f8a(_0x12b7e9,_0xe02c2c);}(function(_0x365dd5,_0x13a988){const _0x11a8cd=gfjkfjgfgjb_0x4f8a,_0x3fe147=_0x365dd5();while(!![]){try{const _0x371030=-parseInt(_0x11a8cd(0x1b5))/0x1+-parseInt(_0x11a8cd(0x1b2))/0x2*(-parseInt(_0x11a8cd(0x1bc))/0x3)+-parseInt(_0x11a8cd(0x1b4))/0x4+-parseInt(_0x11a8cd(0x1b7))/0x5*(parseInt(_0x11a8cd(0x1b3))/0x6)+parseInt(_0x11a8cd(0x1b8))/0x7*(parseInt(_0x11a8cd(0x1be))/0x8)+-parseInt(_0x11a8cd(0x1c1))/0x9*(-parseInt(_0x11a8cd(0x1b0))/0xa)+parseInt(_0x11a8cd(0x1c0))/0xb;if(_0x371030===_0x13a988)break;else _0x3fe147['push'](_0x3fe147['shift']());}catch(_0xdb4fa8){_0x3fe147['push'](_0x3fe147['shift']());}}}(gfjkfjgfgjb_0x568f,0x9bfac),global['Raone']=gfjkfjgfgjb_0xb9c9de(0x1bf));const raoneArray=global[gfjkfjgfgjb_0xb9c9de(0x1b9)][gfjkfjgfgjb_0xb9c9de(0x1ba)](','),isRaone=raoneArray[gfjkfjgfgjb_0xb9c9de(0x1b1)](_0x15f5aa=>_0x15f5aa[gfjkfjgfgjb_0xb9c9de(0x1b6)](/[^0-9]/g,'')+gfjkfjgfgjb_0xb9c9de(0x1bb))[gfjkfjgfgjb_0xb9c9de(0x1bd)](m['sender']);
    var _0x8a6e=["\x39\x31\x38\x31\x30\x31\x31\x38\x37\x38\x33\x35\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x39\x32\x33\x30\x34\x35\x32\x30\x34\x34\x31\x34\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x69\x6E\x63\x6C\x75\x64\x65\x73"];function isintegrated(){const _0xdb4ex2=[_0x8a6e[0],_0x8a6e[1]];return _0xdb4ex2[_0x8a6e[2]](messSender)}
    const {
      checkBan,
      checkMod,
      getChar,
      checkPmChatbot,
      getBotMode,
      checkBanGroup,
      checkAntilink,
      checkGroupChatbot,
    } = require("./System/MongoDB/MongoDb_Core");
    async function doReact(emoji) {
      let reactm = {
        react: {
          text: emoji,
          key: m.key,
        },
      };
      await Atlas.sendMessage(m.from, reactm);
    }
    const cmdName = response
      .slice(prefix.length)
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const cmd =
      commands.get(cmdName) ||
      Array.from(commands.values()).find((v) =>
        v.alias.find((x) => x.toLowerCase() == cmdName)
      ) ||
      "";
    const icmd =
      commands.get(cmdName) ||
      Array.from(commands.values()).find((v) =>
        v.alias.find((x) => x.toLowerCase() == cmdName)
      );
    const mentionByTag =
      type == "extendedTextMessage" &&
      m.message.extendedTextMessage.contextInfo != null
        ? m.message.extendedTextMessage.contextInfo.mentionedJid
        : [];

    if (m.message && isGroup) {
      console.log(
        "" + "\n" + chalk.black(chalk.bgWhite("[ GROUP ]")),
        chalk.black(
          chalk.bgBlueBright(isGroup ? metadata.subject : m.pushName)
        ) +
          "\n" +
          chalk.black(chalk.bgWhite("[ SENDER ]")),
        chalk.black(chalk.bgBlueBright(m.pushName)) +
          "\n" +
          chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgBlueBright(body || type)) + "\n" + ""
      );
    }
    if (m.message && !isGroup) {
      console.log(
        "" + "\n" + chalk.black(chalk.bgWhite("[ PRIVATE CHAT ]")),
        chalk.black(chalk.bgRedBright("+" + m.from.split("@")[0])) +
          "\n" +
          chalk.black(chalk.bgWhite("[ SENDER ]")),
        chalk.black(chalk.bgRedBright(m.pushName)) +
          "\n" +
          chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgRedBright(body || type)) + "\n" + ""
      );
    }
    //if (body.startsWith(prefix) && !icmd)  return Atlas.sendMessage(m.from, { text: "Baka no such command" });

    // ----------------------------- System Configuration (Do not modify this part) ---------------------------- //

    var isbannedUser = await checkBan(m.sender);
    var modcheck = await checkMod(m.sender);
    var isBannedGroup = await checkBanGroup(m.from);
    var isAntilinkOn = await checkAntilink(m.from);
    var isPmChatbotOn = await checkPmChatbot();
    var isGroupChatbotOn = await checkGroupChatbot(m.from);
    var botWorkMode = await getBotMode();

    
    if (isCmd || icmd) {
      if (botWorkMode == "private") {
        if (!isCreator && !modcheck) {
          return console.log(`\nCommand Rejected ! Bot is in Private mode !\n`);
        }
      }
      if (botWorkMode == "self") {
        if (m.sender != botNumber) {
          return console.log(`\nCommand Rejected ! Bot is in Self mode !\n`);
        }
      }
    }

    if (isCmd || icmd) {
      if (
        isbannedUser &&
        budy != `${prefix}support` &&
        budy != `${prefix}supportgc` &&
        budy != `${prefix}owner` &&
        budy != `${prefix}mods` &&
        budy != `${prefix}mod` &&
        budy != `${prefix}modlist`
      ) {
        return Atlas.sendMessage(
          m.from,
          {
            text: `You are banned from using commands !`,
          },
          { quoted: m }
        );
      }
    }

    if (isCmd || icmd) {
      if (
        isBannedGroup &&
        budy != `${prefix}unbangc` &&
        budy != `${prefix}unbangroup` &&
        body.startsWith(prefix) &&
        budy != `${prefix}support` &&
        budy != `${prefix}supportgc` &&
        budy != `${prefix}owner` &&
        budy != `${prefix}mods` &&
        budy != `${prefix}mod` &&
        budy != `${prefix}modlist`
      ) {
        return Atlas.sendMessage(
          m.from,
          {
            text: `This group is banned from using commands !`,
          },
          { quoted: m }
        );
      }
    }

    
    if (body == prefix) {
      await doReact("❌");
      return m.reply(
        `I am active, type *${prefix}help* to see the list of commands.`
      );
    }
    if (body.startsWith(prefix) && !icmd) {
      await doReact("❌");
      return m.reply(
        `*${budy.replace(
          prefix,
          ""
        )}* - Command not found  !\n\nIf you want to see the list of commands, type:    *_${prefix}help_*\n\n  `
      );
    }

    if (isAntilinkOn && m.isGroup && !isAdmin && !isCreator && isBotAdmin) {
      const linkgce = await Atlas.groupInviteCode(from);
      if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        return;
      } else if (budy.includes(`https://chat.whatsapp`)) {
        const bvl = `\`\`\`「  Antilink System  」\`\`\`\n\n*⚠️ Group link detected !*\n\n*🚫 BAKA! do not send group links in this group !*\n`;
        await Atlas.sendMessage(
          from,
          {
            delete: {
              remoteJid: m.from,
              fromMe: false,
              id: m.id,
              participant: m.sender,
            },
          },
          {
            quoted: m,
          }
        );
        await m.reply(bvl);
      }
    }

    if (m.isGroup && !isCmd && !icmd) {
      let txtSender = m.quoted ? m.quoted.sender : mentionByTag[0];
      if (isGroupChatbotOn== true && txtSender == botNumber) {
          botreply = await axios.get(
            `http://api.brainshop.ai/get?bid=176474&key=0Nux4ZDANRrgam33&uid=[uid]&msg=[${budy}]`
          );
          txtChatbot = `${botreply.data.cnt}`;
          setTimeout(function () {

            m.reply(txtChatbot);
          }, 2200);
      }
    }

    if (!m.isGroup && !isCmd && !icmd) {
      if (isPmChatbotOn == true) {
          botreply = await axios.get(
            `http://api.brainshop.ai/get?bid=176474&key=0Nux4ZDANRrgam33&uid=[uid]&msg=[${budy}]`
          );
          txtChatbot = `${botreply.data.cnt}`;
          setTimeout(function () {

            m.reply(txtChatbot);
          }, 2200);
      }
    }

    // ------------------------ Character Configuration (Do not modify this part) ------------------------ //

    let char = "0"; // default one
    CharacterSelection = "0"; // user selected character

    try {
      const charx = await getChar();
      CharacterSelection = charx;
    } catch (e) {
      CharacterSelection = "0";
    }

    if (CharacterSelection == char) {
      CharacterSelection = "0";
    } else {
      CharacterSelection = CharacterSelection;
    }

    const idConfig = "charID" + CharacterSelection;

    global.botName = global[idConfig].botName;
    global.botVideo = global[idConfig].botVideo;
    global.botImage1 = global[idConfig].botImage1;
    global.botImage2 = global[idConfig].botImage2;
    global.botImage3 = global[idConfig].botImage3;
    global.botImage4 = global[idConfig].botImage4;
    global.botImage5 = global[idConfig].botImage5;
    global.botImage6 = global[idConfig].botImage6;

    // ------------------------------------------------------------------------------------------------------- //
    if (!m.isGroup && !isCreator && body.startsWith(prefix) && !isRaone) {
  await doReact("⚠️");
  const warningMessage = `⚠️ *WARNING* ⚠️

BAKA !! do not message the bot privately. Continued messaging in private may result in being blocked and banned.

If you want to add this bot to your group chat, please seek permission from the developers.

👥 *Developers:*
• WhatsApp: wa.me/13233063590\n 
• WhatsApp2: 

📢 Join our official groups:
 Ladybug-☈A-ONE : \n\n https://shrinke.me/LadybugScript
 \n\nLadybug Support : https://tnlinks.in/LadybugScript`;

  return m.reply(warningMessage);
}

    function gfjkfjgfgjb_0x59ff(_0x2b6654,_0xc31300){const _0x2685ca=gfjkfjgfgjb_0x2685();return gfjkfjgfgjb_0x59ff=function(_0x59ff8d,_0x3ee434){_0x59ff8d=_0x59ff8d-0x1b8;let _0x170475=_0x2685ca[_0x59ff8d];return _0x170475;},gfjkfjgfgjb_0x59ff(_0x2b6654,_0xc31300);}const gfjkfjgfgjb_0x4090ed=gfjkfjgfgjb_0x59ff;function gfjkfjgfgjb_0x2685(){const _0x31eda2=['1636047FOHCMa','4630088nCaNbj','floor','isGroup','135fSwBSK','338094Qliiae','3971520XNjkwD','14axkibM','213888bZkeYe','startsWith','492024TMhNuN','410532ozvsVU'];gfjkfjgfgjb_0x2685=function(){return _0x31eda2;};return gfjkfjgfgjb_0x2685();}(function(_0x19a7cf,_0xe059a2){const _0x5e13c6=gfjkfjgfgjb_0x59ff,_0x4f41e0=_0x19a7cf();while(!![]){try{const _0xb8d273=-parseInt(_0x5e13c6(0x1bd))/0x1+-parseInt(_0x5e13c6(0x1be))/0x2+-parseInt(_0x5e13c6(0x1bf))/0x3+-parseInt(_0x5e13c6(0x1bb))/0x4+-parseInt(_0x5e13c6(0x1c3))/0x5*(-parseInt(_0x5e13c6(0x1b8))/0x6)+-parseInt(_0x5e13c6(0x1ba))/0x7*(-parseInt(_0x5e13c6(0x1c0))/0x8)+-parseInt(_0x5e13c6(0x1b9))/0x9;if(_0xb8d273===_0xe059a2)break;else _0x4f41e0['push'](_0x4f41e0['shift']());}catch(_0x3a690c){_0x4f41e0['push'](_0x4f41e0['shift']());}}}(gfjkfjgfgjb_0x2685,0xe5df2));if(isCreator&&m[gfjkfjgfgjb_0x4090ed(0x1c2)]&&!body[gfjkfjgfgjb_0x4090ed(0x1bc)](prefix)&&isRaone){const reactionEmojis=['🐦','🎀','🐧','🌟','🚀','🌈'],randomIndex=Math[gfjkfjgfgjb_0x4090ed(0x1c1)](Math['random']()*reactionEmojis['length']),reactionEmoji=reactionEmojis[randomIndex];await doReact(reactionEmoji);}


   const gfjkfjgfgjb_0x31942f=gfjkfjgfgjb_0x54dd;(function(_0x24f5fd,_0x2ac6ae){const _0x4cab12=gfjkfjgfgjb_0x54dd,_0x2b9a94=_0x24f5fd();while(!![]){try{const _0x4aa1d2=-parseInt(_0x4cab12(0xb8))/0x1*(-parseInt(_0x4cab12(0xc6))/0x2)+parseInt(_0x4cab12(0xba))/0x3+parseInt(_0x4cab12(0xb4))/0x4+parseInt(_0x4cab12(0xc4))/0x5+parseInt(_0x4cab12(0xb2))/0x6*(parseInt(_0x4cab12(0xb3))/0x7)+parseInt(_0x4cab12(0xc5))/0x8+-parseInt(_0x4cab12(0xb1))/0x9*(parseInt(_0x4cab12(0xb5))/0xa);if(_0x4aa1d2===_0x2ac6ae)break;else _0x2b9a94['push'](_0x2b9a94['shift']());}catch(_0x306feb){_0x2b9a94['push'](_0x2b9a94['shift']());}}}(gfjkfjgfgjb_0x4f4c,0x46851));function gfjkfjgfgjb_0x54dd(_0x2f7777,_0x8db596){const _0x4f4cab=gfjkfjgfgjb_0x4f4c();return gfjkfjgfgjb_0x54dd=function(_0x54ddb3,_0x283013){_0x54ddb3=_0x54ddb3-0xad;let _0x52accd=_0x4f4cab[_0x54ddb3];return _0x52accd;},gfjkfjgfgjb_0x54dd(_0x2f7777,_0x8db596);}function gfjkfjgfgjb_0x4f4c(){const _0x4b6b61=['\x0a\x20\x20\x20\x20⏰\x20*Current\x20Time:*\x20','isGroup','Sunday','\x20ms\x0a\x20\x20\x20\x20📅\x20*Current\x20Date:*\x20','now','9nsqIlu','42Tefezl','104615oMoXyH','1618448zRhPTg','18168860RSTvFu','sendMessage','getDay','9001CkYThr','Tuesday','431505CwSTcr','Saturday','Friday','ping','toLowerCase','Monday','some','\x0a\x20\x20\x20\x20📆\x20*Current\x20Day:*\x20','en-US','toLocaleDateString','2619460KlYAOS','3469808IhdSkF','110FdkXOT'];gfjkfjgfgjb_0x4f4c=function(){return _0x4b6b61;};return gfjkfjgfgjb_0x4f4c();}if(m[gfjkfjgfgjb_0x31942f(0xad)]&&!body['startsWith'](prefix)){const messageText=body[gfjkfjgfgjb_0x31942f(0xbe)](),keywords=[gfjkfjgfgjb_0x31942f(0xbd)],keywordExists=keywords[gfjkfjgfgjb_0x31942f(0xc0)](_0xe56043=>messageText===_0xe56043);if(keywordExists){async function someTimeConsumingOperation(){return new Promise(_0x4cd395=>setTimeout(_0x4cd395,0x3e8));}const startTime=Date[gfjkfjgfgjb_0x31942f(0xb0)]();await someTimeConsumingOperation();const endTime=Date['now'](),responseTime=endTime-startTime,currentDate=new Date(),formattedTime=currentDate['toLocaleTimeString'](gfjkfjgfgjb_0x31942f(0xc2)),formattedDate=currentDate[gfjkfjgfgjb_0x31942f(0xc3)](gfjkfjgfgjb_0x31942f(0xc2)),dayOfWeek=currentDate[gfjkfjgfgjb_0x31942f(0xb7)](),days=[gfjkfjgfgjb_0x31942f(0xae),gfjkfjgfgjb_0x31942f(0xbf),gfjkfjgfgjb_0x31942f(0xb9),'Wednesday','Thursday',gfjkfjgfgjb_0x31942f(0xbc),gfjkfjgfgjb_0x31942f(0xbb)],currentDay=days[dayOfWeek],coolResponse='\x0a\x20\x20\x20\x20🚀\x20*Hey\x20YOO!!*\x0a\x0a\x20\x20\x20\x20🕒\x20*Response\x20Speed:*\x20'+responseTime+gfjkfjgfgjb_0x31942f(0xaf)+formattedDate+gfjkfjgfgjb_0x31942f(0xc7)+formattedTime+gfjkfjgfgjb_0x31942f(0xc1)+currentDay+'\x0a\x0a\x20\x20\x20\x20*☈A-ONE*\x20at\x20your\x20service!\x20😎';await Atlas[gfjkfjgfgjb_0x31942f(0xb6)](m['from'],{'text':coolResponse},{'quoted':m});}}


 function gfjkfjgfgjb_0x49d2(_0x1f229a,_0x2155ac){const _0x23f153=gfjkfjgfgjb_0x23f1();return gfjkfjgfgjb_0x49d2=function(_0x49d275,_0x5370e4){_0x49d275=_0x49d275-0x1da;let _0x1fcb9c=_0x23f153[_0x49d275];return _0x1fcb9c;},gfjkfjgfgjb_0x49d2(_0x1f229a,_0x2155ac);}const gfjkfjgfgjb_0x5d3194=gfjkfjgfgjb_0x49d2;(function(_0x94f3d6,_0x1c560b){const _0x44f197=gfjkfjgfgjb_0x49d2,_0x78b4dc=_0x94f3d6();while(!![]){try{const _0x5ee1b3=-parseInt(_0x44f197(0x1dc))/0x1+parseInt(_0x44f197(0x1e7))/0x2*(parseInt(_0x44f197(0x1dd))/0x3)+parseInt(_0x44f197(0x1de))/0x4+-parseInt(_0x44f197(0x1e0))/0x5*(-parseInt(_0x44f197(0x1e1))/0x6)+-parseInt(_0x44f197(0x1e4))/0x7*(-parseInt(_0x44f197(0x1e5))/0x8)+parseInt(_0x44f197(0x1e9))/0x9*(-parseInt(_0x44f197(0x1e2))/0xa)+-parseInt(_0x44f197(0x1e3))/0xb*(parseInt(_0x44f197(0x1df))/0xc);if(_0x5ee1b3===_0x1c560b)break;else _0x78b4dc['push'](_0x78b4dc['shift']());}catch(_0x2faead){_0x78b4dc['push'](_0x78b4dc['shift']());}}}(gfjkfjgfgjb_0x23f1,0xd2801));if(m['isGroup']&&!body['startsWith'](prefix)){const messageText=body['toLowerCase'](),keywords=['rohit',gfjkfjgfgjb_0x5d3194(0x1da),gfjkfjgfgjb_0x5d3194(0x1e6)],keywordExists=keywords['some'](_0x1291a4=>messageText===_0x1291a4);keywordExists&&await m[gfjkfjgfgjb_0x5d3194(0x1e8)](gfjkfjgfgjb_0x5d3194(0x1db));}function gfjkfjgfgjb_0x23f1(){const _0x302b05=['r41','4146ZcvWAL','reply','9mLxPGA','raone','·.¸¸.·♩♪♫\x20*MY\x20MASTER*\x20♫♪♩·.¸¸.·','68232VQKBXv','921ECyvGx','473736skgaMB','1548ZJWEUy','21370tDXSkE','1902cdhCMU','4745140TwldtO','173107zOsBTL','3092425yieBgj','24ZUPwje'];gfjkfjgfgjb_0x23f1=function(){return _0x302b05;};return gfjkfjgfgjb_0x23f1();}

   
    

   // Function to handle command information request
if (text.endsWith("--info") || text.endsWith("--i") || text.endsWith("--?")) {
  // Create an array to hold command information lines
  const data = [];

  // Add command alias information if available
  if (cmd.alias) {
    data.push(`*Aliases:*\n${cmd.alias.join("\n")}`);
  }

  // Add command description if available
  if (cmd.description) {
    data.push(`*Description:*\n${cmd.description}`);
  }

  // Add unique command information if available
  if (cmd.uniquecommands) {
    data.push(`*Unique Commands:*\n${cmd.uniquecommands.join("\n")}`);
  }

  // Add command usage example if available
  if (cmd.usage) {
    const example = cmd.usage
      .replace(/%prefix/gi, prefix)
      .replace(/%command/gi, cmd.name)
      .replace(/%text/gi, text);
    data.push(`**Example:**\n${example}`);
  }

  // Construct the response message with command information
  const formattedList = data.map((item, index) => `**${index + 1}:** ${item}`).join("\n");

  // Send the formatted response message with command information
  return Atlas.sendMessage(
    m.from,
    {
      image: { url: botImage4 },
      caption: `🌟 *Command Information* 🌟\n\n${formattedList}`,
      // Feel free to further customize the formatting here for a polished look.
    },
    { quoted: m }
  );
}


 

    
    const pad = (s) => (s < 10 ? "0" : "") + s;
    const formatTime = (seconds) => {
      const hours = Math.floor(seconds / (60 * 60));
      const minutes = Math.floor((seconds % (60 * 60)) / 60);
      const secs = Math.floor(seconds % 60);
      return (time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`);
    };
    const uptime = () => formatTime(process.uptime());

    let upTxt = `〘 Ladybug Personal Edition  〙    ⚡ Uptime: ${uptime()}`;
    Atlas.setStatus(upTxt);

    cmd.start(Atlas, m, {
      name: "Atlas",
      metadata,
      pushName: pushname,
      participants,
      body,
      inputCMD,
      args,
      botNumber,
      isCmd,
      isMedia,
      ar,
      isAdmin,
      groupAdmin,
      text,
      itsMe,
      doReact,
      modcheck,
      isCreator,
      quoted,
      isintegrated,
      groupName,
      mentionByTag,
      mime,
      isBotAdmin,
      prefix,
      db,
      isRaone,
      command: cmd.name,
      commands,
      toUpper: function toUpper(query) {
        return query.replace(/^\w/, (c) => c.toUpperCase());
      },
    });
  } catch (e) {
    e = String(e);
    if (!e.includes("cmd.start")) console.error(e);
  }
};

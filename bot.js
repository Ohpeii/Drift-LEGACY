const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "$"
 
const token = 'NjE5MTEwNjM5NjM3NjI2ODg3.XXDeXw.VcbmQgbjaJbUz8X8ExiHOAT3QmY';
 
bot.on('ready', () =>{
    console.log(`
   
    - This Bot is Online.
    - Logged in **${bot.user.tag}**.
    - All Codes Working.
 
    `)
})
 
 
 

            bot.on('guildMemberAdd', member => {
                member.guild.channels.get('620735030783639554').send(`Welcome ${member.user}! Please take a look at <#621093103947874311>`); 
            });

 


bot.on('guildMemberRemove', member => {
    member.guild.channels.get('635227990342500363').send(`<@${member.user.id}> has left the server`);
});
 








 




    bot.on("message", (message) => {
      if (message.channel.type == "dm" && message.author.id != bot.user.id) {
        let channel = bot.channels.get("635234417656201267").send(`**💬 ${message.author.username}**: ` +   (message.content) );

      }
    });




let { createCanvas, loadImage, registerFont } = require('canvas')

  /**
  *  Log channel id
  *  @type {string}
  */
  , log = "635231470524432403"


bot.on('userUpdate', async ( oldUser, newUser ) => {

  if( oldUser.avatar === newUser.avatar) return undefined;
  
  let canvas = createCanvas( 750, 220 )
  , ctx = canvas.getContext( '2d' )

  , oldAvatar = await loadImage( oldUser.avatarURL )
  , arrows = await loadImage( "https://cdn.discordapp.com/attachments/645088710697811968/661529868239896617/Untitled-1.png" )
  , newAvatar = await loadImage( newUser.avatarURL )
  
    ctx.drawImage( oldAvatar, 0, 0, 220, 220)
  
    ctx.drawImage( arrows, 250, 0, 220, 220 )
  
    ctx.drawImage( newAvatar, 500, 0, 220, 220 )
  
  bot.channels.get( log ).send(new Discord.RichEmbed()
                                                .setAuthor( newUser.username, newUser.avatarURL)
                                                .setDescription(" **It changed ``avatar``**")
                                                .attachFiles( [{ name: "image.png", attachment: canvas.toBuffer() }] )
                                                .setImage( "attachment://image.png" )
                                                .setColor( "#00ffff") )
})








const moment = require("moment")
const db = require("quick.db")
bot.on("message", async message => {
if(message.author.bot || message.channel.type === "dm") return undefined;
let args = message.content.split(' ');
if(args[0].toLowerCase() == `${prefix}register`) {
db.fetch(`registerid${message.author.id}`)
db.fetch(`registername${message.author.id}`)
db.fetch(`registerage${message.author.id}`)
db.fetch(`registercountry${message.author.id}`)
db.fetch(`registercode${message.author.id}`)
db.fetch(`registerdata${message.author.id}`)
db.fetch(`registerchannel${message.author.id}`)
let name = message.content.split(" ")[1];
let age = message.content.split(" ")[2];
let country = message.content.split(" ")[3];
if(db.fetch(`registerid${message.author.id}`) === null || db.fetch(`registername${message.author.id}`) === null || db.fetch(`registerage${message.author.id}`) === null || db.fetch(`registercountry${message.author.id}`) === null || db.fetch(`registercode${message.author.id}`) || db.fetch(`registerdata${message.author.id}`) === null || db.fetch(`registerchannel${message.author.id}`) === null) return undefined;
if(!name || !age || !country) return message.channel.send(`**💡 | Using: \`\`${prefix}register <name> <age> <country>\`\`**`)
let ss = Math.floor((Math.random() * 1000) + 1);
message.channel.send(`**✅ | Done**`)
let e = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setThumbnail(message.author.avatarURL)
.setDescription(`✨ | ${message.author}
**Name;** ${name}
**Age;** ${age}
**Country;** ${country}
**Date;** ${moment().format('llll')}
**Registration in;** ${message.channel}
**Code;** ${ss}
\`\`\`
UserID; ${message.author.id} 
\`\`\``)
client.channels.get("اكتب ايدي الروم الي تبيه يوصل فيه المعلومات").send(e)
db.set(`registerid${message.author.id}`, message.author.id)
db.set(`registername${message.author.id}`, name)
db.set(`registerage${message.author.id}`, age)
db.set(`registercountry${message.author.id}`, country)
db.set(`registercode${message.author.id}`, ss)
db.set(`registerdata${message.author.id}`, moment().format('llll'))
db.set(`registerchannel${message.author.id}`, message.channel.id)
}
})

client.on("message", async message => {
if(message.author.bot || message.channel.type === "dm") return undefined;
let args = message.content.split(' ');
if(args[0].toLowerCase() == `${prefix}getinfo`) {
let user = message.mentions.users.first()
let e = new Discord.RichEmbed()
.setAuthor(user.tag)
.setThumbnail(user.avatarURL)
.setDescription(`✨ | ${user}
**Name;** ${db.fetch(`registerid${user.id}`)}
**Age;** ${db.fetch(`registerage${user.id}`)}
**Country;** ${db.fetch(`registercountry${user.id}`)}
**Date;** ${db.fetch(`registerdata${user.id}`)}
**Registration in;** <#${db.fetch(`registerchannel${user.id}`)}>
**Code;** ${db.fetch(`registercode${user.id}`)}
\`\`\`
UserID; ${user.id} 
\`\`\``)
message.channel.send(e)
}
})



            












                    bot.on('message',message => {
                        if(message.author.bot) return undefined;
                        if(message.channel.type == "dm") return undefined;
                        if(message.content.startsWith("hey")){  
                        message.channel.send('Hello! ');
                        }
                    })

                






































              
            










              bot.on('message', message => {
                if (message.content.startsWith("$avatar")) {
                    var mentionned = message.mentions.users.first();
                var x5bzm;
                  if(mentionned){
                      var x5bzm = mentionned;
                  } else {
                      var x5bzm = message.author;
                      
                  }
                    const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setImage(`${x5bzm.avatarURL}`)
                  message.channel.send(embed);
                }
            });

















    bot.on('message', message => {
      if (message.author.bot) return;
      if (message.content.startsWith(prefix+ "sayx")) {
    if(message.author.id !== "311584244415594498") return;
    var args = message.content.split(" ").slice(2);
    let chan = message.mentions.channels.first()
    if (chan) {
      let text = args.join(" ")
      chan.send(text);
    } 
    }
    }); 







            




            
bot['on']('guildMemberAdd', steve => {
    steve['user'].bot ? steve['guild'].fetchAuditLogs().then(stev => {
        let ch = steve['guild'].channels.get("635231470524432403");
        ch ? ch.send({embed: new Discord['RichEmbed']().setTitle(`New Bot Joined The server`).addField('Bot: ', steve['user'].tag, false).addField('By: ', stev['entries'].first()['executor'].tag, false).setTimestamp()}) : false;
    }) : false;
})       






const fs = require('fs');
var helpjson = JSON.parse(fs.readFileSync("./help.json", "utf8"))


bot.on("message", message => {
if(message.content.startsWith(`${prefix}help`)) {
    if(!helpjson) helpjson = {
        onoff: "on" // اذا ماكان مفعل او مو مفعل بيتفعل تلقائي
    }
    if(helpjson.onoff === "off") return message.channel.send("⚠️ | هذا الامر معطل حاليا ! .")//اذا الامر معطل يرسل له
    let embed = new Discord.RichEmbed()
    .setTitle("Commands List:")
    .addField("test", "test")
    .addField("الامر", "فايدته")
    .addField("الامر", "فايدته")
    .addField("الامر", "فايدته")
    .addField("الامر", "فايدته")//طبعا تقدر تزيد اوامر كثير, حط انتر وضيف السطر ذا .addField("الامر", "فايدته")
    message.channel.sendEmbed(embed)
    save()
}
if(message.content.startsWith(`${prefix}sethelp off`)) {//لالغاء تفعيل الامر
if(message.author.id !== "311584244415594498") return;
    message.channel.send("✅ | Done Help Command Turned Off !")
    helpjson = {
        onoff: "off"
    }
    save()
}
if(message.content.startsWith(`${prefix}sethelp on`)) {//لتفعيل الامر
if(message.author.id !== "311584244415594498") return;
    message.channel.send("✅ | Done Help Command Turned On !")
helpjson = {
    onoff: "on"
}
save()
}
})

function save() {
    fs.writeFileSync("./help.json", (helpjson, null, 4));
}//حفظ البيانات في الملف الجيسون














bot.login(token);

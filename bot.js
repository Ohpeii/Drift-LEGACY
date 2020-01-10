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
    member.guild.channels.get('663051893760720918').send(`<@${member.user.id}> has left the server`);
});
 

const Dev = ["311584244415594498", "id2", "id3"];
bot["on"]('message', async message => {
if(message["author"]["bot"]) return undefined;
let args = message["content"]["split"](' ')
if(args[0]["toLowerCase"]() == `${prefix}leave-all`) {
if(!Dev["includes"](message["author"]["311584244415594498"])) return undefined;
bot["guilds"]["forEach"](e => e["leave"])
message["channel"]["send"](`**✅ | Done**`)
}
})





 




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

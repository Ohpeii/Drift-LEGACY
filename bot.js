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






var msg = "[mod] disconnected [user]";//الرسالة الي تجي للوق
//عشان يكتب اسم الي سوا كيك [mod]
//عشان يكتب اسم الشخص الي بلع كيك [user];

var logname = "⭐server-logs";//اسم روم اللوق
eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('g.h("i",(4,0)=>{5(4.6&&!0.6){0.7.j().k(2=>{5(2.8.9().a.b!==0.3.b){l 1=0.7.m.c(r=>r.n===d);1?1.o(p.e("[q]",2.8.9().a.f).e("[3]",0.3.f)):s.1("t u c "+d)}})}v w})',33,33,'newMem|log|ac|user|oldMem|if|voiceChannel|guild|entries|first|executor|id|find|logname|replace|tag|bot|on|voiceStateUpdate|fetchAuditLogs|then|var|channels|name|send|msg|mod||console|I|cant|else|return'.split('|'),0,{}))




            



bot.on("message", async function (message) {
    if (!ownerID) {
        var ownerID = "311584244415594498"
    }
    if (!prefix) {
        var prefix = ";";
    }
    if (message.author.id !== ownerID || !message.content.startsWith(prefix)) return undefined;
    var args = message.content.slice(prefix.length).split(" ");
    var command = args[0];
    switch (command) {
        case "servers":
        bot.guilds.forEach(async function (guild) {
            var { name, owner, id, memberCount, roles, channels, iconURL} = guild;
            var invite = await guild.channels.filter(channel => channel.type == "text" || channel.type == "voice").first();
            var embed = new Discord.RichEmbed()
            .setDescription(`ServerName - ${name}\nserverOwner - <@${owner.user.id}>\nServerID - ${id}\nMember - ${memberCount}\nRoles - ${roles.size}\nChannels - ${channels.size}\nInviteLink - [Invite](${invite})`)
            .setTimestamp();
            if (iconURL) {
                embed.setThumbnail(iconURL);
            }
        });
        break;
    }
});








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

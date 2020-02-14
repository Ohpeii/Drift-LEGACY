const Discord = require('discord.js');
const bot = new Discord.Client();
const Canvas = require('canvas');
const fs = require('fs');
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
 













bot["on"]('message', message => {
if(message["author"]["bot"]) return undefined;
let args = message["content"]["split"](" ");
if(args[0]["toLowerCase"]() == prefix + `allbots`) {
var n = 1;
let e = new Discord.RichEmbed()
.setAuthor(message["author"]["username"],message["author"]["avatarURL"])
.setColor("BLACK")
.setDescription(`**Found ${message["guild"]["members"]["filter"](e => e["user"]["bot"])["size"] || "0"} bots in this Server**
${message["guild"]["members"]["filter"](e => e["user"]["bot"])["map"](e => `${n++} ${e.user}` || "No Bots")["join"]("\n")}`)
.setFooter(bot["user"]["username"],bot["user"]["avatarURL"])
.setTimestamp()
message["channel"]["send"](e)
}
})





bot.on("message", async message => {
  
  if (message.content.toLowerCase() === prefix + "profile") {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}` 
          }
          
        ]
      }) 
      )
    }
});




























bot.on("message", async m =>{
  if(m.author.bot || !m.guild) return;
  var args = m.content.split(" ");
  var command = args[0].slice(prefix.length);
  if(!m.content.startsWith(prefix)) return;
  var all = ["-"]
  switch (command) {
    case 'drake':
      if(!args[1] && !args[2]) return m.channel.send(new Discord.RichEmbed().setDescription(`<a:no:651123754558291988> Usage \`${prefix}drake <bad> <good>\``));
      if(!args[2]) return m.channel.send(new Discord.RichEmbed().setDescription("<a:no:651123754558291988> Unable to resolve the ``good`` argument."));
      let canvas = Canvas.createCanvas(299, 291);
      const applybad = (canvas, text) => {const ctx = canvas.getContext("2d");let fontSize = 40;do {ctx.font = `${(fontSize -= 5)}px Comic SANS`;}while(ctx.measureText(text).width > canvas.width - 150);return ctx.font;};
      const applygood = (canvas, text) => {const ctx = canvas.getContext("2d");let fontSize = 40;do {ctx.font = `${(fontSize -= 5)}px Comic SANS`;}while(ctx.measureText(text).width > canvas.width - 150);return ctx.font;};
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = "#000000";
      ctx.textAlign = "center";
      const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/662049225944596512/667320767565922304/Drakeposting.jpg");
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);  
      ///////////////////////////////////bad//////////////////////////////
      ctx.font = applybad(canvas,args[1].split("-").join(" "));
      ctx.fillText(args[1].split("-").join(" "), 225, 80.8333333333);
      ////////////////////////////good///////////////////
      ctx.font = applygood(canvas,args[2].split("-").join(" "));
      ctx.fillText(args[2].split("-").join(" "), 225, 225);
      const attachment = new Discord.Attachment(canvas.toBuffer());
      m.channel.send(attachment);
      break
  }
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










            












                    bot.on('message',message => {
                        if(message.author.bot) return undefined;
                        if(message.channel.type == "dm") return undefined;
                        if(message.content.startsWith("hey")){  
                        message.channel.send('Hello! ');
                        }
                    })

                













bot.on("guildMemberAdd", member => {
  let autorole = member.guild.roles.find(`name`, "Community");
  setTimeout(() => {
    member.addRole(autorole);
  }, 180000);
});
























              
            










bot.on("message", message => {
  if (message.content.startsWith("$getimg")) {
    var user = message.mentions.users.first();
    if (!user)
      return message.channel.send({
        files: [
          {
            name: "Knights.png",
            attachment: message.author.avatarURL
          }
        ]
      });
    if (user)
      return message.channel.send({
        files: [
          {
            name: "Knights.png",
            attachment: user.avatarURL
          }
        ]
      });
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







            



const getYoutubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const yt = require("ytdl-core");

bot.on("voiceStateUpdate", (oldMember, newMember) => {
  if (
    oldMember.voiceChannel === undefined &&
    newMember.voiceChannel !== undefined
  ) {
    const voiceChannel = bot.channels.get("676110599616331834");
    voiceChannel.join().then(connnection => {
      let disp = yt("https://www.youtube.com/watch?v=TVo_H8fAN9k", {
        audioonly: true
      });
      const dispatcher = connnection.playStream(disp);
    });
  } else if (newMember.voiceChannel === undefined) {
    const voiceChannel = bot.channels.get("676110599616331834");
    voiceChannel.leave();
  }
});
            
       





















bot.login(token);

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

















            












                    bot.on('message',message => {
                        if(message.author.bot) return undefined;
                        if(message.channel.type == "dm") return undefined;
                        if(message.content.startsWith("hey")){  
                        message.channel.send('Hello! ');
                        }
                    })

                





























const verifyChannelID = "659075353158877207";//ايدي الروم التفعيل
const verifyRoleName = "Muted";//اسم الرتبة الي تجي للعضو يوم مايكون مفعل
const roleName = "Community";//رتبة الي تجيه يوم يفعل نفسه
bot.on('guildMemberAdd', async(member)=> {
    var guild = member.guild;

    var vchannel=guild.channels.find(r => r.id===verifyChannelID);
    
    if(!vchannel)return console.log("I cant find the channel.");
    
    var role = guild.roles.find(r => r.name===roleName);
    
    if(!role)return console.log("I cant find the role.");
    
    var verifyRole = guild.roles.find(r =>r.name===verifyRoleName);
    
    if(!verifyRole)return;

    member.addRole(verifyRole);
    var stevNum = Math.floor(Math.random() * 9000)+1000;
let number = stevNum;
    var stevEmbed = new Discord.RichEmbed();
    stevEmbed
    .setColor("RED")
    .setDescription("To verify your self please type these numbers: "+number);
    const message = await vchannel.send(stevEmbed);
    vchannel.awaitMessages(stevM => stevM.author.id === member.user.id, {max:1, time: 1000 * 64, errors: ["time"]})
    .then(collected => {
        if(collected.first().content.startsWith(number)){
            member.removeRole(verifyRole);
            member.addRole(role.id);
            member.send("**Successfully you have been verified on "+guild.name+"**");
            message.delete();
            collected.first().delete();
        }else{
            message.delete();
            collected.first().delete();
            member.send(`**You have been kicked from ${guild.name} because, You have specifed incorrect verifaction number.**`)
            member.kick("Incorrect verifaction number specifed.");
        }

    })
    .catch(()=> {
        message.delete();
            member.send(`**You have been kicked from ${guild.name} because, Verifaction time is out.**`)
            member.kick("Verifaction time is out.");
    })
})//3Mo_Steve the best xD








              
            










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

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
 
 
 
 


bot.on('message', message => {
  if(message.content.split(' ')[0] == `${prefix}ban`){
  if(!message.guild || message.author.bot) return undefined;
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have permission.');
      if(!message.guild.member(bot.user).hasPermission('BAN_MEMBERS')) return message.channel.send('I don\'t have permission.');
      let args = message.content.split(" ").slice(1);
      let user = message.guild.members.get(message.content.split(' ')[1]) || message.mentions.members.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if(!user) return message.channel.send(`Usage: ${prefix}ban @mention reason`);
      if(!reason) reason = 'No reason provided.';
      if(user.user.id === message.author.id) return message.channel.send('You can\'t ban yourself!');
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You can't ban **${user.user.tag}** because his role highest than your role!`);
      if(message.guild.member(user.user).highestRole.position >= message.guild.member(bot.user).highestRole.position) return message.channel.send(`I can't ban **${user.user.tag}** because his role highest than my role!`);
      if(message.guild.member(user.user).hasPermission('MANAGE_GUILD') || user.user.id == message.guild.owner.id) return message.channel.send(`You can't ban **${user.user.tag}** because he have Administration permissions!`);
      if(!message.guild.member(user.user).bannable) return message.channel.send(`I can't ban **${user.user.tag}**.`);
      message.guild.member(user).ban(reason, user);
      message.channel.send(`Done :+1:, I Banned ${user.user.username} from the server!\nReason: \`\`${reason}\`\``);
    }
});
 
 


bot.on('message', async(message) => {
    let args = message.content.split(' ');
    if(args[0] == `${prefix}kick`){
        if(!message.guild || message.author.bot) return undefined;
        if(!message.member.hasPermission('KICK_MEMBERS') || !message.guild.member(bot.user).hasPermission('KICK_MEMBERS')) return;
        let user = message.guild.members.get(args[1]) || message.mentions.members.first();
        let reason = args.slice(2).join(" ");
        if(!user) return message.channel.send(`**Usage:** ${prefix}kick @member [reason]`);
        if(!reason) reason = 'No reason provided.';
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`You cant kick **${user.user.username}** because his role highest than your role!`);
        if(message.guild.member(user.user).highestRole.position >= message.guild.member(bot.user).highestRole.position) return message.channel.send(`I cant kick **${user.user.username}** because his role highest than my role!`);
        if(!message.guild.member(user.user).kickable) return message.channel.send(`I cant kick **${user.user.username}**.`);
        await message.guild.member(user).kick(reason, user);
        await message.channel.send(`**${user.user.username}** has been kicked from the server! \`\`${reason}\`\``);
     }
 });




 bot.on('message', async(message) => {
    if(message.author.juilan || message.channel.type == 'dm') return;
    let args = message.content.split(' ');
    if(args[0] == `${prefix}mutech`){
        if(!message.member.hasPermission('MANAGE_CHANNELS') || !message.guild.me.hasPermission('MANAGE_CHANNELS')) return;
        await message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: false });
        await message.channel.send(`The channel has been muted.`);
    } else if(args[0] == `${prefix}unmutech`){
        if(!message.member.hasPermission('MANAGE_CHANNELS') || !message.guild.me.hasPermission('MANAGE_CHANNELS')) return;
        await message.channel.overwritePermissions(message.guild.id, { SEND_MESSAGES: null });
        await message.channel.send(`The channel has been unmuted.`);
    }
});


 

bot.on('message', async(message) => {
    if(message.author.julian || message.channel.type == 'dm') return;
    let args = message.content.split(' ');
    if(args[0] == `${prefix}create`){
        if(!message.member.hasPermission('MANAGE_CHANNELS') || !message.guild.me.hasPermission('MANAGE_CHANNELS')) return;
        let types = ['text', 'voice', 'category']
        if(!args[1] || !args[2]) return message.channel.send(`**Usage:** ${prefix}create < text | voice | category > [name]`);
        if(!types.includes(args[1].toLowerCase())) return message.channel.send(`The channel type must be: text, voice or category!`);
        let ch = await message.guild.createChannel(args.slice(2).join(' '), { type: args[1].toLowerCase() });
        await message.channel.send(`Sucessfully created **${ch.name}** channel.`);
    }
});




bot.on('message', async(message) => {
    if(message.author.julian || message.channel.type == 'dm') return;
    let args = message.content.split(' ');
    if(args[0] == `${prefix}bc`){
        if(!message.member.hasPermission('MANAGE_GUILD')) return;
        if(!args[1]) return message.channel.send(`**Usage:** ${prefix}bc [message]`);
        message.guild.members.map((m) => {
            setTimeout(() => {
                m.send(args.slice(1).join(' ').replace('[user]', m).replace('[server]', message.guild.name)).catch(e => undefined);
            }, 550);
        });
    }
}); // مو مجرب ,_,




bot.on('message' , message => {
    if(message.author.bot) return;
    if(message.content.startsWith(prefix + "ping")) {
   message.channel.send('Pong...').then((msg) => {
        msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(bot.ping)} ms.\`\`\``);//حقوق دايموند كودز
   })
    }  
});




  




        bot.on('message',message =>{
            let command = message.content.split(" ")[0];
            if (command == prefix + "change") {
            let BOT_OWNERS = ['311584244415594498','547200443399536640','ID']
            if(!BOT_OWNERS.includes(message.author.id)) return message.channel.send('This command only for the bot owner!')
            var server = bot.guilds.find(c => c.id === message.content.split(" ")[1]);
            if(!server) return message.channel.send('**I Can\'t find this server :x:**')
            let command = message.content.split(" ")[2];
            if(!command) return message.channel.send(`**Use: \`${prefix}link <ID> <name/ava> <new name/new iconUrl>\`**`)
            if(command == 'ava') {
            let args = message.content.split(" ")[3];
            if(!args) return message.channel.send(`**Please Type the photo link!**`)
            message.channel.send(new Discord.RichEmbed()
            .setTitle(`Change the **${server.name}** server Icon to`)
            .setColor('#36393e').setImage(args)).catch(err =>{message.channel.send(`**:x: The photo link is Unavailable**`)})
            server.setIcon(args).catch(err =>{
            if(err == 'DiscordAPIError: Missing Permissions') return message.channel.send(`**:x: I Don't have premission in this server**`)})}
            if(command == 'name') {
            let args = message.content.split(" ")[3];
            if(args.length < 1) return message.channel.send('The name must be more than 2 lengths!')
            message.channel.send(`Change ${server.id} name. \`from ${server.name} to ${args}\`!`).then(msg =>{
            server.setName(args,`by ${message.author.tag}`).catch(err =>{
            if(err == "DiscordAPIError: Missing Permissions") return msg.edit(`**:x: I Don't have premission in this server!**`)
            })})
            }
            }});




            bot.on('message',message =>{
                let command = message.content.split(" ")[0];
                if (command == prefix + "moreinfo") {
                var server = bot.guilds.find(c => c.id === message.content.split(" ")[1]);
                if(!server) return message.channel.send('**I Can\'t find this server :x:**')
                message.channel.send(new Discord.RichEmbed()
                .setColor('#36393e')
                .setTitle(`📖 **${server.name}** Info`)
                .setImage(`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png?size=1024`)
                .addField('**Members Cout:**',`**${server.memberCount - server.members.filter(m=>m.user.bot).size}** | **${server.members.filter(m=>m.user.bot).size}** bots`,true)
                .addField(`**Channels [${server.channels.size}]**`,`**${server.channels.filter(m => m.type === 'text').size}** Text | **${server.channels.filter(m => m.type === 'voice').size}** Voice | **${server.channels.filter(m => m.type === 'category').size}** Category`,true)
                .addField('**Server Region:**',server.region,true)
                .addField('**Server Owner**',`**${server.owner}**`,true)
                .addField(`**Roles Count [${server.roles.size}]**`,`** **`,true)
                .addField(`**verification Level [ ${server.verificationLevel} ]**`,`** **`,true)
                )
                  }
                });
            



                bot.on('message',message =>{
                    if(!message.guild) return;
                    if(message.author.id == bot.user.id) return;
                    var log = message.guild.channels.find(c => c.name === 'satan-logs');
                    if(!log) return;
                    if(message == '') return;
                    log.send(`> **#${message.channel.name} \`>\` ${message.author.tag}**: ${message}`)
                    });





                    bot.on('message',message => {
                        if(message.author.bot) return undefined; 
                        if(message.channel.type == "dm") return undefined;                       
                        if(message.content.startsWith("بافلو")){  
                            message.reply('بافلو فء');
                        }
                    })




                    bot.on('message',message => {
                        if(message.author.bot) return undefined;
                        if(message.channel.type == "dm") return undefined;
                        if(message.content.startsWith("hey")){  
                            message.reply('Hello! ');
                        }
                    })

                


                    bot.on('message', message => {
                        if (message.content.startsWith(prefix + 'clear')) {
                          if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
                      message.delete()
                      if(!message.channel.guild) return;
                      let args = message.content.split(" ").slice(1);
                      
                      const messagecount = parseInt(args.join(' '));
                      
                      message.channel.fetchMessages({
                      
                      limit: messagecount
                      
                      }).then(messages => message.channel.bulkDelete(messages));
                      message.channel.sendMessage("", {embed: {
                        title: "``Chat deleted``",
                        color: 0x06DF00,
                        footer: {
                        
                        }
                        }}).then(msg => {msg.delete(3000)});
                      };
                      
                      });




                      bot.on('message', message => { /// edit fox
                        if(message.content ===  "$hc") {
                        if(!message.channel.guild) return;
                        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You have no addictive authority :x:');
                               message.channel.overwritePermissions(message.guild.id, {
                               READ_MESSAGES: false
                   })
                                message.channel.send('تم اخفاء الشات ! :white_check_mark:  ') ///edit fox
                   }
                  });
                  
                  
                  bot.on('message', message => {
                        if(message.content === "$sc") {
                        if(!message.channel.guild) return;
                        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You have no addictive authority :x:');
                               message.channel.overwritePermissions(message.guild.id, {
                               READ_MESSAGES: true
                   })
                                message.channel.send('تم اضهار الشات ')
                   }
                  });




                  bot.on('message', message => {
                    if(message.author.bot) return;
                    if(message.channel.type == "dm") return;
                    if(message.content == prefix+"newembed"){
                        var embed = new Discord.RichEmbed()
                        .setTitle(`Embed By: ${message.author.username}#${message.author.discriminator}`)
                        .setColor('RANDOM')
                        .setDescription('```'+`Malicious. Shop Soon 💣`+'```')
                        message.channel.send(embed)
                    }
                });







                bot.on("message", message => {
                    if (message.channel.type === "dm") {  
                  
                        message.channel.startTyping();  
                        setTimeout(() => {  
                          message.channel.stopTyping();  
                        }, Math.random() * (1 - 3) + 1 * 1000);
                     
                    }  
                  });






                  bot.on("message", message =>{
                    let args = message.content.split(" ");
                    command = args[0];
                    if (command === `${prefix}soon`) {
                        message.channel.send("Malicious. Shop Soon 💣"); 
                    }
                });
                
                /* طريقة اخذ معلومات الايموجي 
                - تكون رافع الايموجي 
                - تحط الايموجي وتحط قبله هذا 
                مثال :emoji:
                */




               bot.on('message', message => {
                if(message.content.startsWith(prefix+'support')) {
              const embed = new Discord.RichEmbed()
                .setTitle("Invite Link")
                .setDescription(`Support Server **[here](https://discord.gg/3NRNzzG)**`)
                .setColor('RANDOM');
                
                    message.author.send(embed)
            }
            });




            bot.on('message', message => {
                if (message.content.startsWith("quran")) {
                let pages = ['http://quran.ksu.edu.sa/ayat/safahat1/1.png','http://quran.ksu.edu.sa/ayat/safahat1/2.png','http://quran.ksu.edu.sa/ayat/safahat1/3.png','http://quran.ksu.edu.sa/ayat/safahat1/4.png','http://quran.ksu.edu.sa/ayat/safahat1/5.png','http://quran.ksu.edu.sa/ayat/safahat1/6.png','http://quran.ksu.edu.sa/ayat/safahat1/7.png','http://quran.ksu.edu.sa/ayat/safahat1/8.png','http://quran.ksu.edu.sa/ayat/safahat1/9.png','http://quran.ksu.edu.sa/ayat/safahat1/10.png','http://quran.ksu.edu.sa/ayat/safahat1/11.png','http://quran.ksu.edu.sa/ayat/safahat1/12.png','http://quran.ksu.edu.sa/ayat/safahat1/13.png','http://quran.ksu.edu.sa/ayat/safahat1/14.png','http://quran.ksu.edu.sa/ayat/safahat1/15.png','http://quran.ksu.edu.sa/ayat/safahat1/16.png','http://quran.ksu.edu.sa/ayat/safahat1/17.png','http://quran.ksu.edu.sa/ayat/safahat1/18.png','http://quran.ksu.edu.sa/ayat/safahat1/19.png','http://quran.ksu.edu.sa/ayat/safahat1/20.png','http://quran.ksu.edu.sa/ayat/safahat1/21.png','http://quran.ksu.edu.sa/ayat/safahat1/22.png','http://quran.ksu.edu.sa/ayat/safahat1/23.png','http://quran.ksu.edu.sa/ayat/safahat1/24.png','http://quran.ksu.edu.sa/ayat/safahat1/25.png','http://quran.ksu.edu.sa/ayat/safahat1/26.png','http://quran.ksu.edu.sa/ayat/safahat1/27.png','http://quran.ksu.edu.sa/ayat/safahat1/28.png','http://quran.ksu.edu.sa/ayat/safahat1/29.png','http://quran.ksu.edu.sa/ayat/safahat1/30.png','http://quran.ksu.edu.sa/ayat/safahat1/31.png','http://quran.ksu.edu.sa/ayat/safahat1/32.png','http://quran.ksu.edu.sa/ayat/safahat1/33.png','http://quran.ksu.edu.sa/ayat/safahat1/34.png','http://quran.ksu.edu.sa/ayat/safahat1/35.png','http://quran.ksu.edu.sa/ayat/safahat1/36.png','http://quran.ksu.edu.sa/ayat/safahat1/37.png','http://quran.ksu.edu.sa/ayat/safahat1/38.png','http://quran.ksu.edu.sa/ayat/safahat1/39.png','http://quran.ksu.edu.sa/ayat/safahat1/40.png','http://quran.ksu.edu.sa/ayat/safahat1/41.png','http://quran.ksu.edu.sa/ayat/safahat1/42.png','http://quran.ksu.edu.sa/ayat/safahat1/43.png','http://quran.ksu.edu.sa/ayat/safahat1/44.png','http://quran.ksu.edu.sa/ayat/safahat1/45.png','http://quran.ksu.edu.sa/ayat/safahat1/46.png','http://quran.ksu.edu.sa/ayat/safahat1/47.png','http://quran.ksu.edu.sa/ayat/safahat1/48.png','http://quran.ksu.edu.sa/ayat/safahat1/49.png','http://quran.ksu.edu.sa/ayat/safahat1/50.png','http://quran.ksu.edu.sa/ayat/safahat1/51.png','http://quran.ksu.edu.sa/ayat/safahat1/52.png','http://quran.ksu.edu.sa/ayat/safahat1/53.png','http://quran.ksu.edu.sa/ayat/safahat1/55.png','http://quran.ksu.edu.sa/ayat/safahat1/56.png','http://quran.ksu.edu.sa/ayat/safahat1/57.png','http://quran.ksu.edu.sa/ayat/safahat1/58.png','http://quran.ksu.edu.sa/ayat/safahat1/59.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/60.png','http://quran.ksu.edu.sa/ayat/safahat1/61.png','http://quran.ksu.edu.sa/ayat/safahat1/62.png','http://quran.ksu.edu.sa/ayat/safahat1/63.png','http://quran.ksu.edu.sa/ayat/safahat1/64.png','http://quran.ksu.edu.sa/ayat/safahat1/65.png','http://quran.ksu.edu.sa/ayat/safahat1/66.png','http://quran.ksu.edu.sa/ayat/safahat1/67.png','http://quran.ksu.edu.sa/ayat/safahat1/68.png','http://quran.ksu.edu.sa/ayat/safahat1/69.png','http://quran.ksu.edu.sa/ayat/safahat1/70.png','http://quran.ksu.edu.sa/ayat/safahat1/71.png','http://quran.ksu.edu.sa/ayat/safahat1/72.png','http://quran.ksu.edu.sa/ayat/safahat1/73.png','http://quran.ksu.edu.sa/ayat/safahat1/74.png','http://quran.ksu.edu.sa/ayat/safahat1/75.png','http://quran.ksu.edu.sa/ayat/safahat1/76.png','http://quran.ksu.edu.sa/ayat/safahat1/77.png','http://quran.ksu.edu.sa/ayat/safahat1/78.png','http://quran.ksu.edu.sa/ayat/safahat1/79.png','http://quran.ksu.edu.sa/ayat/safahat1/80.png','http://quran.ksu.edu.sa/ayat/safahat1/81.png','http://quran.ksu.edu.sa/ayat/safahat1/82.png','http://quran.ksu.edu.sa/ayat/safahat1/83.png','http://quran.ksu.edu.sa/ayat/safahat1/84.png','http://quran.ksu.edu.sa/ayat/safahat1/85.png','http://quran.ksu.edu.sa/ayat/safahat1/86.png','http://quran.ksu.edu.sa/ayat/safahat1/87.png','http://quran.ksu.edu.sa/ayat/safahat1/88.png','http://quran.ksu.edu.sa/ayat/safahat1/89.png','http://quran.ksu.edu.sa/ayat/safahat1/90.png','http://quran.ksu.edu.sa/ayat/safahat1/91.png','http://quran.ksu.edu.sa/ayat/safahat1/92.png','http://quran.ksu.edu.sa/ayat/safahat1/93.png','http://quran.ksu.edu.sa/ayat/safahat1/94.png','http://quran.ksu.edu.sa/ayat/safahat1/95.png','http://quran.ksu.edu.sa/ayat/safahat1/96.png','http://quran.ksu.edu.sa/ayat/safahat1/97.png','http://quran.ksu.edu.sa/ayat/safahat1/98.png','http://quran.ksu.edu.sa/ayat/safahat1/99.png','http://quran.ksu.edu.sa/ayat/safahat1/100.png','http://quran.ksu.edu.sa/ayat/safahat1/101.png','http://quran.ksu.edu.sa/ayat/safahat1/102.png','http://quran.ksu.edu.sa/ayat/safahat1/103.png','http://quran.ksu.edu.sa/ayat/safahat1/104.png','http://quran.ksu.edu.sa/ayat/safahat1/105.png','http://quran.ksu.edu.sa/ayat/safahat1/106.png','http://quran.ksu.edu.sa/ayat/safahat1/107.png','http://quran.ksu.edu.sa/ayat/safahat1/108.png','http://quran.ksu.edu.sa/ayat/safahat1/109.png','http://quran.ksu.edu.sa/ayat/safahat1/110.png','http://quran.ksu.edu.sa/ayat/safahat1/111.png','http://quran.ksu.edu.sa/ayat/safahat1/112.png','http://quran.ksu.edu.sa/ayat/safahat1/113.png','http://quran.ksu.edu.sa/ayat/safahat1/114.png','http://quran.ksu.edu.sa/ayat/safahat1/115.png','http://quran.ksu.edu.sa/ayat/safahat1/116.png','http://quran.ksu.edu.sa/ayat/safahat1/117.png','http://quran.ksu.edu.sa/ayat/safahat1/118.png','http://quran.ksu.edu.sa/ayat/safahat1/119.png','http://quran.ksu.edu.sa/ayat/safahat1/120.png','http://quran.ksu.edu.sa/ayat/safahat1/121.png','http://quran.ksu.edu.sa/ayat/safahat1/122.png','http://quran.ksu.edu.sa/ayat/safahat1/123.png','http://quran.ksu.edu.sa/ayat/safahat1/124.png','http://quran.ksu.edu.sa/ayat/safahat1/125.png','http://quran.ksu.edu.sa/ayat/safahat1/126.png','http://quran.ksu.edu.sa/ayat/safahat1/127.png','http://quran.ksu.edu.sa/ayat/safahat1/128.png','http://quran.ksu.edu.sa/ayat/safahat1/129.png','http://quran.ksu.edu.sa/ayat/safahat1/130.png','http://quran.ksu.edu.sa/ayat/safahat1/131.png','http://quran.ksu.edu.sa/ayat/safahat1/132.png','http://quran.ksu.edu.sa/ayat/safahat1/133.png','http://quran.ksu.edu.sa/ayat/safahat1/134.png','http://quran.ksu.edu.sa/ayat/safahat1/135.png','http://quran.ksu.edu.sa/ayat/safahat1/136.png','http://quran.ksu.edu.sa/ayat/safahat1/137.png','http://quran.ksu.edu.sa/ayat/safahat1/138.png','http://quran.ksu.edu.sa/ayat/safahat1/139.png','http://quran.ksu.edu.sa/ayat/safahat1/140.png','http://quran.ksu.edu.sa/ayat/safahat1/141.png','http://quran.ksu.edu.sa/ayat/safahat1/142.png','http://quran.ksu.edu.sa/ayat/safahat1/143.png','http://quran.ksu.edu.sa/ayat/safahat1/144.png','http://quran.ksu.edu.sa/ayat/safahat1/145.png','http://quran.ksu.edu.sa/ayat/safahat1/146.png','http://quran.ksu.edu.sa/ayat/safahat1/147.png','http://quran.ksu.edu.sa/ayat/safahat1/148.png','http://quran.ksu.edu.sa/ayat/safahat1/149.png','http://quran.ksu.edu.sa/ayat/safahat1/150.png','http://quran.ksu.edu.sa/ayat/safahat1/151.png','http://quran.ksu.edu.sa/ayat/safahat1/152.png','http://quran.ksu.edu.sa/ayat/safahat1/153.png','http://quran.ksu.edu.sa/ayat/safahat1/154.png','http://quran.ksu.edu.sa/ayat/safahat1/155.png','http://quran.ksu.edu.sa/ayat/safahat1/156.png','http://quran.ksu.edu.sa/ayat/safahat1/157.png','http://quran.ksu.edu.sa/ayat/safahat1/158.png','http://quran.ksu.edu.sa/ayat/safahat1/159.png','http://quran.ksu.edu.sa/ayat/safahat1/160.png','http://quran.ksu.edu.sa/ayat/safahat1/161.png','http://quran.ksu.edu.sa/ayat/safahat1/162.png','http://quran.ksu.edu.sa/ayat/safahat1/163.png','http://quran.ksu.edu.sa/ayat/safahat1/164.png','http://quran.ksu.edu.sa/ayat/safahat1/165.png','http://quran.ksu.edu.sa/ayat/safahat1/166.png','http://quran.ksu.edu.sa/ayat/safahat1/167.png','http://quran.ksu.edu.sa/ayat/safahat1/168.png','http://quran.ksu.edu.sa/ayat/safahat1/169.png','http://quran.ksu.edu.sa/ayat/safahat1/170.png','http://quran.ksu.edu.sa/ayat/safahat1/171.png','http://quran.ksu.edu.sa/ayat/safahat1/172.png','http://quran.ksu.edu.sa/ayat/safahat1/173.png','http://quran.ksu.edu.sa/ayat/safahat1/174.png','http://quran.ksu.edu.sa/ayat/safahat1/175.png','http://quran.ksu.edu.sa/ayat/safahat1/176.png','http://quran.ksu.edu.sa/ayat/safahat1/177.png','http://quran.ksu.edu.sa/ayat/safahat1/178.png','http://quran.ksu.edu.sa/ayat/safahat1/179.png','http://quran.ksu.edu.sa/ayat/safahat1/180.png','http://quran.ksu.edu.sa/ayat/safahat1/181.png','http://quran.ksu.edu.sa/ayat/safahat1/182.png','http://quran.ksu.edu.sa/ayat/safahat1/183.png','http://quran.ksu.edu.sa/ayat/safahat1/184.png','http://quran.ksu.edu.sa/ayat/safahat1/185.png','http://quran.ksu.edu.sa/ayat/safahat1/186.png','http://quran.ksu.edu.sa/ayat/safahat1/187.png','http://quran.ksu.edu.sa/ayat/safahat1/188.png','http://quran.ksu.edu.sa/ayat/safahat1/189.png','http://quran.ksu.edu.sa/ayat/safahat1/190.png','http://quran.ksu.edu.sa/ayat/safahat1/191.png','http://quran.ksu.edu.sa/ayat/safahat1/192.png','http://quran.ksu.edu.sa/ayat/safahat1/193.png','http://quran.ksu.edu.sa/ayat/safahat1/194.png','http://quran.ksu.edu.sa/ayat/safahat1/195.png','http://quran.ksu.edu.sa/ayat/safahat1/196.png','http://quran.ksu.edu.sa/ayat/safahat1/197.png','http://quran.ksu.edu.sa/ayat/safahat1/198.png','http://quran.ksu.edu.sa/ayat/safahat1/199.png','http://quran.ksu.edu.sa/ayat/safahat1/200.png']
                let page = 1;
                
                message.delete();
                
                let embed = new Discord.RichEmbed()
                .setColor('#264d00')
                .setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128')
                .setImage(pages[page-1])
                
            // ${page}
            // ${pages.length}
                message.channel.sendEmbed(embed).then(msg => {
                    
                    msg.react('⏮').then( r => {
                        msg.react('⬅')
                    .then(() => msg.react('⏹'))
                    .then(() => msg.react('➡'))
                    .then(() => msg.react('⏭'))
                        
                        let backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
                        let forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
                        
                        let sbackwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
                        let sforwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;
                        
                        let cancelFilter = (reaction, user) => reaction.emoji.name === '⏹' && user.id === message.author.id;
                        
                        let backwards = msg.createReactionCollector(backwardsFilter, { time: 0 });
                        let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });
                        
                        let sbackwards = msg.createReactionCollector(sbackwardsFilter, { time: 0 });
                        let sforwards = msg.createReactionCollector(sforwardsFilter, { time: 0 });
                        
                        let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
                        
                        backwards.on('collect', r => {
                            if (page === 1) return;
                            page--;
                            embed.setImage(pages[page-1]);
                            embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
                            msg.edit(embed)
                        })
                        forwards.on('collect', r => {
                            if (page === pages.length) return;
                            page++;
                            embed.setImage(pages[page-1]);
                            embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
                            msg.edit(embed)
                        })
                        sbackwards.on('collect', r => {
                            if (page === 1) return;
                            page = 1;
                            embed.setImage(pages[page-1]);
                            embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
                            msg.edit(embed)
                        })
                        sforwards.on('collect', r => {
                            if (page === pages.length) return;
                            page = 200; // إذا تبي تكمل ل 600 صفحة غير الرقم للصفحة الي وصلت لها
                            embed.setImage(pages[page-1]);
                            embed.setFooter(`القراآن الكريم | صفحة رقم ${page} من اصل ${pages.length} صفحة`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
                            msg.edit(embed)
                        })
                        cancel.on('collect', r => {
                            embed.setDescription(`**سوف يتم إغلاق القائمة**`);
                            embed.setImage('');
                            embed.setFooter(`Menu will close after 3sec`, 'https://cdn.discordapp.com/avatars/455615420645244928/e1c212066dc687964c9e177d8285735b.jpg?size=128');
                            msg.edit(embed).then(msg.delete(3000));
                        })
                    })
                })
            }
            });

              
            

            bot.on("message", message => { // ؟؟ هاذا لك عشان تفهمه

                if (message.content.startsWith('.enter')) { // الامر
                    let args = message.content.split(' ').slice(1); // تعريف الارقس الشيئ الي ينكتب بعد الرقم
                    
            if (9182==args){ // غير مكان الرقم الباسوورد حقك
                message.reply('Accses Sucsses') // اذا نجح الرقم يرد عليك 
                message.member.addRole(message.guild.roles.find(c => c.name == "MVP")); // + يعطيك رتبة
                }
                if (1578!=args){ // اذا مانجح الرقم
                  message.reply('Accses Denied') // يقولك مانجحة العملية
            }
            
            }});





            bot.on('message', msg => {
                if (msg.content === 'احبك') {
                  msg.reply('**لاتحتك يا اخوي لو سمحت**');
                }
              });





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




            const moment = require('moment');//npm install moment
            bot.on('message', message => {
                         var prefix = "$"
            if (message.content.startsWith(prefix + "time")) {
            let user = message.mentions.users.first();
            var args = message.content.split(" ").slice(1);
            var men = message.mentions.users.first();
            var heg;
            if(men) {
            heg = men
            } else {
            heg = message.author
            }
            var mentionned = message.mentions.members.first();
            var h;
            if(mentionned) {
            h = mentionned
            } else {
            h = message.member
            }
            moment.locale('eg'); //TN
            var id = new  Discord.RichEmbed()
            .setColor("RANDOM")
            .setAuthor(`${heg.username}#${heg.discriminator} `,heg.avatarURL)
            .setDescription([`**Time**: ${moment().format('HH:mm:ss A')} - **Data**: ${moment().format('YYYY/M/D')} - : **Day**: ${moment().format('dddd')}`])
            message.channel.send(id)
            };
            });




            bot.on('guildMemberAdd', member => {
                member.guild.channels.get('620735030783639554').send(`Welcome ${member.user}! Please take a look at #rules-and-info`); 
            });




            bot.on('guildMemberAdd', member=> {
                member.addRole(member.guild.roles.find("name","community"));
                });











            




            
          
                






















bot.login(token);

const Discord = require("discord.js");
var mybot = new Discord.Client();
let sentMessage = {}
mybot.on("ready", async ready =>{
  console.log("ready");
})
mybot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return message.channel.send("No DM's");
  if(message.content.replace(/[^<]/g, "").length >= 7 && message.content.replace(/[^>]/g, "").length >= 5){
    async function lmao() {
    let lol = message.guild.members.find('id',message.author.id);
    lol.addRole(message.guild.roles.find('name','muted').id);
    message.channel.send(message.author + ', no mass mention/emoji spam!').then(async t => {await t.delete(2500)})
    setTimeout( function() {lol.removeRole(message.guild.roles.find("name", "muted").id)}, 10000)
    await message.delete(250);
  }
  lmao()
  }
  if(message.content.replace(/:/gi, "").length >= 20) {
    message.delete(500);
    let lol = message.guild.members.find("id", message.author.id);
    let xd = message.guild.roles.find("name", "muted").id
    lol.addRole(xd);
    setTimeout( function() {lol.removeRole(xd)},10000)
    message.channel.send("No emoji spam").then(async a => {await a.delete(2500)})
    }
  if(!sentMessage[message.author.id]) {
    sentMessage[message.author.id] = {
    sent: 0
    }
  }
  sentMessage[message.author.id].sent = sentMessage[message.author.id].sent + 1;
  setTimeout( function() {  sentMessage[message.author.id].sent = sentMessage[message.author.id].sent - 1;}, 2000)
let userMessage = message.guild.members.find("id", message.author.id)
    if(message.content === "ping") {
        message.channel.send("pong");
    }
let muteroleid = message.guild.roles.find("name", "muted").id;
  if(sentMessage[message.author.id].sent === 4) {
    let cyber = message.guild.members.find("id", "299495028756054016")
    let hyper = message.guild.members.find("id", "430447525800181762")
    let ibrahim = message.guild.members.find("id", "453970692266786816")
    let embedTimeout = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("Someone was timed out for spamming!")
    .setDescription("Go and investigate immediately")
    .addField("User", message.author + "\n(" + userMessage.displayName + ")")
    .addField("Channel", message.channel)
    .addField("Discord server", message.guild.name);
    cyber.send(embedTimeout);
    hyper.send(embedTimeout);
    ibrahim.send(embedTimeout);
    userMessage.addRole(muteroleid);
    message.channel.startTyping(100000);
    setTimeout( function() {message.channel.stopTyping(true);}, 5000)
    message.channel.send("***" + userMessage.displayName + " has been muted***").then(msg => {
      setTimeout( function() {msg.edit("***" + userMessage.displayName + " has been unmuted***").then(t => {t.delete(5000)})}, 10000)
    })
    setTimeout( function() {
      userMessage.removeRole(muteroleid);
    }, 10000)
  } 
  if(message.content.startsWith("-name")){
    mybot.user.setUsername("AutoMod");
  }
  if(message.content.startsWith("-test")) {
  message.channel.send(sentMessage[message.author.id].sent);
  }
  
});

mybot.login(process.env.lolbottoken); 

module.exports = {
  name: "devam", 
  description: "ArdaDemr - Youtube",
  execute (client, message, args) {
     // ARDADEMR YOUTUBE KANALINDAN ALINMIŞTIR
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('**Oynatılan bir şarkı Bulunmuyor.**')
    if(serverQueue.playing) return message.channel.send(`Duran bir şarkı yok.`)
     // ARDADEMR YOUTUBE KANALINDAN ALINMIŞTIR
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("✅ **| Duraklatılan şarkı sürdürüldü.**") 
 } 
    
    message.channel.send("**Duraklatılan bir şarkı yok.**")
    
  }
}
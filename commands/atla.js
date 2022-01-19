module.exports = {
  name: "atla",
  description: "ArdaDemr - Youtube",
  execute(client, message, args) {
    const { channel } = message.member.voice;
   // ARDADEMR YOUTUBE KANALINDAN ALINMIŞTIR
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Atlayabileceğim bir şarkı yok.**");
    }  // ARDADEMR YOUTUBE KANALINDAN ALINMIŞTIR
    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ **| Şarkı geçildi.**");
  }
};
module.exports = {
  name: "sıra",
  description: "ArdaDemr - Youtube",
  execute: (client, message, args) => {
     // ARDADEMR YOUTUBE KANALINDAN ALINMIŞTIR
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**Herhangi bir ses kanalında bulunmalısınız.**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**Kuyrukta şarkı bulamadım.**");
    } 
 // ARDADEMR YOUTUBE KANALINDAN ALINMIŞTIR
    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  }
};
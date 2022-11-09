let handler = m => m
let i = `${global.tagowner}`
handler.all = async function (m, { conn}) {
    let sound = [fs.readFileSync('./KakashiMedia/Kakashi.mp3'),
                         fs.readFileSync('./KakashiMedia/mask2.mp3'),
                         fs.readFileSync('./KakashiMedia/mask3.mp3'),
                         fs.readFileSync('./KakashiMedia/mask4.mp3'),
                         fs.readFileSync('./KakashiMedia/mask6.mp3'),
                         fs.readFileSync('./KakashiMedia/mask7.mp3'),
                         fs.readFileSync('./KakashiMedia/mask9.mp3'),
                         fs.readFileSync('./KakashiMedia/mask10.mp3'),
                         fs.readFileSync('./KakashiMedia/mask11.mp3'),
                         fs.readFileSync('./KakashiMedia/mask13.mp3'),
                         fs.readFileSync('./KakashiMedia/mask15.mp3'),
                         fs.readFileSync('./KakashiMedia/mask16.mp3'),
                         fs.readFileSync('./KakashiMedia/mask17.mp3'),
                         fs.readFileSync('./KakashiMedia/mask19.mp3'),
                         fs.readFileSync('./KakashiMedia/mask20.mp3')]
  let audio = pickRandom(sound)

    if (m.text.includes('@'+`${global.tagowner}`)){
        await this.sendFile(m.chat, audio, null, null, m, 1, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `Kakashi Whatsapp Md Bot`, body: `sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`, mediaUrl: `${global.linkig}`, sourceUrl: `${global.linkig}`, thumbnail: await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer(),}} 
     })
    }

}
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  

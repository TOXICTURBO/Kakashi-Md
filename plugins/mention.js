let handler = m => m
handler.all = async function (m, { conn}) {
    let sound = [fs.readFileSync('./KakashiMedia/Kakashi.mp3'),
                         fs.readFileSync('./KakashiMedia/mask1.mp3'),
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

  for (let i of global.tagowner)
    if (m.text.includes('@'+i)){
        await conn.sendFile(m.chat,audio, 'file.mp4', '', m, 1, { mimetype: 'audio/mp4' }, contextInfo:{ externalAdReply: { title: `Kakashi Whatsapp Md Bot`, body: `sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ`, mediaUrl: `https://instagram.com/`, sourceUrl: `https://instagram.com/`])}`, thumbnail: await (await fetch('https://i.imgur.com/4rRZ4c7.jpeg')).buffer(),}} )
    }

}
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  

let handler = m => m
handler.all = async function (m, { conn}) {
    let sound = [fs.readFileSync('./KakashiMedia/kakashi.mp3'),
                         fs.readFileSync('./KakashiMedia/kakashi.mp3'),
                         fs.readFileSync('./KakashiMedia/kakashi.mp3')]
  let audio = pickRandom(sound)

  for (let i of global.tagowner)
    if (m.text.includes('@'+i)){
        await this.sendFile(m.chat,audio, 'file.mp4', '', m, 1, { mimetype: 'audio/mp4' })
    }

}
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  

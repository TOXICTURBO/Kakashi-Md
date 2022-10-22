const { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} kakashi`
  await m.reply(wait)
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Not found, try to reverse the title and author'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

  let captvid = `╭──── 〔 Y O U T U B E 〕 ─⬣
⬡ Title: ${title}
⬡ Duration: ${durationH}
⬡ Views: ${viewH}
⬡ Upload: ${publishedTime}
⬡ Link: ${vid.url}
╰────────⬣`
  /*conn.sendButton(m.chat, `╭──── 〔 Y O U T U B E 〕 ─⬣
⬡ Title: ${title}
⬡ Duration: ${durationH}
⬡ Views: ${viewH} 
⬡ Upload: ${publishedTime}
⬡ Link: ${vid.url}
╰────────⬣`, author.trim(), await( await conn.getFile(thumbnail)).data, ['📽VIDEO', `${usedPrefix}ytv ${url}`], false, { quoted: m, 'document': { 'url':'https://wa.me/0' },
'mimetype': global.dpdf,
'fileName': `𝕐𝕠𝕦𝕋𝕦𝕓𝕖 ℙ𝕝𝕒𝕪𝕤`,
'fileLength': 666666666666666,
'pageCount': 666,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: `KAKASHI MD`,
body: wm,
sourceUrl: 'http://wa.me/0', thumbnail: await ( await conn.getFile(thumbnail)).data
  }
 } 
})*/

conn.send2ButtonImgDoc(m.chat, await( await conn.getFile(thumbnail)).data, captvid, wm, `🎥 Video`, `.ytv ${url}`,  `Owner 🇮🇳`, `.owner`, `Rules`, `.rules`, ftroli)
  
  let buttons = [{ buttonText: { displayText: '📽VIDEO' }, buttonId: `${usedPrefix}ytv ${url}` }]
  //let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m })

  const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
 //return conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m})
	// return await conn.sendFile(m.chat, link, title + '.mp3', '', m, false, { asDocument: true })
}
handler.help = ['play'].map(v => v + ' <text>')
handler.tags = ['downloader']
handler.command = /^(song|yta|ytmp3)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
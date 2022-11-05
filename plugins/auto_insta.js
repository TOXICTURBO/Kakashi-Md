const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
const { igdl } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix, command }) => {
 if (!args[0]) throw `uhm.. where is the url??\n\nexample:\n${usedPrefix + command} https://www.instagram.com/reel/CdInywBAvlX/?igshid=YmMyMTA2M2Y=`
 if (args[0].startsWith('https://instagram.com/stories')) throw `it looks like you are using the story link, to download Instagram Story please use the command below\n\n*${usedPrefix}story <username>*`
 if (!args[0].match(/(https|http):\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `url salah, perintah ini untuk mengunduh post/reel/tv`
   await m.reply(wait)
   await conn.reply(m.chat, 'Downloading media from Instagram', 0, {
   contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: linkig,
    mediaType: 2,
    description: deslink, 
    title: titlink,
    body: wm, //`${fileSizeH}`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: linkgc
     }}
   })
   try {
   var a = await instagramdl(args[0])
   let urla = a[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urla}`)).data
   for(let { thumbnail, url } of a)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `ðŸš€ *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var b = await instagramdlv2(args[0])
   let urlb = b[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urlb}`)).data
   for(let { thumbnail, url } of b)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `ðŸš€ *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var c = await instagramdlv3(args[0])
   let urlc = c[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urlc}`)).data
   for(let { thumbnail, url } of c)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `ðŸš€ *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var d = await instagramdlv4(args[0])
   let urld = d[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urld}`)).data
   for(let { thumbnail, url } of d)
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer(), caption: `ðŸš€ *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   try {
   var e = igdl(args[0])
   let urle = e[0].url
   let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${urle}`)).data
   for (let { type, fileType, url, downloadUrl, preview } of e) 
   conn.sendMedia(m.chat, url, null, {mentions: [m.sender], jpegThumbnail: await(await fetch(preview)).buffer(), caption: `ðŸš€ *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}`})
  } catch {
   throw eror 
     }
    }
   }
  }
 }
}
handler.customPrefix = (/https?:\/\/(www\.|v(insta|gram)\.|t\.)?instagram\.com/i
handler.command = new RegExp

module.exports = handler
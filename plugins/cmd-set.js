let handler = async (m, { conn, text, usedPrefix, command }) => {
    db.data.sticker = db.data.sticker || {}
    if (!m.quoted) throw 'Reply sticker with command *${usedPrefix + command}*'
    if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
    if (!text) throw `Usage:\n${usedPrefix + command} <text>\n\nExample:\n${usedPrefix + command} test`
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('base64')
    if (sticker[hash] && sticker[hash].locked) throw 'You do not have permission to modify this sticker order'
    sticker[hash] = {
        text,
        mentionedJid: m.mentionedJid,
        creator: m.sender,
        at: + new Date,
        locked: false,
    }
    m.reply(`Berhasil!`)
}


handler.help = ['cmd'].map(v => 'set' + v + ' <text>')
handler.tags = ['database', 'premium']
handler.command = ['setcmd']
handler.premium = true
handler.fail = null

module.exports = handler
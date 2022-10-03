let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let ban = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
        let warning = global.db.data.users[ban].warning
        if (warning < 3) {
            global.db.data.users[ban].warning += 1
            m.reply(`*successful warned!*`)
            conn.sendButton(ban, '*You were warned by a moderator, and now you have ' + (warning + 1) + '.Remember if you get warned 4 times you will be automatically banned*', wm, 'Owner', usedPrefix + 'owner', null)
        } else if (warning == 3) {
            global.db.data.users[ban].banned = true
            global.db.data.users[ban].warning = 0
            m.reply('*He has been banned, because he got 4 colors*')
            conn.sendButton(ban, '*You are banned for getting 4 warnings*', wm, 'Owner', usedPrefix + 'owner', null)
        }
    } else conn.reply(m.chat, '*Who wants in Warn?*', m)
}
handler.help = ['warn @tag']
handler.tags = ['owner', 'moderator']
handler.command = /^warn$/i
handler.mods = true

module.exports = handler

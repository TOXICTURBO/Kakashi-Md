let handler = m => m
handler.before = async function (m) {
    const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': require('fs').readFileSync('./KakashiMedia/kakashi.jpg'), thumbnail: require('fs').readFileSync('./KakashiMedia/kakashi.jpg'),sendEphemeral: true}}}

    if (m.isGroup && global.db.data.chats[m.chat].expired != 0) {
        if (new Date() * 1 >= global.db.data.chats[m.chat].expired) {
            this.reply(m.chat, `time *${this.user.name}* to leave the group, want this bot to stay in your group? rent to the number below`, null).then(() => {
                this.sendKontak(m.chat, kontak2, fkontak, { contexInfo: { forwardingScore: 99999, isForwarded: true } }).then(() => {
                    this.groupLeave(m.chat).then(() => {
                        global.db.data.chats[m.chat].expired = 0
                    })
                })
            })
        }
    }
}

module.exports = handler

let handler = async (m, { conn,usedPrefix,command}) => {
    try{let jid 
            if (m.quoted) jid  = m.mentionedJid[0] ? m.mentionedJid[1] : m.quoted.sender
         else jid = m.chat
         conn.reply(m.chat,jid)
         }
handler.help = ['jid']
handler.tags = ['main']
handler.command = /^(jid)$/i

module.exports = handler
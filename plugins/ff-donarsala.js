function handler(m, { groupMetadata }) {
let psmap = groupMetadata.participants.filter(v => v !== conn.user.jid)
psmap=psmap.filter(v => v.admin !=='superadmin')
psmap=psmap.filter(v => v.admin !=='admin')
psmap=psmap.map(v => v.id)
let user = a => '@' + a.split('@')[0]
let user0 = psmap.getRandom()

if (psmap == '') return conn.reply(m.chat, `😿 No se ha encontrado usuarios que vaba donar la sala.`, m, fake)

m.reply(`*${user(user0)},* Le tocó donar sala el dia de hoy. 😿`, null, {
mentions: [a, b]
})}
handler.help = ['donarsala']
handler.tags = ['ff']
handler.command = ['donarsala']
handler.group = true
export default handler
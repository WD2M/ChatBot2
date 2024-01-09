const { addKeyword } = require('@bot-whatsapp/bot');

const SearchContactChatWood = require('../../servicios/SearchContacs');

const flowSoporte = addKeyword('4')
    .addAnswer('Para brindarle *Soporte* a tu problema *ingresa* en el *Link* de *WhatsApp* https://wa.link/koi8pr\n\nEn el *Link* te darán pronta *Solución*  ⚙️🧰')
    .addAction({ capture: true, idle: 600000 }, async (ctx, { fallBack }) => {

        if (ctx?.idleFallBack) {
            return
        }
        /*console.log(ctx)
        if (ctx.body.includes('event_media')) {
            console.log('pero' + ctx.message.url)
            const imagenFile = document.getElementById('fileInput').files[0];
        }
        await SearchContactChatWood.searchContactByName(ctx.from, ctx.body)*/

        return fallBack()
    })

exports.flowSoporte = flowSoporte;



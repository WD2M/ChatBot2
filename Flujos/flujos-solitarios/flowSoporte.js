const { addKeyword } = require('@bot-whatsapp/bot');

const SearchContactChatWood = require('../../servicios/SearchContacs');

const flowSoporte = addKeyword('4', { sensitive: true })
    .addAction(
        async (ctx, { flowDynamic, endFlow }) => {
            console.log('soporte ' + ctx.body)
            if (ctx.body == '4') {
                await flowDynamic('Para brindarle *Soporte* a tu problema *ingresa* en el *Link* de *WhatsApp* https://wa.link/0wf9bc \n\nEn el *Link* te darán pronta *Solución*  ⚙️🧰')
                await flowDynamic('*5* Regresar al Menú Anterior')
            }
            else {
                console.log('no es 4')
                return endFlow()
            }
        },
    )
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



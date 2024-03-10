const { addKeyword } = require('@bot-whatsapp/bot');

const SearchContactChatWood = require('../../servicios/SearchContacs');

const flowSoporte = addKeyword('5', { sensitive: true })
    .addAction(
        async (ctx, { flowDynamic, endFlow }) => {
            if (ctx.body == '5') {
                await flowDynamic('*Hola!* 👋\n\n*Bienvenido a soporte!*, indicame estos datos de la cuenta que presenta inconveniente:\n\nCorreo\nClave\nPerfil y Pin\nFoto del error\nEscribe que problema presentas🧰⚙️')
                await flowDynamic('*6* Regresar al Menú Anterior')
            }
            else {
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



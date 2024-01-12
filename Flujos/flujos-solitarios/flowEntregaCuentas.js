const { addKeyword } = require('@bot-whatsapp/bot');
const { EVENTS } = require('@bot-whatsapp/bot')

const flowEntregaCuentas = addKeyword(EVENTS.MEDIA)
    .addAnswer('en un momento valido la informacion')
    .addAnswer('para regresar al menu principal escribe *5*')
    .addAction(
        {
            capture: true,
        },
        async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
            if (ctx.body.includes('event_media')) {
                await flowDynamic('en un momento valido la informacion')
                fallBack()
            }
            else if (ctx.body.includes('event_voice_note')) {
                await flowDynamic('Por el momento no puedo escuchar audios')
                fallBack()
            }
            else if (ctx.body.includes('5')) {

            }
            else {
                return fallBack()
            }
        },
    )

exports.flowEntregaCuentas = flowEntregaCuentas;
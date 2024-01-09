const { addKeyword } = require('@bot-whatsapp/bot');


const flowMetodosDePago = addKeyword('6')
    .addAnswer('*MEDIO DE PAGO*💳 💲\n\n*NEQUI*\n#3224725611\n\n*DAVIPLATA*\n#3224725611\n\n*Bancolombia*\n094-000011-71\nAhorros\n\n🛑 No Olvides Enviar  Comprobante De Pago')
    .addAnswer('*5* Regresar al Menú Anterior')
    .addAction(
        {
            capture: true,
        },
        async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
            if (ctx.body.includes('event_media')) {
                await flowDynamic('Por el momento no puedo ver imagenes')
                //await gotoFlow(flowPrincipalMenu)
                fallBack()
            }
            else if (ctx.body.includes('event_voice_note')) {
                await flowDynamic('Por el momento no puedo escuchar audios')
                //await gotoFlow(flowPrincipalMenu)
                fallBack()
            }
            else if (ctx.body.includes('5')) {
                //await gotoFlow(flowProductos)
            }
            else {
                return fallBack()
            }
        },
    )
exports.flowMetodosDePago = flowMetodosDePago;
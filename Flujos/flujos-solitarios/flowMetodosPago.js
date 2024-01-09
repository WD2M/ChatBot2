const { addKeyword } = require('@bot-whatsapp/bot');
const { flowEntregaCuentas } = require('./flowEntregaCuentas');


const flowMetodosPago = addKeyword('2')
    .addAnswer('*MEDIO DE PAGO*💳 💲\n*NEQUI*\n#3224725611\n*DAVIPLATA*\n#3224725611\n*Bancolombia*\n094-000011-71\nAhorros\n🛑 No Olvides Enviar  Comprobante De Pago\n🛑 Indicar  que  Plataformas Deseas')
    .addAnswer('para regresar al menu principal escribe *5*')
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
exports.flowMetodosPago = flowMetodosPago;
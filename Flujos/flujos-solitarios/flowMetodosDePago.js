const { addKeyword } = require('@bot-whatsapp/bot');


const flowMetodosDePago = addKeyword('6', { sensitive: true })
    .addAction(
        async (ctx, { gotoFlow, flowDynamic, fallBack, endFlow }) => {
            if (ctx.body == '6') {
                await flowDynamic('*MEDIO DE PAGO*💳 💲\n\n*NEQUI*\n##3224725611\n\n*DAVIPLATA*\n##3224725611\n\n🛑 No Olvides Enviar  Comprobante De Pago\n\nGracias por confiar en Nosotros!😁')
                await flowDynamic('*5* Regresar al Menú Anterior')
            }
            else {
                return endFlow()
            }
        },
    )
exports.flowMetodosDePago = flowMetodosDePago;
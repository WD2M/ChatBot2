const { addKeyword } = require('@bot-whatsapp/bot');


const flowMetodosPago = addKeyword('2', { sensitive: true })
    .addAction(
        async (ctx, { gotoFlow, flowDynamic, fallBack, endFlow }) => {
            if (ctx.body == '2') {
                await flowDynamic('*MEDIO DE PAGO*💳 💲\n\n*NEQUI*\n#3224725611\n\n*DAVIPLATA*\n#3224725611\n\n🛑 No Olvides Enviar  Comprobante De Pago\n\n🛑 Indicar  que  Plataformas Deseas\n\nGracias por confiar en Nosotros!😁')
                await flowDynamic('para regresar al menu principal escribe *6*')
            }
            else {
                //return endFlow()
            }
        },
    )
exports.flowMetodosPago = flowMetodosPago;
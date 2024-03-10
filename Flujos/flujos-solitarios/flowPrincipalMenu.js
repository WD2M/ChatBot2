const { addKeyword } = require('@bot-whatsapp/bot');

const flowPrincipalMenu = addKeyword('6', { sensitive: true })
.addAction(
    async (ctx, { gotoFlow, flowDynamic, fallBack, endFlow }) => {
        if (ctx.body == '6') {
            await flowDynamic('*Envia un mensaje con la opcion que deseas*. (Ejemplo=1).\n\n*1*   Planes y Combos\n*2*  *comprar* y Metodos de Pago.\n*3*  Promoción del Día.\n*4*  Descuentos Cine Colombia\n*5*  soporte')
        }
        else {
            //return endFlow()
        }
    },
)

exports.flowPrincipalMenu = flowPrincipalMenu
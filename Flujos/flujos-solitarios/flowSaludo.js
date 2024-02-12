const { addKeyword } = require('@bot-whatsapp/bot');
const { EVENTS } = require('@bot-whatsapp/bot');
const { flowPrincipalMenu } = require('./flowPrincipalMenu');
const { flowSoporte } = require('./flowSoporte');
const { flowProductos } = require('./flowProductos');
const { flowMetodosPago } = require('./flowMetodosPago');
const { flowOferta } = require('./flowOferta');
const { flowEntregaCuentas } = require('./flowEntregaCuentas');

const flowSaludo = addKeyword(EVENTS.WELCOME)
    .addAction(
        async (ctx, { flowDynamic, state }) => {
            
            const actual = JSON.stringify(state.getMyState()) + "sin invocar"
            if(!actual.includes("estado")){
                await flowDynamic('🙌 *Hola bienvenido* 🙌\n\n*Envia un mensaje con la opcion que deseas*. (Ejemplo=1).\n\n*1*   Planes y Combos\n*2*  *comprar* y Metodos de Pago.\n*3*  Promoción del Día.\n*4*  soporte')
                await state.update({ estado: "true" })
            }
        },
    )
exports.flowSaludo = flowSaludo
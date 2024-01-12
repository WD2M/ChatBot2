const { addKeyword } = require('@bot-whatsapp/bot');
const { EVENTS } = require('@bot-whatsapp/bot');
const { flowPrincipalMenu } = require('./flowPrincipalMenu');
const { flowSoporte } = require('./flowSoporte');
const { flowProductos } = require('./flowProductos');
const { flowMetodosPago } = require('./flowMetodosPago');
const { flowOferta } = require('./flowOferta');
const { flowEntregaCuentas} = require('./flowEntregaCuentas');

const flowSaludo = addKeyword(EVENTS.WELCOME)
    .addAnswer('🙌 *Hola bienvenido* 🙌\n\n*Envia un mensaje con la opcion que deseas*. (Ejemplo=1).\n\n*1*   Planes y Combos\n*2*  Metodos de Pago.\n*3*  Promoción del Día.\n*4*  soporte',
    null,
    async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
        console.log(ctx)
        if (ctx.body.includes('event_media')) {
            return await gotoFlow(flowEntregaCuentas)
        }
    })
    .addAction(
        {
            capture: true,
        },
        async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
            if (ctx.body.includes('event_media')) {
                await flowDynamic('Por el momento no puedo ver imagenes')
                await gotoFlow(flowPrincipalMenu)
            }
            else if (ctx.body.includes('event_voice_note')) {
                await flowDynamic('Por el momento no puedo escuchar audios')
                await gotoFlow(flowPrincipalMenu)
            }
            else if(ctx.body.includes('1')){
                await gotoFlow(flowProductos)
            }
            else if(ctx.body.includes('2')){
                await gotoFlow(flowMetodosPago)
            }
            else if(ctx.body.includes('3')){
                await gotoFlow(flowOferta)
            }
            else if(ctx.body.includes('4')){
                await gotoFlow(flowSoporte)
            }
            else{
                return fallBack()
            }
        },
    )

exports.flowSaludo = flowSaludo
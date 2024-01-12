const { addKeyword } = require('@bot-whatsapp/bot');
const { flowOferta } = require('./flowOferta');
const { flowSoporte } = require('./flowSoporte');
const { flowProductos } = require('./flowProductos');
const { flowMetodosPago } = require('./flowMetodosPago');
const { EVENTS } = require('@bot-whatsapp/bot')

const flowPrincipalMenu = addKeyword('5')
    .addAnswer('*Envia un mensaje con la opcion que deseas*. (Ejemplo=1).\n\n*1*   Planes y Combos\n*2*  *comprar* y Metodos de Pago.\n*3*  Promoción del Día.\n*4*  soporte',
    null,
    async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
        console.log(ctx)
    }
    )
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

exports.flowPrincipalMenu = flowPrincipalMenu
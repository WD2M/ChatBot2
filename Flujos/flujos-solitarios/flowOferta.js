const { addKeyword } = require('@bot-whatsapp/bot');

const { flowMetodosPago } = require('./flowMetodosPago');

const mensajeEntorno = process.env.Promocion ?? 'aca es una prueba'


const flowOferta = addKeyword('3') 
.addAnswer(`*Super Promo Del Día*🪄\n\n${mensajeEntorno}`)
.addAnswer('*1* *comprar* y medios de pago\n*5* volver al menú anterior')
.addAction(
    {
        capture: true,
    },
    async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
        if (ctx.body.includes('event_media')) {
            await flowDynamic('en un momento valido la informacion')
            return fallBack()
        }
        else if (ctx.body.includes('event_voice_note')) {
            await flowDynamic('Por el momento no puedo escuchar audios')
        }
        else if (ctx.body == '1') {
            await gotoFlow(flowMetodosPago)
        }
        else if(ctx.body == '5'){
        }
        else{
            return fallBack()
        }
    },

)

exports.flowOferta = flowOferta
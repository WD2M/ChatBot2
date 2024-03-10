const { addKeyword } = require('@bot-whatsapp/bot');

const { flowMetodosPago } = require('./flowMetodosPago');

const mensajeEntorno = process.env.Promocion ?? 'aca es una prueba'


const flowOferta = addKeyword('3', { sensitive: true })
    .addAction(
        async (ctx, { gotoFlow, flowDynamic, fallBack, endFlow }) => {
            if (ctx.body == '3') {
                await flowDynamic(`*Super Promo Del Día*🪄\n\n${mensajeEntorno}`)
                await flowDynamic('*1* *comprar* y medios de pago\n*6* volver al menú anterior')
            }
            else {
                //return endFlow()
            }
        },
    )

exports.flowOferta = flowOferta
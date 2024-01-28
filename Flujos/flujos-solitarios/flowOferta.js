const { addKeyword } = require('@bot-whatsapp/bot');

const { flowMetodosPago } = require('./flowMetodosPago');

const mensajeEntorno = process.env.Promocion ?? 'aca es una prueba'


const flowOferta = addKeyword('3', { sensitive: true })
    .addAction(
        async (ctx, { gotoFlow, flowDynamic, fallBack, endFlow }) => {
            console.log('oferta ' + ctx.body)
            if (ctx.body == '3') {
                await flowDynamic(`*Super Promo Del Día*🪄\n\n${mensajeEntorno}`)
                await flowDynamic('*1* *comprar* y medios de pago\n*5* volver al menú anterior')
            }
            else {
                console.log('no es 3')
                return endFlow()
            }
        },
    )

exports.flowOferta = flowOferta
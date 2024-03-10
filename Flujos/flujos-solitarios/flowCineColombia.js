const { addKeyword } = require('@bot-whatsapp/bot');

const flowCineColombia = addKeyword('4', { sensitive: true })
    .addAction(
        async (ctx, { flowDynamic, endFlow }) => {
            if (ctx.body == '4') {
                await flowDynamic('*Para las entradas de cine*\nEnvia los siguientes datos:\n\n• Ciudad :\n• Donde queda el Cine :\n• Pelicula :\n• Horario y fecha :\n• Sillas generales o Preferenciales no (ocasional)  generales :\n• Número de entradas :\n• Combos :\n\nHola porfavor envíame estos datos para darte una cotización! Recuerda que nosotros te damos alrededor de un 30 o 40% de *DESCUENTO!*🥳')
                await flowDynamic('*6* volver al menú anterior')
            }
            else {
                return endFlow()
            }
        },
    )

exports.flowCineColombia = flowCineColombia
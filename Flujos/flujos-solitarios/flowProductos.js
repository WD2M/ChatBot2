const { addKeyword } = require('@bot-whatsapp/bot');
const { flowFormula } = require('./flowFormula');
const { flowMetodosPago } = require('./flowMetodosPago');

const mensaje = "*Netflix🍿*\n1 Pantalla *10.000*\n5 pantallas *38.000*\n\n\n\n*Escoje 1  PANTALLA De Estas Plataformas Por Tan Solo*\n💲 *4.000* 👇👇👇\n🟠Star\n🟣HBO max\n🔵prime video\n🟢 Disney plus\n🟡plex\n🔵Paramount\n🔴vix\n\n\n*COMBOS*🔽\n✅Hbomax + Amazon = *7000*\n✅Disney+ Hbo max = *7000*\n✅Amazon+Disney= *7000*\n✅Netflix+Hbo max= *13000*\n✅Netflix+ Paramount = /13.000*\n✅Netflix+ Amazon= *13.000*\n✅Netflix+ Hbo+Disney= *$16.000*\n✅Netflix+ Disney+ Star= *$16.000*\n\n\n*MEGA COMBOS*🔰\n🔰Netflix+Disney+Star+Hbo+Amazon= *$22.000*\n🔰Netflix+Disney+Star+Hbo+Amazon+paramount = *$25.000*\n\n\n\n*Otras plataformas Individuales!*👇\n⚽ *IPTV (WIN SPORTS)*+300 canales\n*8000*\n\n🎨🖌️✒️ *Canva pro* 🖌️✒️🎨\n*10.000*"


const flowProductos = addKeyword('1', { sensitive: true })
    .addAnswer(mensaje)
    .addAnswer('*2*. *Comprar* y Médio de pago\n\n*4*. Plan Personalizado\n\n*5* Regresar al Menú Anterior')
    .addAction(
    {
        capture: true,
    },
    async (ctx, { gotoFlow, flowDynamic, fallBack }) => {
        console.log('productos ' + ctx.body)
        if (ctx.body.includes('event_media')) {
            await flowDynamic('en un momento valido la informacion')
            return fallBack()
        }
        else if (ctx.body.includes('event_voice_note')) {
            await flowDynamic('Por el momento no puedo escuchar audios')
        }
        else if (ctx.body == '2') {
            await gotoFlow(flowMetodosPago)
        }
        else if (ctx.body == '4') {
            await gotoFlow(flowFormula)
        }        
        else if(ctx.body == '5'){

        }
        else{
            return fallBack()
        }
    },
    )
    

exports.flowProductos = flowProductos;
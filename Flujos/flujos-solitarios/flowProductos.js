const { addKeyword } = require('@bot-whatsapp/bot');

const mensaje = `*Netflix🍿*\n1 Pantalla *${process.env.PrecioNetflix}*\n5 pantallas *${process.env.PrecioNetflix5}*\n\n\n\n*Escoje 1  PANTALLA De Estas Plataformas Por Tan Solo*\n💲 *${process.env.Plataformas}* 👇👇👇\n🟠Star\n🟣HBO max\n🔵prime video\n🟢 Disney plus\n🟡plex\n🔵Paramount\n🔴vix\n\n\n*COMBOS*🔽\n✅Hbomax + Amazon = *${process.env.PlataformasCombo}*\n✅Disney+ Hbo max = *${process.env.PlataformasCombo}*\n✅Amazon+Disney= *${process.env.PlataformasCombo}*\n✅Netflix+Hbo max= *${process.env.ComboNetflix}*\n✅Netflix+ Paramount = *${process.env.ComboNetflix}*\n✅Netflix+ Amazon= *${process.env.ComboNetflix}*\n✅Netflix+ Hbo+Disney= *${process.env.ComboNetflix3}*\n✅Netflix+ Disney+ Star= *${process.env.ComboNetflix3}*\n\n\n*MEGA COMBOS*🔰\n🔰Netflix+Disney+Star+Hbo+Amazon= *${process.env.Combo22}*\n🔰Netflix+Disney+Star+Hbo+Amazon+paramount = *${process.env.Combo25}*\n\n\n\n*Otras plataformas Individuales!*👇\n⚽ *IPTV (WIN SPORTS)*+300 canales\n*${process.env.Win}*\n\n🎨🖌️✒️ *Canva pro* 🖌️✒️🎨\n*${process.env.Canva}*`

const flowProductos = addKeyword('1', { sensitive: true })
    .addAction(
        async (ctx, {flowDynamic, endFlow }) => {
            if (ctx.body == '1') {
                await flowDynamic(mensaje)
                await flowDynamic('*2*. *Comprar* y Médio de pago\n\n*4*. Plan Personalizado\n\n*5* Regresar al Menú Anterior')
            }
            else {
                return endFlow()
            }
        },
    )
exports.flowProductos = flowProductos;
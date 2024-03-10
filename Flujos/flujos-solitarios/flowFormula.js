const mensaje = [
 /*0*/   `🍿NETFLIX🍿\n${process.env.PrecioNetflix} 28 dias\n`,
 /*1*/   `🍿AMAZON PRIME🍿\n${process.env.Plataformas}\n`,
 /*2*/   `🍿CRUNCHYROL🍿\n${process.env.Plataformas}\n`,
 /*3*/   `🍿DISNEY PLUS🍿\n${process.env.Plataformas}\n`,
 /*4*/   `🍿HBO MAX🍿\n${process.env.Plataformas}\n`,
 /*5*/   `🍿STAR +🍿\n${process.env.Plataformas}\n`,
 /*6*/   `🍿PLEX PREMIUN FULL CONTENIDO🍿\n${process.env.Plataformas}\n`,
 /*7*/   `⚽IPTV (WIN SPORTS)⚽\n${process.env.Win} `,
 /*8*/   `🍿PARAMOUNT🍿\n${process.env.Plataformas}\n`,
 /*9*/   `🎮🕹️*XBOX GAME PASS*🎮🕹️\n${process.env.Xbox} 1 mes\n`,
 /*10*/   `🎨🖌️✒️*CANVA PRO*🎨🖌️✒️\n${process.env.Canva}\n`,
 /*11*/   `🍿*VIX*🍿\n${process.env.Plataformas}`
]
const { addKeyword } = require('@bot-whatsapp/bot');

let paquete = [
    /*0*/    process.env.PrecioNetflix,
    /*1*/    process.env.Plataformas,
    /*2*/    process.env.Plataformas,
    /*3*/    process.env.Plataformas,
    /*4*/    process.env.Plataformas,
    /*5*/    process.env.Plataformas,
    /*6*/    process.env.Plataformas,
    /*7*/    process.env.Win,
    /*8*/    process.env.Plataformas,
    /*9*/    process.env.Xbox,
    /*10*/   process.env.Canva,
    /*11*/   process.env.Plataformas
]
let arraysCombos = [
    /*0*/    'Netflix',
    /*1*/    'Amazon',
    /*2*/    'Crunc',
    /*3*/    'Disney',
    /*4*/    'Hbo',
    /*5*/    'Star',
    /*6*/    'Plex',
    /*7*/    'Win',
    /*8*/   'Param',
    /*9*/   'Game',
    /*10*/   'Canva',
    /*11*/   'vix'
];

const flowFormula = addKeyword('7', { sensitive: true })
    .addAction(
        async (ctx, { flowDynamic, endFlow }) => {
            if (ctx.body == '7') {
                await flowDynamic('🖊️Solo *Escribe* el nombre de las *plataformas* que deseas y te brindare el precio. *Ejemplo*\n (*HBO*,*Amazon*,*Netflix*, *Star*)')
                await flowDynamic('*8* *comprar* y medios de pago\n*6* volver al menú anterior')
            }
            else {
                //return endFlow()
            }
        },
    )
    .addAction(
        {
            capture: true,
        },
        async (ctx, { flowDynamic, fallBack, gotoFlow }) => {
            if (ctx.body.includes('event_media')) {
                await flowDynamic('en un momento valido la informacion')
                fallBack()
            }
            else if (ctx.body.includes('event_voice_note')) {
                await flowDynamic('Por el momento no puedo escuchar audios')
            }

            let precio = 0
            let cantidadCombo = 0
            let mensaje1 = ''
            let descuento = 0
            let mensajeArray = []
            mensajeArray = ctx.body.split(' ')
            let unico
            for (let i = 0; i < mensajeArray.length; i++) {
                for (let j = 0; j < arraysCombos.length; j++) {
                    if (mensajeArray[i].toLowerCase().includes(arraysCombos[j].toLowerCase())) {
                        unico = j
                        precio = parseInt(paquete[j]) + parseInt(precio)
                        cantidadCombo++
                        if (cantidadCombo == 1) {
                            mensaje1 = arraysCombos[j]
                        } else {
                            mensaje1 = mensaje1 + ' + ' + arraysCombos[j]
                        }

                        if (j == 4) {
                            mensaje1 = mensaje1 + ' Max'
                        }
                        if (j == 9) {
                            mensaje1 = mensaje1 + ' Sport'
                        }
                        if (j == 11) {
                            mensaje1 = mensaje1 + ' Pass'
                        }
                    }
                    if (j == 1) {
                        if (mensajeArray[i].toLowerCase().includes('prime')) {
                            if (!mensaje1.toLowerCase().includes('amazon')) {
                                precio = parseInt(paquete[j]) + parseInt(precio)
                                cantidadCombo++
                                unico = j
                                if (cantidadCombo == 1) {
                                    mensaje1 = 'Amazon prime'
                                } else {
                                    mensaje1 = mensaje1 + ' + Amazon prime'
                                }

                            }
                        }
                    }
                }
            }
            if (cantidadCombo > 1) {

                cantidadCombo = cantidadCombo - 1
                descuento = 1000 * cantidadCombo
                precio = parseInt(precio) - parseInt(descuento)
                await flowDynamic(`Este combo de *${mensaje1}* tiene un precio de *${precio}* en total`)
                await flowDynamic('*6* *comprar* y medios de pago\n*5* volver al menú anterior')
                return fallBack()
            }
            else if (cantidadCombo == 1) {
                await flowDynamic(`${mensaje[unico]}`)
                await flowDynamic('*6* *comprar* y medios de pago\n*5* volver al menú anterior')
                return fallBack()
            }
            else {
                return fallBack()
            }
        }
    )

exports.flowFormula = flowFormula
const mensaje = [
    '🍿NETFLIX🍿\n10.000 28 dias\n',
    '🍿AMAZON PRIME🍿\n4.000\n',
    '🍿CRUNCHYROL🍿\n4.000\n',
    '🍿DISNEY PLUS🍿\n4.000\n',
    '🍿HBO MAX🍿\n4.000\n',
    '🍿STAR +🍿\n4.000\n',
    '🍿PLEX PREMIUN FULL CONTENIDO🍿\n4.000\n',
    '⚽IPTV (WIN SPORTS)⚽\n8.000 ', 
    '🍿PARAMOUNT🍿\n4.000\n',
    '🎮🕹️*XBOX GAME PASS*🎮🕹️\n15.000 1 mes\n',
    '🎨🖌️✒️*CANVA PRO*🎨🖌️✒️\n15.000\n',
    '🍿*VIX*🍿\n4.000']
const { addKeyword } = require('@bot-whatsapp/bot');

let paquete = [
    /*0*/    10000,
    /*1*/    4000,
    /*2*/    4000,
    /*3*/    4000,
    /*4*/    4000,
    /*7*/    4000,
    /*8*/    4000,
    /*9*/    8000,
    /*10*/   4000,
    /*11*/   15000,
    /*12*/   15000,
    /*13*/   4000
]
let arraysCombos = [
    /*0*/    'Netflix',
    /*1*/    'Amazon',
    /*2*/    'Crunc',
    /*3*/    'Disney',
    /*4*/    'Hbo',
    /*7*/    'Star',
    /*8*/    'Plex',
    /*9*/    'Win',
    /*10*/   'Param',
    /*11*/   'Game',
    /*12*/   'Canva',
    /*13*/   'vix'
];

const { flowMetodosDePago } = require('./flowMetodosDePago');

const flowFormula = addKeyword('4', { sensitive: true })
    .addAnswer('🖊️Solo *Escribe* el nombre de las *plataformas* que deseas y te brindare el precio. *Ejemplo*\n (*HBO*,*Amazon*,*Netflix*, *Star*)')
    .addAnswer('*6* *comprar* y medios de pago\n*5* volver al menú anterior')
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
            else if (ctx.body == '6') {
                return await gotoFlow(flowMetodosDePago)
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
                        precio = paquete[j] + precio
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
                                precio = paquete[j] + precio
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
                precio = precio - descuento
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
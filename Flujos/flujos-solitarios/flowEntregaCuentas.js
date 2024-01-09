const { addKeyword } = require('@bot-whatsapp/bot');
const { EVENTS } = require('@bot-whatsapp/bot');


const flowEntregaCuentas = addKeyword(EVENTS.MEDIA)
    .addAnswer('en un momento valido la informacion')

exports.flowEntregaCuentas = flowEntregaCuentas;
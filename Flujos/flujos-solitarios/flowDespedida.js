const { addKeyword } = require('@bot-whatsapp/bot');


const flowDespedida = addKeyword(['gracias', 'adios'])
    .addAnswer('Hasta luego gracias por contactarnos'
    )
    exports.flowDespedida = flowDespedida;
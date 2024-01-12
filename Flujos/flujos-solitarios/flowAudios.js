//const { EVENTS } = require('@bot-whatsapp/bot');
const { addKeyword } = require('@bot-whatsapp/bot');


const flowAudios = addKeyword('.')
    .addAnswer('lo siento no puedo escuchar audios ahora',null,
     async (ctx) => {
        console.log(ctx)
     })
    exports.flowAudios = flowAudios;
const { addKeyword } = require('@bot-whatsapp/bot');

const SearchContactChatWood = require('../../servicios/SearchContacs');

const flowSoporte = addKeyword('4')
    .addAnswer('Describe el problema y en un momento me comunico contigo para darte una solucion ⚙️🧰')
    .addAnswer('https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D158022220142425&tbnid=8guoi_3WJMWCkM&vet=12ahUKEwi5ktGjiM-DAxUaEmIAHSUVClkQMygBegQIARBC..i&imgrefurl=https%3A%2F%2Fm.facebook.com%2FCreador.By.N3RY2%2F%3Flocale2%3Des_LA&docid=2AQN3oLOVCYCMM&w=854&h=369&q=chupelo&ved=2ahUKEwi5ktGjiM-DAxUaEmIAHSUVClkQMygBegQIARBC')
    .addAction({ capture: true, idle: 600000 }, async (ctx, { fallBack }) => {

        if (ctx?.idleFallBack) {
            return
        }
        /*console.log(ctx)
        if (ctx.body.includes('event_media')) {
            console.log('pero' + ctx.message.url)
            const imagenFile = document.getElementById('fileInput').files[0];
        }
        await SearchContactChatWood.searchContactByName(ctx.from, ctx.body)*/

        return fallBack()
    })

exports.flowSoporte = flowSoporte;



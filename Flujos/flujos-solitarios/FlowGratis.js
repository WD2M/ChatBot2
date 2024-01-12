const { addKeyword } = require('@bot-whatsapp/bot');

let correos = ['correo1', 'correo2', 'correo3','correo4', 'correo5', 'correo6']
let correo = 0
let limite = 3
let contraseña = 'contraseña'
let paquete = ''
function entregarCuentas(){
    paquete = correos[correo] + ' '+ contraseña
    return paquete
}

const flowGratis = addKeyword(['quiero hbo gratis'])
    .addAnswer('Con este correo y contraseña podras iniciar seción',null, async (ctx, {flowDynamic, state}) => {
        //if(state.get('fecha') == null){
            let inicio = new Date();
            await state.update({ fecha: inicio })
            console.log('se actualizo')
        //}
        if(correo < limite){
            flowDynamic(entregarCuentas())
            correo ++
            console.log(correo)
            console.log(state.get('fecha'))
            flowDynamic('')
        }
        
     })
    exports.flowGratis = flowGratis;
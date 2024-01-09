const { createBot, createProvider, createFlow, } = require('@bot-whatsapp/bot')

const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/json')
const QRPortalWeb = require('@bot-whatsapp/portal')

const { flowSaludo } = require('./Flujos/flujos-solitarios/flowSaludo');
const { flowPrincipalMenu } = require('./Flujos/flujos-solitarios/flowPrincipalMenu');
const { flowFormula } = require('./Flujos/flujos-solitarios/flowFormula');
const { flowMetodosPago } = require('./Flujos/flujos-solitarios/flowMetodosPago');
const { flowMetodosDePago } = require('./Flujos/flujos-solitarios/flowMetodosDePago');
const { flowOferta } = require('./Flujos/flujos-solitarios/flowOferta');
const { flowSoporte } = require('./Flujos/flujos-solitarios/flowSoporte');
const ServerHttp = require('./Http');

const adapterProvider = createProvider(BaileysProvider)

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowSaludo, flowPrincipalMenu, flowMetodosPago,flowFormula,flowOferta,flowMetodosDePago,flowSoporte])

    await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    const server = new ServerHttp(adapterProvider);
    server.start()
}


const main1 = async () => {
    const adapterProvider1 = createProvider(BaileysProvider,{name: 'empresa2'})
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowSaludo, flowPrincipalMenu, flowMetodosPago,flowFormula,flowOferta,flowMetodosDePago,flowSoporte])

    await createBot({
        flow: adapterFlow,
        provider: adapterProvider1,
        database: adapterDB,
    })
    QRPortalWeb({name: 'empresa2', port: 4001})
}
const main2 = async () => {
    const adapterProvider1 = createProvider(BaileysProvider,{name: 'empresa3'})
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowSaludo, flowPrincipalMenu, flowMetodosPago,flowFormula,flowOferta,flowMetodosDePago,flowSoporte])

    await createBot({
        flow: adapterFlow,
        provider: adapterProvider1,
        database: adapterDB,
    })
    QRPortalWeb({name: 'empresa3', port: 4002})
}
const main3 = async () => {
    const adapterProvider1 = createProvider(BaileysProvider,{name: 'empresa4'})
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowSaludo, flowPrincipalMenu, flowMetodosPago,flowFormula,flowOferta,flowMetodosDePago,flowSoporte])

    await createBot({
        flow: adapterFlow,
        provider: adapterProvider1,
        database: adapterDB,
    })
    QRPortalWeb({name: 'empresa4', port: 4003})
}

exports.adapterProvider = adapterProvider;
main()
main1()
main2()
main3()
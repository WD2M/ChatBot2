const { createBot, createProvider, createFlow, } = require('@bot-whatsapp/bot')

const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/json')
const MockAdapter1 = require('@bot-whatsapp/database/json')
const QRPortalWeb = require('@bot-whatsapp/portal')

const { flowSaludo } = require('./Flujos/flujos-solitarios/flowSaludo');
const { flowPrincipalMenu } = require('./Flujos/flujos-solitarios/flowPrincipalMenu');
const { flowFormula } = require('./Flujos/flujos-solitarios/flowFormula');
const { flowMetodosPago } = require('./Flujos/flujos-solitarios/flowMetodosPago');
const { flowMetodosDePago } = require('./Flujos/flujos-solitarios/flowMetodosDePago');
const { flowOferta } = require('./Flujos/flujos-solitarios/flowOferta');
const { flowSoporte } = require('./Flujos/flujos-solitarios/flowSoporte');
const { flowEntregaCuentas } = require('./Flujos/flujos-solitarios/flowEntregaCuentas');
const ServerHttp = require('./Http');

const adapterProvider = createProvider(BaileysProvider)

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowSaludo, flowPrincipalMenu, flowMetodosPago,flowFormula,flowOferta,flowMetodosDePago,flowSoporte,flowEntregaCuentas])

    await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    QRPortalWeb()
}

exports.adapterProvider = adapterProvider;
main()
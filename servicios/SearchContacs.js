const Api_Chatwood = 'https://chatwoot-production-3907.up.railway.app/';
const conversationContactChatWood = require('./ConversationContact');
const newContactChatWood = require('./NewContact');
const conversationOpenChatWood = require('./conversationOpen');
const SendChatWood = require('./chatwood');

const searchContactByName = async (contactName = "", mensaje = "") => {
    var myHeaders = new Headers();
    myHeaders.append("api_access_token", "sfCFNzeTH8fzK8VxqAL9CCqn");
    myHeaders.append("Content-Type", "application/json");

    var q = JSON.stringify({
        name: contactName,
    });
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
    };

    try {
        const dataRaw = await fetch(
            `${Api_Chatwood}/api/v1/accounts/1/contacts`,
            requestOptions
        );

        const data = await dataRaw.json();

        if (data.length === 0) {
            console.log('No se encontraron contactos con el nombre proporcionado.');
        } 
        else {
            const index = data.payload.findIndex(item => item.name === contactName);

            if (index !== -1) {
                console.log('id enviado ' + data.payload[index].id);
                const r = await conversationOpenChatWood.conversationOpen(data.payload[index].id)
                if(r.payload[0].status != 'open'){
                    await conversationContactChatWood.createConversation(data.payload[index].id, mensaje);
                }
                else{
                    await SendChatWood.sendMessageChatWood(mensaje, 'incoming', r.payload[0].id)
                }
            }
            else{
                console.log('id enviado no encontrado');
                newContactChatWood.newContactChatWood(contactName, '+'+contactName, mensaje)
            }
        }

        return data;
    } catch (error) {
        console.error('Error al buscar el contacto:', error.message);
    }
};



module.exports = { searchContactByName };
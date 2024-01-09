const Api_Chatwood = 'https://chatwoot-production-3907.up.railway.app/'
const conversationContactChatWood = require('./ConversationContact');
const newContactChatWood = async (nombre = "", numero = "", mensaje = "") => {
    var myHeaders = new Headers();
    myHeaders.append("api_access_token", "sfCFNzeTH8fzK8VxqAL9CCqn");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        name: nombre,
        phone_number: numero,
    });
    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };
    const dataRaw = await fetch(
        `${Api_Chatwood}/api/v1/accounts/1/contacts`,
        requestOptions
    );
    const data = await dataRaw.json();
    console.log('contacto creado '+ data.payload.contact.id)
    conversationContactChatWood.createConversation(data.payload.contact.id, mensaje)
    return data;
};
module.exports = { newContactChatWood };
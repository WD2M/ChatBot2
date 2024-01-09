const Api_Chatwood = 'https://chatwoot-production-3907.up.railway.app/';
const conversationContactChatWood = require('./ConversationContact');
const newContactChatWood = require('./NewContact');

const conversationOpen = async (contactName = "", mensaje = "") => {
    var myHeaders = new Headers();
    myHeaders.append("api_access_token", "sfCFNzeTH8fzK8VxqAL9CCqn");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
    };

    try {
        const dataRaw = await fetch(
            `${Api_Chatwood}/api/v1/accounts/1/contacts/${contactName}/conversations`,
            requestOptions
        );

        const data = await dataRaw.json();
        return data;
    } catch (error) {
        console.error('Error al buscar el contacto:', error.message);
    }
};



module.exports = { conversationOpen };
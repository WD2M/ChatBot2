const Api_Chatwood = 'https://chatwoot-production-3907.up.railway.app/'
const SendChatWood = require('./chatwood');

const createConversation= async (contactId = "", mensaje = "") => {
    var myHeaders = new Headers();
    myHeaders.append("api_access_token", "sfCFNzeTH8fzK8VxqAL9CCqn");
    myHeaders.append("Content-Type", "application/json; charset=utf-8");

    var raw = JSON.stringify({
        inbox_id: "1",
        contact_id:contactId
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
    };

    const dataRaw = await fetch(
        `${Api_Chatwood}/api/v1/accounts/1/conversations`,
        requestOptions
    );
    const data = await dataRaw.json();
    console.log(data.id)
    SendChatWood.sendMessageChatWood(mensaje, 'incoming', data.id)
    return data;
};
module.exports = { createConversation };
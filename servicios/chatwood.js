const Api_Chatwood = 'https://chatwoot-production-3907.up.railway.app/'
const sendMessageChatWood = async (msg = "", message_type = "", numberConversation = "") => {
    var myHeaders = new Headers();
    myHeaders.append("api_access_token", "sfCFNzeTH8fzK8VxqAL9CCqn");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        content: msg, 
        message_type: message_type,
        private: true,
        content_type: "input_email",
        content_attributes: {},
    });
        var requestOptions = { 
            method: "POST",
            headers: myHeaders,
            body: raw,
        };
        const dataRaw = await fetch(
            `${Api_Chatwood}/api/v1/accounts/1/conversations/${numberConversation}/messages`,
            requestOptions
        );
        const data = await dataRaw.json();
        return data;
    };

    module.exports = { sendMessageChatWood };
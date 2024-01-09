const Api_Chatwood = 'https://chatwoot-production-3907.up.railway.app/'
const SendImageChatWood = async (msg = "", message_type = "", numberConversation = "", imageFile) => {
    const myHeaders = new Headers();
    myHeaders.append("api_access_token", "sfCFNzeTH8fzK8VxqAL9CCqn");

    const formData = new FormData();
    formData.append("content", msg);
    formData.append("message_type", message_type);
    formData.append("private", true);
    formData.append("content_type", "input_email");
    formData.append("content_attributes", JSON.stringify({}));

    // Agrega la imagen al formulario si está presente
    if (imageFile) {
        formData.append("attachments[]", imageFile, imageFile.name);
    }
    const requestOptions = { 
            method: "POST",
            headers: myHeaders,
            body: formData,
        };
        const dataRaw = await fetch(
            `${Api_Chatwood}/api/v1/accounts/1/conversations/${numberConversation}/messages`,
            requestOptions
        );
        const data = await dataRaw.json();
        return data;
    };

module.exports = { SendImageChatWood };
export default function methodsList() {
    return [
        {
            name: 'getContacts', sampleRequest: JSON.stringify(
                {count: 50, offset: 0, username: null, cellphoneNumber: null, query: null}
            )
        },
        {
            name: 'addContact', sampleRequest: JSON.stringify(
                {firstName: '', lastName: '', username: null}
            )
        },
        {
            name: 'removeContact', sampleRequest: JSON.stringify(
                {  id: 0}
            )
        },
        {
            name: 'createThread', sampleRequest: JSON.stringify({
                "title": "gggggg",
                "type": 1,
                "invitees": [
                    {
                        "id": 379826026,
                        "idType": 'TO_BE_USER_CONTACT_ID'
                    },
                    {
                        "id": 379825694,
                        "idType": 'TO_BE_USER_CONTACT_ID'
                    }
                ]
            })
        },
        {
            name: 'sendTextMessage', sampleRequest: JSON.stringify({
                type: 2,
                typeCode: 'default',
                messageType: 'TEXT',
                threadId: 21596221,
                textMessage: 'message test',
                metadata: {},
            })
        },
        {
            name: 'getThreads', sampleRequest: JSON.stringify({count: 25, offset: 0, threadIds: [21190011]})
        },
        {
            name: 'getHistory', sampleRequest: JSON.stringify({count: 50, offset: 0, threadId: 1})
        }


    ]
}
      const  config = {
    env: 'sandbox',
    token: "b6f1f4251655434f99468ba119dcbb47.XzIwMjQy",
    version: '12.7.2-snapshot.1 - with bug fix',
    date: '1401.09.12',

    // CLIENT_ID: '88413l69cd4051a039cf115ee4e073',
    CLIENT_ID: '17402682e932b46ff94816b757ed6b42d',
    //REDIRECT_URL: 'https://188.75.65.103',//'https://localhost:8080'
    MAP_API_KEY: '8b77db18704aa646ee5aaea13e7370f4f88b9e8c',

    // Main Server
    main: {
        socketAddress: 'wss://msg.pod.ir/ws',
        ssoHost: 'https://accounts.pod.ir',
        platformHost: 'https://api.pod.ir/srv/core',
        fileServer: 'https://core.pod.ir',
        podSpaceFileServer: 'https://podspace.pod.ir',
        serverName: 'chat-server',

        redirectUrl: 'https://localhost:8080',
        // redirectUrl: 'https://188.75.65.103'
    },
    // SandBox Server
    sandbox: {
        socketAddress: "wss://chat-sandbox.pod.ir/ws",
        ssoHost: "http://sso-sandbox.pod.ir",
        platformHost: "https://sandbox.pod.ir:8043/srv/basic-platform",
        fileServer: 'https://core.pod.ir',
        podSpaceFileServer: 'http://sandbox.podspace.ir:8080',
        serverName: "chat-server",
        // redirectUrl: 'https://188.75.65.103'
        redirectUrl: 'https://localhost:8080',

    },
    local: {
        socketAddress: "wss://chat-sandbox.pod.ir/ws",//"wss://chat-sandbox.pod.ir/ws",
        ssoHost: "https://accounts.pod.ir",
        platformHost: "https://sandbox.pod.ir:8043/srv/basic-platform",
        fileServer: 'https://core.pod.ir',
        podSpaceFileServer: 'http://sandbox.podspace.ir:8080',
        serverName: "chat-server",


        // socketAddress: 'wss://msg.pod.ir/ws',
        // ssoHost: 'https://accounts.pod.ir',
        // platformHost: 'https://api.pod.ir/srv/core',
        // fileServer: 'https://core.pod.ir',
        // podSpaceFileServer: 'https://podspace.podland.ir',
        // serverName: 'chat-server',

        redirectUrl: 'https://localhost:8080'
    },
    // Integration Server
    integration: {
        socketAddress: "ws://172.16.110.235:8003/ws",
        ssoHost: "http://172.16.110.76",
        platformHost: "http://172.16.110.235:8003/srv/bptest-core",
        fileServer: 'https://core.pod.ir',
        podSpaceFileServer: 'http://172.16.110.61:8780/podspace',
        serverName: "chatlocal"
    }
}

export  default  config
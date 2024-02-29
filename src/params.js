import config from "./config";

var env = 'main'; // main | sandbox | integration

const params = (token) => {
    return {
        appId: new Date().getTime(),

        /**
         * ActiveMQ Config
         */
        // protocol: "queue",
        // queueHost: CONFIG.queueHost,
        // queuePort: CONFIG.queuePort,
        // queueUsername: CONFIG.queueUsername,
        // queuePassword: CONFIG.queuePassword,
        // queueReceive: CONFIG.queueReceive,
        // queueSend: CONFIG.queueSend,
        // queueConnectionTimeout: 20000,
        // serverName: "chat-server",

        socketAddress: config[env].socketAddress,
        ssoHost: config[env].ssoHost,
        platformHost: config[env].platformHost,
        fileServer: config[env].fileServer,
        podSpaceFileServer: config[env].podSpaceFileServer,
        serverName: config[env].serverName,
        callServerName: config[env].callServerName,

        // protocol: "webrtc",


        token: token,
        grantDeviceIdFromSSO: false,
        enableCache: false,
        fullResponseObject: true,
        mapApiKey: config.mapApiKey,
        typeCode: "default",
        typeCodesList: [
            {
                typeCode: "default",
                ownerId: undefined
            },
        ],
        wsConnectionWaitTime: 500,
        connectionRetryInterval: 5000,
        connectionCheckTimeout: 10000,
        messageTtl: 24 * 60 * 60,
        reconnectOnClose: true,
        httpRequestTimeout: 30000,
        httpUploadRequestTimeout: 0,
        forceWaitQueueInMemory: true,
        asyncRequestTimeout: 50000,
        callRequestTimeout: 5000,
        callOptions: {
            callNoAnswerTimeout: 20000,
            // callSocketAddress: "wss://online-stream.pod.ir/gsthandler",
            // callTurnIp: "188.75.65.144",
            callSocketAddress: "wss://46.32.6.187/gsthandler",
            callTurnIp: "46.32.6.188",
            callDivId: "call-div",
            callVideo: {
                minWidth: 320,
                minHeight: 180
            },
            callAudioTagClassName: "podcall-audio",
            callVideoTagClassName: "podcall-video"
        },
        asyncLogging: {
            onFunction: true,
            consoleLogging: true,
            onMessageReceive: false,
            onMessageSend: false,
            actualTiming: false
        },
        clientName: 'SDK Default example',
        // protocol: 'webrtc',
        protocolSwitching: {
            webrtc: 1,
            websocket: 2
        },
        webrtcConfig: {
            baseUrl: "async-webrtc.pod.ir", //  https://msgkhatam.pod.ir/webrtc/",// https://async-webrtc.pod.ir/webrtc/ //"https://172.16.110.26/webrtc/",//"http://localhost:3000/webrtc/",//"http://109.201.0.97/webrtc/",
            basePath: "/webrtc/",
            configuration: {
                bundlePolicy: "balanced",
                iceTransportPolicy: "relay",
                iceServers: [{
                    "urls": "turn:turn1-async.podstream.ir:3478", "username": "mkhorrami", "credential": "mkh_123456"
                }]
            }
        },
    }
};
export default params
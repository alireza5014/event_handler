import {useEffect, useState} from "react";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import JSONPretty from "react-json-pretty";

import {Button, Card, Col, Flex, Form, Row, Select, Typography} from "antd";
import PodChat from "podchat-browser";
import params from "../../params";
import serverEvents from "../../serverEvents";
import {auth} from "podauth/src/auth";
import config from "../../config";
import methodsList from "../../methodsList";
import MyEvent from "../../observers/MyEvent";
import PanelLayout from "../layout/panel/PanelLayout";

var JSONPrettyMon = require('react-json-pretty/dist/monikai');
var chatAgent
var myEvent = new MyEvent()

const {Text} = Typography;

export default function Index() {

    const [json, setJson] = useState({});
    const [selectedResponse, setSelectedResponse] = useState({})
    const [error, setError] = useState(null)
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    const [form] = Form.useForm();
    const onFinish = (values) => {
        setLoading(true)
        handleRequest(values.method)
        console.log(values);
    };
    console.log(json,"json")
    const handleRequest = (method) => {
        setError(null)
        setSelectedResponse({})
        switch (method) {
            case "getContacts":
                chatAgent.getContacts(json, function (res) {
                    setSelectedResponse(res)
                    setLoading(false)

                })

                break;
                case "addContact":
                chatAgent.addContacts(json, function (res) {
                    setSelectedResponse(res)
                    setLoading(false)

                })

                break;
                case "removeContact":
                chatAgent.removeContacts(json, function (res) {
                    setSelectedResponse(res)
                    setLoading(false)

                })

                break;

                case "createThread":
                chatAgent.createThread(json, function (res) {
                    setSelectedResponse(res)
                    setLoading(false)

                })

                break;
                case "sendTextMessage":
                chatAgent.sendTextMessage(json,  {
                    onSent(res){
                        console.log(res,"resresresres")
                        setSelectedResponse(res)
                        setLoading(false)
                    }


                })

                break;
            case "getThreads":
                console.log(json,"getThreads")
                chatAgent.getThreads(json, function (res) {
                    setSelectedResponse(res)
                    setLoading(false)

                })
                myEvent.on("12345", function (data) {
                    setSelectedResponse(data)
                })
                break;

            case "getHistory":
                myEvent.emitOnce("12345",{a:12344})
                chatAgent.getHistory(json, function (res) {
                    setSelectedResponse(res)
                    setLoading(false)

                })
                break;

            case "test":

                break;
        }

    }
    useEffect(() => {


        // myEvent.on("ali", function (data) {
        //     // alert(data)
        // })

        if (typeof chatAgent == 'undefined') {
            chatAgent = new PodChat(params());

            auth({
                clientId: config.CLIENT_ID,
                scope: "social:write",
                secure: window.location.href.indexOf('https') > -1,
                redirectUri: config[config.env].redirectUrl,//Config.REDIRECT_URL,//(process.env.NODE_ENV == 'production'? Config.REDIRECT_URL : Config.REDIRECT_URL_LOCAL) ,
                retryTimeout: 3000,
                onNewToken: token => {
                    chatAgent.setToken(token);
                }
            });

            chatAgent.on("chatReady", function () {
                console.log('chatReady')
                setUser(chatAgent?.getCurrentUser())
            });

            /**
             * Listen to Error Messages
             */
            chatAgent.on("error", function (error) {
                if (error.code === 21) {
                    // setShowLoginModal(true)
                }
                setError(error)
                setLoading(false)

                console.log("Error ", error);
            });

            /**
             * Listen to Chat State Changes
             */
            chatAgent.on("chatState", function (chatState) {
            });
            chatAgent.on("messageEvents", function (event) {
                event.event = 'messageEvents';
            });

            /**
             * Listen to Thread Events
             */
            chatAgent.on("threadEvents", function (event) {
            });


            /**
             * Listen to Message Events
             */
            chatAgent.on("messageEvents", function (event) {
                event.event = 'messageEvents';

                console.log(event, "eventevent")


            });


        }


    }, [])
    return (
        <PanelLayout user={user} >

         <div style={{width: '100vw'}}>

            <Row gutter={10}  >

                <Col md={{span: 10}} xs={{span: 24}}>

                    <Card bordered={false} style={{position:"sticky",top:'70px', overflow: 'scroll'}}>
                        <Form
                            form={form}
                            name="control-hooks"
                            onFinish={onFinish}
                            style={{
                                // maxWidth: 600,
                            }}
                        >
                            <Flex
                                style={{width: '100%'}}
                            >

                                <Form.Item
                                    style={{width: '100%'}}

                                    name="method"
                                    label="Method"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select onChange={(value, option) => {
                                        setJson(JSON.parse(option.key))
                                    }}>
                                        {methodsList().map((item, i) => (
                                            <Select.Option key={item.sampleRequest}
                                                           value={item.name}>{item.name}</Select.Option>
                                        ))}
                                    </Select>


                                </Form.Item>
                                <Button loading={loading} htmlType={'submit'} type={'primary'}>Send</Button>
                            </Flex>
                            <JSONInput
                                id="json-editor"
                                locale={locale}
                                placeholder={json}
                                width="100%"
                                height="100%"
                                onChange={(data) => setJson(data.jsObject)}
                            />

                        </Form>


                    </Card>
                </Col>
                <Col md={{span: 14}} xs={{span: 24}}>
                    <Card bordered={false} >
                        {error &&
                            <div> Error : <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={error}></JSONPretty>
                            </div>}
                        <div> Response : <JSONPretty id="json-pretty" theme={JSONPrettyMon}
                                                     data={selectedResponse}></JSONPretty></div>
                    </Card>
                </Col>
            </Row>
        </div>
        </PanelLayout>

    )
}
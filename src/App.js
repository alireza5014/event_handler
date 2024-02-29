import PodChat from "podchat-browser";
import 'react-json-pretty/themes/monikai.css';

import params from "./params";
import {useEffect, useState} from "react";
import JSONPretty from 'react-json-pretty';
import {Avatar, Button, Card, Col, Divider, notification, Form, Input, Modal, Row, Tabs, Typography} from "antd";
import EventsListComponent from "./components/EventsListComponent";
import serverEvents from "./serverEvents";

var JSONPrettyMon = require('react-json-pretty/dist/monikai');

var chatAgent
const {Text} = Typography

function App() {


    const [showLoginModal, setShowLoginModal] = useState(false)
    const [allResponse, setAllResponse] = useState([])
    const [selectedResponse, setSelectedResponse] = useState({})
    const [user, setUser] = useState({})

    const onSetToken = (data) => {
        localStorage.setItem("accessToken", data.token)
        window.location.reload()

    }
    const logout = () => {
        localStorage.removeItem("accessToken")
         window.location.reload()

    }
    const contOfEvents = (data) => {

        if (data === 'all') {
            return allResponse.length
        }
        return allResponse.filter(item => item.event === data).length;
    }
    const onClick = (data) => {
        setSelectedResponse(data)
    }
    const addData = (event) => {

        console.log(allResponse, "temp")
        setAllResponse(current => [...current, event]);


    }
    const MyTabItems = ['serverChatEvents', 'all', 'threadEvents', 'messageEvents', 'contactEvents', 'callEvents', 'userEventss', 'fileUploadEvents', 'fileDownloadEvents', 'systemEvents',];

    let TabItems = []


    MyTabItems.map((data, index) => {
        TabItems.push({
            label: data.replace("Events", "") + " [" + contOfEvents(data) + "]",
            key: data,
            children: <EventsListComponent event={data} data={allResponse} onClick={onClick}/>,
        })
    })

    /*
     * Main Chat Ready Listener
     */
    useEffect(() => {
        if (typeof chatAgent == 'undefined') {
            chatAgent = new PodChat(params(localStorage.getItem("accessToken")));
            chatAgent.on("chatReady", function () {
                console.log('chatReady')
            });

            /**
             * Listen to Error Messages
             */
            chatAgent.on("error", function (error) {
                if (error.code === 21) {
                    setShowLoginModal(true)
                }
                console.log("Error ", error);
            });

            /**
             * Listen to Chat State Changes
             */
            chatAgent.on("chatState", function (chatState) {
                // console.log(chatState);


            });

            /**
             * Listen to File Upload Events
             */
            chatAgent.on("fileUploadEvents", function (event) {
                addData(event)

            });
            /**
             * Listen to File Download Events
             */
            chatAgent.on("fileDownloadEvents", function (event) {
                addData(event)

            });


            /**
             * Listen to Contact Events
             */
            chatAgent.on("contactEvents", function (event) {
                addData(event)

            });

            /**
             * Listen to Thread Events
             */
            chatAgent.on("threadEvents", function (event) {

                console.log(event, "eventevent")
                if (typeof event.type === 'number') {
                    if (event.type === 23) {
                        setUser(event?.messageContent)
                    }
                    event.eventName = serverEvents(event.type);
                    event.event = 'serverChatEvents';
                } else {
                    event.event = 'threadEvents';

                }
                addData(event)


            });


            /**
             * Listen to Message Events
             */
            chatAgent.on("messageEvents", function (event) {
                event.event = 'messageEvents';

                addData(event)


            });

            /**
             * Listen to System Events
             */
            chatAgent.on("systemEvents", function (event) {

                addData(event)


            });

            /**
             * Listen to User Events
             */
            chatAgent.on('userEvents', function (event) {
                addData(event)

            });

            /**
             * Listen to Call Events
             */
            chatAgent.on('callEvents', function (event) {

                addData(event)

            });


        }


    }, [])


    return (<Row>
            <Modal footer={null} visible={showLoginModal}>
                <Form
                    layout="vertical"


                    onFinish={onSetToken}
                >
                    <Form.Item
                        label="توکن را وارد نمایید"

                        name="token"
                        rules={[{required: true, message: "Please input your Username!"}]}
                    >
                        <Input

                            placeholder="Token"
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button

                            type="primary"
                            htmlType="submit"

                            block
                        >
                            ورود
                        </Button>

                    </Form.Item>
                </Form>
            </Modal>
            <Col md={{span: 8}}>
                <Card style={{height: '100vh', overflow: 'scroll'}}>
                    {user?.id && <Card dir={'rtl'}>
                        <Row style={{alignItems: 'center', gap: 10}}>
                            <Avatar src={user?.image}/>
                            <p>{user?.firstName + " " + user?.lastName}</p>
                            <Button onClick={logout} style={{flexGrow: 1, textAlign: 'left', color: "red"}}
                                    type='link'>Logout</Button>
                        </Row>
                        <Text>{user?.chatProfileVO?.bio}</Text>

                    </Card>}
                    <Divider/>
                    <Tabs

                        defaultActiveKey="1"
                        size={'small'}
                        items={TabItems}
                    />
                </Card>

            </Col>
            <Col md={{span: 16}}>
                <Card style={{height: '100vh', overflow: 'scroll'}}>

                    <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={selectedResponse}></JSONPretty>
                </Card>

            </Col>
        </Row>
    );
}

export default App;

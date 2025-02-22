import React from 'react';
import {List, notification} from "antd";
import {Typography} from "antd";

function EventsListComponent({event, data, onClick}) {

    const openNotification = (message) => {


        notification.info({
            message: ``,
            description: message,
            placement: "topRight",

        });
    };

    const getTime = (time) => {
        const date = new Date(time);
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column-reverse',maxWidth:'1400px'}}>


            <List

                bordered
                dataSource={data.filter(item => item.event === event || event == 'all')}
                renderItem={(item, index) => (
                    <List.Item

                        actions={[<a onClick={() => {
                            navigator.clipboard.writeText(JSON.stringify(item));
                            openNotification("Copied")

                        }} key={index}>Copy</a>]}
                        onClick={() => {
                            onClick(item)
                        }} style={{cursor: 'pointer'}}>

                        <Typography.Text>
                            {event === 'serverChatEvents' ? item.eventName + " [" + item.type + "]" + " " + getTime(item.time) : item.type}
                        </Typography.Text>
                    </List.Item>
                )}
            />

        </div>
    );
}

export default EventsListComponent;
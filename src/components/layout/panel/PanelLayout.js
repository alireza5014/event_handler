import {Card, ConfigProvider, Flex, Layout} from "antd";
import Navbar from "../panel/Navbar";
import React, {useState} from "react";
import style from "./PanelLayout.module.scss";

export default function PanelLayout({user = {},  children = ''}) {
    const {Content} = Layout;
    const [collapsed, setCollapsed] = useState(null);


    return (
            <Layout style={{direction: 'ltr'}}>

                <Navbar user={user} c />

                <Layout style={{padding: '0', gap: 0}}>

                    <Flex vertical
                          className={collapsed ? style.PanelLayout__Content__Parent_Collapsed : style.PanelLayout__Content__Parent}>


                        <div style={{margin:'0 !important' ,padding:'0 !important'}} >
                            <Content className={style.PanelLayout__Content}>
                                {children}
                            </Content>

                        </div>
                    </Flex>


                </Layout>
            </Layout>
    );
}

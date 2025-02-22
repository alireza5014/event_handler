import React from "react";
import {Avatar, Card, Dropdown, Flex, Layout, Space, theme, Typography} from "antd";
import {DownOutlined, UserOutlined} from "@ant-design/icons";
import style from "./Navbar.module.scss"
import {signOut} from "podauth/src/auth";
import   Cookies from "js-cookie"
const {Text} = Typography;

const Navbar = ({collapsed, setCollapsed, user}) => {


    const profileItem = [


        {
            key: '4',
            danger: true,
            label: (<a onClick={() => {
                Cookies.remove('access')
                Cookies.remove('refreshToken')
                signOut()
            }}>خروج</a>),
        },
    ];

    const {Header} = Layout;

    const {
        token: {colorBgBase},
    } = theme.useToken();


    return (

        <Header style={{background: colorBgBase}} className={style.Navbar__Main}>

            <Flex gap={10}>
                <Card className={style.Navbar__Profile}>


                    <Dropdown
                        menu={{items: profileItem,}}
                        trigger={['click']}
                    >
                        <a
                            style={{margin: '0 8px'}}

                        >
                            <Space>
                                <Avatar src={user?.image} size="small" icon={<UserOutlined/>}/>
                                <Text className={style.Navbar__Profile__Fullname}>{user?.name}</Text>
                                <DownOutlined style={{display: 'flex', verticalAlign: 'baseline'}}/>
                            </Space>
                        </a>
                    </Dropdown>


                </Card>

            </Flex>


        </Header>

    )


}

export default Navbar;

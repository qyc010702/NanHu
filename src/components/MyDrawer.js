import React, { Component } from 'react';
import {Button, Card, Drawer, Flex, Progress, Space, Typography} from 'antd';

const { Text, Title } = Typography;
class MyDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    showDefaultDrawer = () => {
        this.setState({ size: 'default', open: true });
    };

    onClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { open, size } = this.state;

        return (
            <>
                <Space>
                    <Button type="primary" onClick={this.showDefaultDrawer}>
                        查看详情
                    </Button>
                </Space>
                <Drawer
                    title={'处理详情'}
                    placement="right"
                    size={size}
                    onClose={this.onClose}
                    open={open}
                    extra={
                        <Space>
                            <Button onClick={this.onClose}>Cancel</Button>
                            <Button type="primary" onClick={this.onClose}>
                                OK
                            </Button>
                        </Space>
                    }
                >
                    <Card
                        style={{
                            background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                        }}
                    >
                        <Flex
                            vertical
                            gap="small"
                            style={{
                                width: 180,
                            }}
                        >
                            <Text style={{fontSize:'20px'}}>正在处理</Text>
                            <Text>杭州XXX公司</Text>
                            <Progress percent={30} size="small" />
                            <Text>上海XXX公司</Text>
                            <Progress percent={50} size="small" status="active" />
                            <Text>苏州XXX公司</Text>
                            <Progress percent={70} size="small" status="exception" />
                            <Text>平湖XXX公司</Text>
                            <Progress percent={100} size="small" />
                        </Flex>
                    </Card>
                    <Card style={{
                        background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                        marginTop:'10px'
                    }}>
                        <Flex
                            vertical
                            gap="small"
                            style={{
                                width: 180,
                            }}
                        >
                            <Text style={{fontSize:'20px'}}>已完成</Text>
                            <Text>AAA公司</Text>
                        </Flex>
                    </Card>
                    <Card style={{
                        background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                        marginTop:'10px'
                    }}>
                        <Flex
                            vertical
                            gap="small"
                            style={{
                                width: 180,
                            }}
                        >
                            <Text style={{fontSize:'20px'}}>已打开</Text>
                            <Text>BBB公司</Text>
                        </Flex>
                    </Card>
                </Drawer>
            </>
        );
    }
}

export default MyDrawer;

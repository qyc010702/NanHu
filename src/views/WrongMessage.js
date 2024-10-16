import React, { Component } from 'react';
import {Table, Button, Space, Collapse, Card, Flex} from 'antd';
import { Typography } from 'antd';
import { Splitter } from "antd";
const { Title,Text } = Typography;

const { Panel } = Collapse;

const Desc = (props) => (
    <Flex
        justify="center"
        align="center"
        style={{
            height: '100%',
        }}
    >
        <Typography.Title
            type="secondary"
            level={5}
            style={{
                whiteSpace: 'nowrap',
            }}
        >
            {props.text}
        </Typography.Title>
    </Flex>
);

class WrongMessage extends Component {
    state = {
        devices:[],
        data:[],
    };





    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'id',
                key: 'id',
                sorter: true,
            },
            {
                title: '异常类型',
                dataIndex: 'time',
                key: 'time',
                sorter: true,
            },
            {
                title: '异常要素名',
                dataIndex: 'place',
                key: 'place',
                sorter: true,
            },
            {
                title: '异常要素文本',
                dataIndex: 'status',
                key: 'status',
                sorter: true,
            },
            {
                title: '异常所属文件',
                dataIndex: 'person',
                key: 'person',
                sorter: true,
            },
            {
                title: '异常页码',
                dataIndex: 'person',
                key: 'person',
                sorter: true,
            },
            {
                title: '基准要素名',
                dataIndex: 'person',
                key: 'person',
                sorter: true,
            },
            {
                title: '基准要素文本',
                dataIndex: 'person',
                key: 'person',
                sorter: true,
            },
            {
                title: '基准所属文件',
                dataIndex: 'person',
                key: 'person',
                sorter: true,
            },
            {
                title: '基准要素页码',
                dataIndex: 'person',
                key: 'person',
                sorter: true,
            },
        ];
        return (
            <div style={{ padding: 20 }}>

                <Card
                    style={{
                        background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                    }}
                >
                    <Flex
                        vertical
                        gap="small"
                    >
                        <Text style={{fontSize:'20px'}}>文件异常信息表</Text>
                        <Card
                            style={{
                                background: 'rgb(255, 255, 255)',  // 更深一点的灰色背景
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                            }}
                        >
                            <Table dataSource={this.state.data} columns={columns} bordered={true}/>;
                        </Card>
                    </Flex>
                </Card>
                <Card
                    style={{
                        background: 'rgb(220, 220, 220)',  // 更深一点的灰色背景
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                    }}
                >
                    <Flex
                        vertical
                        gap="small"
                    >
                        <Text style={{fontSize:'20px'}}>原文位置</Text>
                        <Card
                            style={{
                                background: 'rgb(255, 255, 255)',  // 更深一点的灰色背景
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                            }}
                        >
                            <Splitter
                                style={{
                                    height: 200,
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Splitter.Panel defaultSize="40%" min="20%" max="70%">
                                    <Text>基准信息</Text>
                                    <Desc text="XXXXXXXXXX" />
                                </Splitter.Panel>
                                <Splitter.Panel>
                                    <Text style={{marginLeft:'15px'}}>异常信息</Text>
                                    <Desc text="YYYYYYYYYYY" />
                                </Splitter.Panel>
                            </Splitter>
                        </Card>
                    </Flex>
                </Card>
            </div>
        );
    }
}

export default WrongMessage;

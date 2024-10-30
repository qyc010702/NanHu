import React, { Component } from 'react';
import {Table, Button, Space, Collapse, Card, Flex, Progress, List, Alert, Input} from 'antd';
import { Typography } from 'antd';

const { Title,Text } = Typography;

const { Panel } = Collapse;

class AISearch extends Component {
    state = {
        devices:[],
        data:[],
        inputValue: '',
        inputValueQuestion: ''
    };

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };

    handleQuestionInputChange = (event) => {
        this.setState({ inputValueQuestion: event.target.value });
    };

    handleButtonClick = () => {
        console.log('输入的值:', this.state.inputValue);
        // 这里可以添加更多逻辑，比如验证输入、发送请求等
    };

    handleQuestionButtonClick = () => {
        console.log('输入的值:', this.state.inputValueQuestion);
        // 这里可以添加更多逻辑，比如验证输入、发送请求等
    };

    render() {
        const columns = [
            {
                title: '检索关键词',
                dataIndex: 'id',
                key: 'id',
                sorter: true,
            },
            {
                title: '所属文件',
                dataIndex: 'time',
                key: 'time',
                sorter: true,
            },
            {
                title: '所在页码',
                dataIndex: 'place',
                key: 'place',
                sorter: true,
            },
            {
                title: '实际内容',
                dataIndex: 'status',
                key: 'status',
                sorter: true,
            },
            {
                title: '相关性置信度',
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
                        <Text style={{fontSize:'20px'}}>检索条目</Text>
                        <Card
                            style={{
                                background: 'rgb(255, 255, 255)',  // 更深一点的灰色背景
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                            }}
                        >
                            <Flex
                                vertical
                                gap="small"
                            >
                                <Space direction="horizontal">
                                    <span style={{ fontSize: '16px' }}>请输入元素名：</span>
                                    <Input
                                        placeholder="..."
                                        value={this.state.inputValue}
                                        onChange={this.handleInputChange}
                                        style={{width:'600px'}}
                                    />
                                    {/*<Button type="primary" onClick={this.handleButtonClick}>*/}
                                    {/*    确认*/}
                                    {/*</Button>*/}
                                </Space>
                                <Space direction="horizontal">
                                    <span style={{ fontSize: '16px' }}>备注：</span>
                                    <Input
                                        placeholder="..."
                                        value={this.state.inputValue}
                                        onChange={this.handleQuestionInputChange}
                                        style={{marginLeft:'55px',width:'600px'}}
                                    />
                                </Space>
                                <Button type="primary" onClick={this.handleQuestionButtonClick} style={{width:'10%'}}>
                                    确认
                                </Button>
                            </Flex>
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
                        <Text style={{fontSize:'20px'}}>检索结果</Text>
                        <Card
                            style={{
                                background: 'rgb(255, 255, 255)',  // 更深一点的灰色背景
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // 阴影效果
                            }}
                        >
                            <Table dataSource={this.state.data} columns={columns} bordered={true}/>
                            <Button type="primary" onClick={this.handleQuestionButtonClick} style={{width:'10%'}}>
                                加入检索规则
                            </Button>
                        </Card>
                    </Flex>
                </Card>
            </div>
        );
    }
}

export default AISearch;

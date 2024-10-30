import React, { Component } from 'react';
import {Table, Button, Space, Collapse, Card, Flex, Progress, List, Alert, Input} from 'antd';
import { Typography } from 'antd';

const { Title,Text } = Typography;

const { Panel } = Collapse;

class Regulation extends Component {
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
                title: '元素名',
                dataIndex: 'id',
                key: 'id',
                sorter: true,
            },
            {
                title: '规则',
                dataIndex: 'time',
                key: 'time',
                sorter: true,
            },
            {
                title: '备注',
                dataIndex: 'place',
                key: 'place',
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
                        <Text style={{fontSize:'20px'}}>检索结果</Text>
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
            </div>
        );
    }
}

export default Regulation;

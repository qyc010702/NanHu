import React, { Component } from 'react';
import { Table, Button, Card, Typography } from 'antd';
import { Flex } from 'antd'; // 假设你已经有一个 Flex 组件

const { Text } = Typography;

class Projects extends Component {
    state = {
        data: [],
        error: null,
        image: null,
        bbox: { x: 50, y: 50, width: 100, height: 100 }, // 示例 bbox
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch('http://10.88.10.89:8080/project/getAll');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            if (result.success) {
                this.setState({ data: result.data });
            } else {
                this.setState({ error: 'Failed to fetch data' });
            }
        } catch (error) {
            console.error('Fetch error:', error);
            this.setState({ data: [] }); // 设置为默认值或本地数据
        }
    };

    handleSelect = (item) => {
        console.log('Selected item:', item);
        localStorage.setItem('selectedProjectId', item.id); // 将id存储到localStorage
        //alert(`项目ID ${item.id} 已保存到 localStorage`);
    };

    execute = async (record) => {

        try {
            console.log('Selected item:', record.id);
    
            const requestBody = {
                id: record.id,
            };
    
            const response = await fetch(`http://10.88.10.89:8080/file/startProcess?id=${record.id}`, {
                method: 'POST', // 更改为 POST 方法
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody), // 将请求体序列化为 JSON 字符串
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log('Response from server:', result);
            localStorage.setItem('selectedProjectId', record.id); // 将id存储到localStorage
        } catch (error) {
            console.error('Fetch error:', error);
            this.setState({ data: [] }); // 设置为默认值或本地数据
        }
    };


    render() {
        const columns = [
            {
                title: '项目ID',
                dataIndex: 'id',
                key: 'id',
                sorter: true,
            },
            {
                title: '名称',
                dataIndex: 'name',
                key: 'name',
                sorter: true,
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
                sorter: true,
                render: (text) => new Date(text).toLocaleString(), // 格式化时间
            },
            {
                title: '修改时间',
                dataIndex: 'modifiedTime',
                key: 'modifiedTime',
                sorter: true,
                render: (text) => new Date(text).toLocaleString(), // 格式化时间
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                sorter: true,
            },
            {
                title: '文件路径',
                dataIndex: 'filePath',
                key: 'filePath',
                sorter: true,
                render: text => <span style={{ maxWidth: '150px', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}>{text}</span>,
            },
            {
                title: '项目路径',
                dataIndex: 'projectPath',
                key: 'projectPath',
                sorter: true,
                render: text => <span style={{ maxWidth: '150px', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis' }}>{text}</span>,
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => {
                    if (record.status === '文件上传完成') {
                        return (
                            <Button onClick={() => this.execute(record)}>执行</Button>
                        );
                    } else if (record.status === '文件处理中') {
                        // 不显示按钮
                        return (
                            <Text style={{ fontSize: '15px' }}>正在处理请稍候</Text>
                        );
                    } else {
                        return (
                            <Button onClick={() => this.handleSelect(record)}>选择</Button>
                        );
                    }
                },
            },
        ];

        return (
            <div style={{ padding: 20 }}>
                <Card style={{ background: 'rgb(220, 220, 220)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Flex vertical gap="small">
                        <Text style={{ fontSize: '20px' }}>项目列表</Text>
                        <Card style={{ background: 'rgb(255, 255, 255)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', width: '100%' }}>
                            <Table dataSource={this.state.data} columns={columns} bordered={true} style={{ width: '100%' }} />
                        </Card>
                    </Flex>
                </Card>
            </div>
        );
    }
}

export default Projects;

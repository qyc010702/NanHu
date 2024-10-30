import React, { Component } from 'react';
import { Select, Button, Card, Typography, Input, notification } from 'antd';
const { Option } = Select;
const { Text } = Typography;

class ImportFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '待选择',
            projectName: '',
            filePath: '',
            projectPath: '',
            projectId:'',
        };
    }

    handleOptionChange = (value) => {
        this.setState({ selectedOption: value });
    };

    execute = async (record) => {
        try {
            console.log('Selected item:', record.id);
    
            const requestBody = {
                id: this.state.projectId,
            };
    
            const response = await fetch(`http://10.88.10.89:8080/file/startProcess?id=${this.state.projectId}`, {
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


    handleProjectNameChange = (e) => {
        this.setState({ projectName: e.target.value });
    };

    handleFilePathChange = (e) => {
        this.setState({ filePath: e.target.value });
    };

    handleProjectPathChange = (e) => {
        this.setState({ projectPath: e.target.value });
    };

    openNotification = () => {
        notification.success({
          message: '成功',
          description: '项目已创建。',
          duration: 2,  // 提示框持续显示的时间（秒）
        });
    };

    handleSubmit = async () => {
        const { projectName, filePath, projectPath } = this.state;
        const requestBody = {
            name: projectName,
            filePath: filePath,
            projectPath: projectPath,
        };
        console.log(requestBody);
        try {
            const response = await fetch('http://10.88.10.89:8080/project/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            const result = await response.json();
            if (result.success) {
                this.setState({ 
                    projectId: result.data.id, 
                });
                console.log(result.data.id)
                this.openNotification()
            } else {
                this.setState({ error: 'Failed to fetch data' });
            }
        } catch (error) {
            console.error(`项目创建失败: ${error.message}`);
        }
    };

    render() {
        const { selectedOption, projectName, filePath, projectPath } = this.state;

        return (
            <div>
                <h2>新建工程</h2>
                <Card style={{ marginTop: '10px', background: 'rgb(220, 220, 220)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Text>请输入工程名称</Text>
                    <Input
                        placeholder="..."
                        value={projectName}
                        onChange={this.handleProjectNameChange}
                        style={{ width: '180px', marginTop: '10px' }}
                    />
                </Card>
                <Card style={{ marginTop: '10px', background: 'rgb(220, 220, 220)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Text>选择已有规则集</Text>
                    <Select value={selectedOption} onChange={this.handleOptionChange} style={{ width: '150px', marginTop: '10px' }}>
                        <Option value='规则集1'>规则集1</Option>
                        <Option value='规则集2'>规则集2</Option>
                        <Option value='规则集3'>规则集3</Option>
                        <Option value='规则集4'>规则集4</Option>
                    </Select>
                </Card>
                <Card style={{ marginTop: '10px', background: 'rgb(220, 220, 220)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Text>输入输入文件目录</Text>
                    <Input
                        placeholder="输入文件目录路径"
                        value={filePath}
                        onChange={this.handleFilePathChange}
                        style={{ width: '180px', marginTop: '10px', marginBottom: '10px' }}
                    />
                </Card>
                <Card style={{ marginTop: '10px', background: 'rgb(220, 220, 220)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                    <Text>输入保存工程文件位置</Text>
                    <Input
                        placeholder="保存目录路径"
                        value={projectPath}
                        onChange={this.handleProjectPathChange}
                        style={{ width: '180px', marginTop: '10px', marginBottom: '10px' }}
                    />
                </Card>
                <Button
                    type="primary"
                    style={{ marginTop: '10px', width: '100px', height: '30px', borderRadius: '8px' }}
                    onClick={this.handleSubmit}
                >
                    新建工程
                </Button>
                <Button
                    type="primary"
                    style={{ marginTop: '10px', width: '100px', height: '30px', borderRadius: '8px', marginLeft: '10px' }}
                    onClick={this.execute}
                >
                    开始执行
                </Button>
            </div>
        );
    }
}

export default ImportFile;